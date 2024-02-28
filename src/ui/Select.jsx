function Select({ value, onChange, options, order }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`textField__input py-2 text-xs order-${order} col-span-5 sm:col-span-2`}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
