// eslint-disable-next-line react/prop-types
const Outside = ({ register, errors }) => {
  return (
    <div className="flex gap-4 mt-4">
      <input
        {...register("refer_outside_name", { required: true })}
        className="outline outline-2 outline-red-400 px-2 py-1"
        type="text"
        placeholder="enter name"
      />
      <input
        {...register("refer_outside_relation", { required: true })}
        className="outline outline-2 outline-red-400 px-2 py-1"
        type="text"
        placeholder="relation"
      />
      <input
        {...register("refer_outside_phone", { required: true })}
        className="outline outline-2 outline-red-400 px-2 py-1"
        type="number"
        placeholder="Phone number"
      />
      <input
        {...register("refer_outside_designation", { required: true })}
        className="outline outline-2 outline-red-400 px-2 py-1"
        type="text"
        placeholder="designation"
      />
      <input
        {...register("refer_outside_company", { required: true })}
        className="outline outline-2 outline-red-400 px-2 py-1"
        type="text"
        placeholder="company name"
      />
    </div>
  );
};

export default Outside;
