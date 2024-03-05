const TextField = ({
  label,
  type,
  name,
  register,
  required,
  validationSchema,
  errors,
}) => {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <input
        dir="ltr"
        id={name}
        className="textField__input text-right"
        type={type}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
};
export default TextField;
