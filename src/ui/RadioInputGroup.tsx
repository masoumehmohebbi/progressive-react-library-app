import RadioInput from './RadioInput';

function RadioInputGroup({ register, watch, errors, configs, title }) {
  const { name, validationSchema = {}, options } = configs;

  return (
    <>
      <div className="flex gap-x-11">
        <h1 className="text-secondary-600">{title}</h1>
        <div>
          <div className="flex flex-wrap items-center justify-center gap-x-6">
            {options.map(({ label, value }) => (
              <RadioInput
                key={value}
                label={label}
                value={value}
                id={value}
                name={name}
                register={register}
                watch={watch}
                validationSchema={validationSchema}
                errors={errors}
              />
            ))}
          </div>
        </div>
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors[name]?.message}
        </span>
      )}
    </>
  );
}
export default RadioInputGroup;
