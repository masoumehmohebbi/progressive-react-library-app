import { OptionProps } from '../types/BooksList';

interface SelectFieldProps {
  options: OptionProps[];
  label: string;
}

function SelectField({ options, label }: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700 whitespace-nowrap">
        {label}
        {/* {required && <span className="text-error">*</span>} */}
      </label>
      <select className="textField__input">
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
