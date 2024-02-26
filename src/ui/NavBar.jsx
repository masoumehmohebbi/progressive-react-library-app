import TextField from "./TextField";
import { HiMiniBookOpen, HiOutlineHeart } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="bg-blue-200 grid font-sans grid-cols-5 items-center px-2 sm:px-0">
      <div className="flex items-center">
        <img className="w-16 h-16" src="/logo.svg" alt="book" />
        <span className="hidden lg:block">کتابخانه ی شما</span>
      </div>
      <div className="col-span-2">
        <TextField />
      </div>
      <div className="flex justify-end">
        <button className="font-sans btn btn--primary flex items-center gap-x-1">
          افزودن
          <HiMiniBookOpen className="hidden sm:block" />
        </button>
      </div>

      <button className="flex justify-end">
        <HiOutlineHeart className="w-9 h-9 text-red-500" />
      </button>
    </div>
  );
};

export default NavBar;
