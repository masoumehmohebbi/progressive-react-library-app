export interface OptionInterface {
  id: string;
  name: string;
}

interface RHFSelectProps {
  label: string;
  name: string;
  register: Function;
  options: OptionInterface[];
  required?: boolean;
  children?: React.ReactNode;
  errors?: Record<string, any>;
  validationSchema?: Record<string, any>;
}
function RHFSelect({
  label,
  name,
  register,
  options,
  required,
  children,
  errors,
}: RHFSelectProps) {
  return (
    <div className="col-span-3">
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>

      <div className="flex">
        <select
          {...register(name)}
          id={name}
          className="textField__input border-primary-600 rounded-l-none"
        >
          {options?.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        {children}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
}
export default RHFSelect;
