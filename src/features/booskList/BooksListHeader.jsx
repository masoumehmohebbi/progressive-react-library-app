import { useState } from "react";
import Select from "../../ui/Select";

const options = [
  { value: "همه", label: "همه" },
  { value: "خوانده شده", label: "خوانده شده" },
  { value: "خوانده نشده", label: "خوانده نشده" },
];
const BooksListHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = () => {
    setSelectedOption;
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="title">کتاب های شما</h1>

      <Select options={options} value={selectedOption} onChange={onChange} />
    </div>
  );
};

export default BooksListHeader;
