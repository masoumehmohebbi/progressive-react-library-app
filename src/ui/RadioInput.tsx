function RadioInput({ label, value, register, name, id, validationSchema = {}, watch }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <label htmlFor={id}>{label}</label>

      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900 focus:ring-1"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
      />
    </div>
  );
}
export default RadioInput;
