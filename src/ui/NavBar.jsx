import { useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { BiMenu, BiX } from "react-icons/bi";
import { HiMiniBookOpen, HiOutlineHeart } from "react-icons/hi2";

const NavBar = () => {
  let Links = [
    { name: "خانه", link: "/" },
    { name: "کتاب‌ها", link: "/" },
    { name: "جستجو", link: "/" },
    { name: "افزودن کتاب", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav
      className="py-3 w-full transiton-all duration-100 ease-out z-20 shadow-menu md:shadow-none backdrop-blur-2xl
  blur-0 opacity-100 sticky top-0 font-sans items-center px-2 sm:px-3 flex justify-between"
    >
      <ul
        className={`gap-x-6 fixed top-0 bg-green-200 text-secondary-0 md:bg-transparent h-screen md:h-auto md:col-span-5 flex md:ml-1 flex-col items-start md:items-center px-5 md:px-0 md:flex-row pt-20 md:pt-0 gap-y-6 md:gap-y-0 md:static md:z-auto z-[-1] left-0 w-full md:w-fit transition-all duration-500 ease-in ${
          open ? "right-0" : "rtl:right-[-1000px] ltr:left-[-1000px]"
        }`}
      >
        <div className="md:flex hidden items-center gap-x-1 ml-5">
          <IoLibraryOutline className="w-9 h-9 text-slate-800" />
          <span className="font-bold text-slate-800">رابوک</span>
        </div>
        {Links.map((link) => (
          <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href={link.link}
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamurger menu */}
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl  right-2 flex items-center gap-x-3  cursor-pointer md:hidden"
      >
        {!open ? (
          <BiMenu className="w-9 h-9 text-secondary-0" />
        ) : (
          <BiX className="w-9 h-9 text-secondary-0" />
        )}

        <IoLibraryOutline className="w-9 h-9 text-slate-800 md:hidden" />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-x-3 ">
        <button>
          <HiOutlineHeart className="w-9 h-9 text-red-500" />
        </button>
        <button className="font-sans btn btn--primary flex items-center gap-x-1">
          ورود
          <HiMiniBookOpen />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
