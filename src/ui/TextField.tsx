type TextFieldProps = {
  label: string;
  type?: string;
  name: string;
  register?: any;
  required?: boolean;
  validationSchema?: any;
  errors?: any;
  accept?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  addField?: any;
};
const TextField = ({
  label,
  type,
  name,
  register,
  required,
  validationSchema,
  errors,
  accept,
  onChange,
  children,
  addField,
}: TextFieldProps) => {
  return (
    <div className="col-span-3">
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
        {required && <span className="text-error">*</span>}
      </label>
      <div className="flex items-center">
        <input
          accept={accept}
          dir="ltr"
          id={name}
          className={`textField__input text-right ${
            addField === 'true' && ' rounded-l-none'
          }`}
          type={type}
          autoComplete="off"
          {...register(name, validationSchema)}
          onChange={onChange}
        />
        {children}
      </div>

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>
      )}
    </div>
  );
};
export default TextField;
