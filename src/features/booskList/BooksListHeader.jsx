import { useState } from "react";
import Select from "../../ui/Select";
import { HiMiniBookOpen } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import SearchField from "../../ui/SearchField";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";

const options = [
  { value: "همه", label: "همه" },
  { value: "خوانده شده", label: "خوانده شده" },
  { value: "خوانده نشده", label: "خوانده نشده" },
];
const categoryOptions = [
  { value: "رمان", label: "رمان" },
  { value: "شعر", label: "شعر" },
  { value: "روانشناسی", label: "روانشناسی" },
  { value: "انگیزشی", label: "انگیزشی" },
  { value: "دیگر", label: "دیگر" },
];

const readStatusOptions = [
  { value: "true", label: "آره" },
  { value: "false", label: "نه" },
];

const BooksListHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = () => {
    setSelectedOption;
  };

  return (
    <>
      <header className="flex justify-between">
        <h1 className="title">کتاب های شما</h1>

        <div className="flex justify-end col-span-3 sm:col-span-1 order-2 sm:order-4">
          <button
            onClick={() => setIsOpen(true)}
            className="font-sans btn btn--primary flex items-center gap-x-1"
          >
            افزودن
            <HiMiniBookOpen />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-10 grid-rows-2 sm:grid-rows-1 items-center gap-6 my-6">
        <div className="w-full order-1 sm:order-none col-span-10 row-span-1 sm:col-span-6">
          <SearchField />
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

      <Modal
        title="کتاب خود را ثبت کنید"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <form>
          <TextField name="title" label="عنوان" type="text" />
          <TextField name="author" label="نویسنده" type="text" />
          <SelectField label="دسته بندی" options={categoryOptions} />
          <SelectField label="قبلا خوانده ای؟" options={readStatusOptions} />

          <TextField name="cover" label="عکس" type="file" />

          <button className="btn btn--primary w-full">ثبت</button>
        </form>
      </Modal>
    </>
  );
};

export default BooksListHeader;
