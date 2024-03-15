import { useState } from 'react';
import { HiMiniBookOpen } from 'react-icons/hi2';
import SearchField from '../../ui/SearchField';
import Filter from '../../ui/Filter';
import AddBook from './AddBook';
import useCategories from './useCategories';
import FilterDropDown from '../../ui/FilterDropDown';
import Modal from '../../ui/Modal';

const statusOptions = [
  {
    label: 'همه',
    value: '',
  },
  {
    label: 'خوانده‌ها',
    value: 'true',
  },
  {
    label: 'نخوانده‌ها',
    value: 'false',
  },
];
const BooksListHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useCategories();
  const category = data?.data?.data;

  let array = [];
  category?.map((i) => array.push(i));
  const newObj = { id: -1, name: 'همه' };
  array = [...array, newObj];
  array.sort((a, b) => a.id - b.id);

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
          <SearchField filterField="title" />
        </div>
        <Filter filterField="is_read" options={statusOptions} />
        <FilterDropDown filterField="category" options={array} />
      </div>
      <Modal title="کتاب خود را ثبت کنید" open={isOpen} onClose={() => setIsOpen(false)}>
        <AddBook onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default BooksListHeader;
