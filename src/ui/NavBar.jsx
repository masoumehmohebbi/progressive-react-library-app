import TextField from "./TextField";
import { HiMiniBookOpen, HiOutlineHeart } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div
      className="w-full transiton-all duration-100 ease-out z-20 shadow-menu md:shadow-none backdrop-blur-2xl
    blur-0 opacity-100 grid sticky top-0 font-sans grid-cols-9 sm:grid-cols-8 grid-rows-2 sm:grid-rows-1 items-center px-2 sm:px-3"
    >
      <div className="flex items-center col-span-3 sm:col-span-2 order-1 sm:order-1">
        <img className="w-16 h-16" src="/logo.svg" alt="book" />
        <span>کتابخانه ی شما</span>
      </div>

      <div className="col-span-9 row-span-2 sm:col-span-3 order-4 sm:order-2">
        <TextField />
      </div>

      <button className="flex items-center gap-x-1 justify-end col-span-3 sm:col-span-2 order-3 sm:order-2">
        <span className="hidden lg:block"> علاقه مندی ها</span>
        <HiOutlineHeart className="w-9 h-9 text-red-500" />
      </button>

      <div className="flex justify-end col-span-3 sm:col-span-1 order-2 sm:order-4">
        <button className="font-sans btn btn--primary flex items-center gap-x-1">
          افزودن
          <HiMiniBookOpen />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
