export interface OptionProps {
  id: string | number;
  name: string;
}
interface SelectProps {
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: OptionProps[];
}

function Select({ value, onChange, options }: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`textField__input py-2 order-2 col-span-10 bg-secondary-300 text-xs sm:col-span-5 lg:col-span-2`}
    >
      {options?.map((option) => (
        <option value={option.name} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
export default Select;
