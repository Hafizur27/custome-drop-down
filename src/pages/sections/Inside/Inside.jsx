// eslint-disable-next-line react/prop-types
const Inside = ({ register, errors }) => {
  return (
    <div>
      <div className="pt-4 flex gap-4">
        <input
          {...register("refer_inside_name", { required: true })}
          className="outline outline-2 outline-red-400 px-2 py-1"
          type="text"
          placeholder="reference name"
        />
        <input
          {...register("refer_inside_relation", { required: true })}
          className="outline outline-2 outline-red-400 px-2 py-1"
          type="text"
          placeholder="relation"
        />
        <input
          {...register("refer_inside_phone", { required: true })}
          className="outline outline-2 outline-red-400 px-2 py-1"
          type="number"
          placeholder="Phone number"
        />
      </div>
    </div>
  );
};

export default Inside;
