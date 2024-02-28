import { useState } from "react";
import Select from "../../ui/Select";
import TextField from "../../ui/TextField";
import { HiMiniBookOpen } from "react-icons/hi2";

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
    <>
      <header className="flex justify-between">
        <h1 className="title">کتاب های شما</h1>

        <div className="flex justify-end col-span-3 sm:col-span-1 order-2 sm:order-4">
          <button className="font-sans btn btn--primary flex items-center gap-x-1">
            افزودن
            <HiMiniBookOpen />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-10 grid-rows-2 sm:grid-rows-1 items-center gap-6 my-6">
        <div className="w-full order-1 col-span-10 row-span-1 sm:col-span-6">
          <TextField />
        </div>
        <Select
          order="2"
          options={options}
          value={selectedOption}
          onChange={onChange}
        />
        <Select
          order="3"
          options={options}
          value={selectedOption}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default BooksListHeader;
