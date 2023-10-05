/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import Employee from "./sections/Employee/Employee";
import Driver from "./sections/Driver/Driver";

import { useForm } from "react-hook-form";
const User = () => {
  const min = 100000;
  const max = 999999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const currentDate = new Date().toJSON().slice(0, 10);
  const [info, setInfo] = useState({
    driver: false,
    employee: false,
  });

 

  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(()=> {
    if(!info.driver){
      unregister("id")
      unregister("date")
      unregister("option")
      unregister("driver_code")
      unregister("driver_name")
      unregister("driver_email")
      unregister("driver_password")
      unregister("driver_designation")
      unregister("driver_img")
      unregister("driver_license")
      unregister("driver_nid")
      unregister("driver_salary")
      unregister("driver_pass_year")
      unregister("driver_degree")
      unregister("driver_gpa")
      unregister("reference_details")

    }
    if(!info.employee){
      unregister("id")
      unregister("date")
      unregister("option")
      unregister("employee_code")
      unregister("employee_name")
      unregister("employee_email")
      unregister("employee_password")
      unregister("employee_designation")
      unregister("employee_img")
      unregister("employee_nid")
      unregister("employee_salary")
      unregister("employee_pass_year")
      unregister("employee_degree")
      unregister("employee_gpa")
      unregister("reference_details")

    }

  }, [info])

  return (
    <div className="pt-4">
      <h4 className="text-3xl font-bold p-4 ">
        <span className="text-red-500">Registration</span> Form
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4  w-[50%] ">
        <input
          className="outline outline-2 px-2 py-1 rounded outline-red-400 w-[50%]"
          type="text"
          {...register("id", { required: true })}
          value={randomNumber}
        />
        {errors.id && <span className=" text-red-500">Please insert your id</span>}
        <br />
        <br />
        <input
          className="w-[50%] outline outline-2 px-2 py-1 rounded outline-red-400"
          type="date"
          value={currentDate}
          {...register("date", { required: true })}
        />
        {errors.date && <span className=" text-red-500">Please insert valid date</span>}
        <br />
        <br />

        <select
          className="w-[50%] outline outline-2 px-2 py-1 outline-red-400 rounded"
          {...register("dropdown", { required: true })}
          onChange={(e) =>
            setInfo({
              ...info,
              driver: e.target.value === "driver",
              employee: e.target.value == "employee",
            })
          }
        >
          <option value="">Select one</option>
          <option value="driver">Driver</option>
          <option value="employee">Employee</option>
        </select>
        {errors.dropdown && <span className=" text-red-500">Please Select user</span>}

        {info.driver && <Driver errors={errors} register={register} unregister={unregister} />}
        {info.employee && <Employee errors={errors} register={register} unregister={unregister} />}

        {/* submit btn */}
      </form>
    </div>
  );
};

export default User;
