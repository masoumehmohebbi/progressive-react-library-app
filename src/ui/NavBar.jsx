import { useState } from "react";
import { IoLibraryOutline } from "react-icons/io5";
import { BiMenu, BiX } from "react-icons/bi";
import { HiOutlineHeart } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Links = [
  { name: "خانه", link: "/" },
  { name: "کتاب‌ها", link: "/" },
  { name: "جستجو", link: "/" },
  { name: "افزودن کتاب", link: "/" },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <nav
        className="py-3 w-full transiton-all duration-100 ease-out z-20 shadow-menu md:shadow-none backdrop-blur-2xl
  blur-0 opacity-100 sticky top-0 font-sans items-center px-2 sm:px-3 flex justify-between"
      >
        <ul
          className={`gap-x-6 fixed top-0 bg-secondary-200 text-secondary-0 md:bg-transparent h-screen md:h-auto md:col-span-5 flex md:ml-1 flex-col items-start md:items-center px-5 md:px-0 md:flex-row pt-20 md:pt-0 md:static md:z-auto z-[-1] left-0 w-full md:w-fit transition-all duration-500 ease-in ${
            open ? "right-0" : "rtl:right-[-1000px] ltr:left-[-1000px]"
          }`}
        >
          <div className="md:flex hidden items-center gap-x-1 ml-5">
            <IoLibraryOutline className="w-9 h-9 text-slate-800" />
            <span className="font-bold text-slate-800">رابوک</span>
          </div>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-secondary-800 hover:text-primary-600 duration-500"
              >
                {link.name}
              </Link>
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
          <button className="relative" onClick={() => setIsModalOpen(true)}>
            <HiOutlineHeart className="w-9 h-9 text-red-500" />
            <span className="badge">0</span>
          </button>
          <button className="font-sans btn btn--primary flex items-center gap-x-1">
            <CiLogout />
            ورود
          </button>
        </div>
      </nav>

      <Modal
        title="کتاب های مورد علاقه ی من"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        nothing khkhkh
      </Modal>
    </>
  );
};

export default NavBar;
