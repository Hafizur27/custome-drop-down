/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Inside from "../Inside/Inside";
import Outside from "../Outside/Outside";

// eslint-disable-next-line react/prop-types
const Employee = ({ register, errors, unregister }) => {
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

  const [info, setInfo] = useState({
    inside: false,
    outside: false,
  });

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
        <span className="text-green-500">Employee</span> Info
      </h3>
      <div className="flex flex-col gap-4">
        <input
          {...register("employee_code", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded w-[25%]"
          value={randomNumber}
          type="text"
          placeholder="Please Insert Your Code"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_name", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="text"
          placeholder="Please Insert your Name"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_email", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="email"
          placeholder="Please Insert Your Email"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_password", { required: true })}
          value={password}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="password"
          placeholder="please Insert Your password"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_designation", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded w-[25%]"
          type="text"
          placeholder="Please insert your designation"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_img", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="text"
          placeholder="Pleaser insert your photo"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_nid", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="number"
          placeholder="Insert your nid number"
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        <input
          {...register("employee_salary", { required: true })}
          className="outline outline-2 outline-green-400 px-2 py-1 rounded  w-[25%]"
          type="text"
          placeholder="put your salary info
        "
        />
        {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
      </div>
      <div>
        <h3 className="font-bold py-2">Education: </h3>
        <div className="flex gap-4">
          <input
            {...register("employee_pass_year", { required: true })}
            className="outline outline-2 outline-green-400 px-2 py-1 rounded "
            type="text"
            placeholder="passing year"
          />
          {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
          <input
            {...register("employee_degree", { required: true })}
            className="outline outline-2 outline-green-400 px-2 py-1 rounded "
            type="text"
            placeholder="degree"
          />
          {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
          <input
            {...register("employee_gpa", { required: true })}
            className="outline outline-2 outline-green-400 px-2 py-1 rounded "
            type="text"
            placeholder="gpa"
          />
          {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
        </div>
      </div>
      
      <select
        {...register("employee_details", { required: true })}
        onChange={(e) =>
          setInfo({
            ...info,
            inside: e.target.value === "inside",
            outside: e.target.value === "outside",
          })
        }
        className="outline outline-2 outline-green-400 px-2 py-1 rounded mt-4"
        
      >
        <option value="">Reference</option>
        <option value="inside">Inside</option>
        <option value="outside">Outside</option>
      </select>
      {errors.driver_code && <span className=" text-red-500">Please insert your code</span>}
      <div>
        {info.inside && (
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
            {" "}
            <Outside register={register} errors={errors} />{" "}
            <input
              className="bg-amber-400 px-4 py-1 rounded text-white mt-4 font-bold"
              type="submit"
              value="Submit"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
