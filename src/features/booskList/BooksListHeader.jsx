import { useState } from 'react';
import Select from '../../ui/Select';
import { HiMiniBookOpen } from 'react-icons/hi2';
import SearchField from '../../ui/SearchField';
import Filter from '../../ui/Filter';
import AddBook from './AddBook';

const categoryOptions = [
  { value: 'همه', label: 'دسته بندی(همه)' },
  { value: 'رمان', label: 'رمان' },
  { value: 'شعر', label: 'شعر' },
  { value: 'روانشناسی', label: 'روانشناسی' },
  { value: 'انگیزشی', label: 'انگیزشی' },
  { value: 'دیگر', label: 'دیگر' },
];

const statusOptions = [
  {
    label: 'همه',
    value: 'ALL',
  },
  {
    label: 'خوانده‌ها',
    value: 'OPEN',
  },
  {
    label: 'نخوانده‌ها',
    value: 'CLOSED',
  },
];
const BooksListHeader = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = () => {
    setSelectedOption;
  };

  return (
    <>
      <header className="px-2 flex justify-between">
        <h1 className="title">کتاب های شما</h1>

        <div className="flex text-sm sm:text-base justify-end col-span-3 sm:col-span-1 order-2 sm:order-4">
          <button
            onClick={() => setIsOpen(true)}
            className="font-sans btn btn--primary flex items-center gap-x-1"
          >
            افزودن
            <HiMiniBookOpen />
          </button>
        </div>
      </header>
      <div className="px-2 grid grid-cols-10 mt-11 grid-rows-2 sm:grid-rows-1 max-[570px]:grid-rows-3 items-center gap-6 my-6">
        <div className="w-full order-1 sm:order-none col-span-10 row-span-1 sm:col-span-5">
          <SearchField />
        </div>
        <Filter filterField="status" options={statusOptions} />
        <Select value="category" options={categoryOptions} onChange={onChange} />
      </div>
      <AddBook isOpen={isOpen} setIsOpen={setIsOpen} categoryOptions={categoryOptions} />
    </>
  );
};

export default BooksListHeader;
