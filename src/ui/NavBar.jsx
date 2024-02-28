import { HiOutlineHeart } from "react-icons/hi2";
import { IoLibraryOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav
      className="py-3 w-full transiton-all duration-100 ease-out z-20 shadow-menu md:shadow-none backdrop-blur-2xl
    blur-0 opacity-100 sticky top-0 font-sans items-center px-2 sm:px-3 flex justify-between"
    >
      <div className="flex items-center gap-x-1">
        <IoLibraryOutline className="w-9 h-9 text-slate-800" />
        <span className="font-bold">رابوک</span>
      </div>

      <button className="flex items-center gap-x-1 justify-end">
        <span className="hidden lg:block"> علاقه مندی ها</span>
        <HiOutlineHeart className="w-9 h-9 text-red-500" />
      </button>
    </nav>
  );
};

export default NavBar;
