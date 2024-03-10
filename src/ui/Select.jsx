function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`textField__input py-2 order-2 col-span-10 bg-secondary-300 text-xs sm:col-span-5 lg:col-span-2`}
    >
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
