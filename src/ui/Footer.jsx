import { IoLibraryOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary-300 rounded-t-md p-5 mt-28">
      <div className="grid grid-cols-3 md:grid-cols-5 items-start">
        <div className="flex items-center gap-x-1 ml-5">
          <IoLibraryOutline className="w-9 h-9 text-slate-800" />
          <span className="font-bold text-slate-800">رابوک</span>
        </div>

        <ul>
          <h1 className="title text-base">لینک های مفید</h1>
          <li>خانه</li>
          <li>ورود</li>
          <li>کتاب ها</li>
          <li>جستجو</li>
          <li>افزودن کتاب</li>
        </ul>

        <ul>
          <h1 className="title text-base">تیم</h1>
          <li>درباره ما</li>
        </ul>
      </div>

      <div className="my-7 bg-primary-300 h-[1px] w-full rounded-md"></div>

      <h5>رابوک 1402 © </h5>
    </footer>
  );
};

export default Footer;
