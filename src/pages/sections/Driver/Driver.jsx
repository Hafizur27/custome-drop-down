/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Inside from "../Inside/Inside";
import Outside from "../Outside/Outside";

// eslint-disable-next-line react/prop-types
const Driver = ({ register, errors, unregister }) => {
  const [info, setInfo] = useState({
    inside: false,
    outside: false,
  });


  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const generateRandomPassword = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  };
  const password = generateRandomPassword(12);

  useEffect(()=> {
    if(!info.inside){
      unregister("refer_inside_name")
      unregister("refer_inside_relation")
      unregister("refer_inside_phone")
      unregister("refer_outside_name")
      unregister("refer_outside_relation")
      unregister("refer_outside_phone")
      unregister("refer_outside_designation")
      unregister("refer_outside_company")
    }
    if(!info.outside){
      unregister("refer_inside_name")
      unregister("refer_inside_relation")
      unregister("refer_inside_phone")
      unregister("refer_outside_name")
      unregister("refer_outside_relation")
      unregister("refer_outside_phone")
      unregister("refer_outside_designation")
      unregister("refer_outside_company")
    }
  }, [info])

  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold py-4">
        <span className="text-orange-500">Driver</span> Info
      </h3>
      <div className="flex flex-col gap-4">
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded w-[50%]"
          type="text"
          value={randomNumber}
          placeholder="Please Insert Your Code"
          {...register("driver_code", { required: true })}
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="text"
          placeholder="Please Insert your Name"
          {...register("driver_name", { required: true })}
        />
        {errors.driver_name && <span className=" text-red-500">Please insert your name</span>}

        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="email"
          placeholder="Please Insert Your Email"
          {...register("driver_email", { required: true })}
        />
         {errors.driver_email && <span className=" text-red-500">Please insert your email</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="password"
          placeholder="please Insert Your password"
          value={password}
          {...register("driver_password", { required: true })}
        />
         {errors.driver_password && <span className=" text-red-500">Please insert your password</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded w-[50%]"
          type="text"
          placeholder="Please insert your designation"
          {...register("driver_designation", { required: true })}
        />
         {errors.driver_designation && <span className=" text-red-500">Please insert your designation</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="text"
          placeholder="Pleaser insert your photo"
          {...register("driver_img", { required: true })}
        />
         {errors.driver_img && <span className=" text-red-500">Please insert your photo</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="text"
          placeholder="insert your license info"
          {...register("driver_license", { required: true })}
        />
         {errors.driver_license && <span className=" text-red-500">Please insert your license number</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="text"
          placeholder="Insert your nid"
          {...register("driver_nid", { required: true })}
        />
         {errors.driver_nid && <span className=" text-red-500">Please insert your nid number</span>}
        <input
          className="outline outline-2 outline-orange-400 px-2 py-1 rounded  w-[50%]"
          type="text"
          placeholder="put your salary info
      "
          {...register("driver_salary", { required: true })}
        />
         {errors.driver_salary && <span className=" text-red-500">Please insert your salary</span>}
      </div>
      <div>
        <h3 className="font-bold py-2">Education: </h3>
        <div className="flex gap-4">
          <input
            className="outline outline-2 outline-orange-400 px-2 py-1 rounded "
            type="text"
            name="pass_year"
            placeholder="passing year"
            {...register("driver_pass_year", { required: true })}
          />
           {errors.driver_pass_year && <span className=" text-red-500">Please insert your passing year</span>}
          <input
            className="outline outline-2 outline-orange-400 px-2 py-1 rounded "
            type="text"
            placeholder="degree"
            {...register("driver_degree", { required: true })}
          />
           {errors.driver_degree && <span className=" text-red-500">Please insert your degree</span>}
          <input
            className="outline outline-2 outline-orange-400 px-2 py-1 rounded "
            type="text"
            placeholder="gpa"
            {...register("driver_gpa", { required: true })}
          />
           {errors.driver_gpa && <span className=" text-red-500">Please insert GPA</span>}
        </div>
      </div>
      <select
        {...register("reference_details", { required: true })}
        onChange={(e) => {
          const selectedValue = e.target.value;
          setInfo({
            inside: selectedValue === "inside",
            outside: selectedValue === "outside",
          });
        }}
        className="outline outline-2 outline-orange-400 px-2 py-1 rounded mt-4"
      >
        <option value="">Reference Info</option>
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
      </select>
      {errors.reference_details && <span className=" text-red-500">Details Info is required</span>}

      <div>
        {info.inside === true && (
          <div>
            {" "}
            <Inside register={register} errors={errors} />{" "}
            <input
              className="bg-amber-400 px-4 py-1 rounded text-white mt-4 font-bold"
              type="submit"
              value="Submit"
            />
          </div>
        )}
        {info.outside && (
          <div>
            <Outside register={register} errors={errors} />{" "}
            <input
              className="bg-amber-400 px-4 py-1 rounded text-white mt-4 font-bold"
              type="submit"
              value="Submit"
            />{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Driver;
