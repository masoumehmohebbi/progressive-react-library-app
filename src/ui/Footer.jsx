import { IoLibraryOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary-300 rounded-t-md p-5 mt-28 text-secondary-800">
      <div className="grid grid-cols-1 gap-y-8 sm:gap-y-0 sm:grid-cols-3 md:grid-cols-5 items-start">
        <div className="flex items-center gap-x-1 ml-5">
          <IoLibraryOutline className="w-9 h-9 text-secondary-800" />
          <span className="font-bold">رابوک</span>
        </div>

        <ul>
          <h1 className="title text-base">لینک های مفید</h1>
          <li className="text-sm sm:text-base">خانه</li>
          <li className="text-sm sm:text-base">ورود</li>
          <li className="text-sm sm:text-base">کتاب ها</li>
          <li className="text-sm sm:text-base">جستجو</li>
          <li className="text-sm sm:text-base">افزودن کتاب</li>
        </ul>

        <ul>
          <h1 className="title text-base">تیم</h1>
          <li className="text-sm sm:text-base">درباره ما</li>
        </ul>
      </div>

      <div className="my-7 bg-primary-300 h-[1px] w-full rounded-md"></div>

      <h5>رابوک 1402 © </h5>
    </footer>
  );
};

export default Footer;
