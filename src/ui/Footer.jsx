import { BiLogoInstagram, BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { IoLibraryOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary-300 rounded-t-md p-5 mt-28 text-secondary-800">
      <div className="grid grid-cols-1 gap-y-8 sm:gap-y-0 sm:grid-cols-3 md:grid-cols-4 items-start">
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
          <li className="text-sm sm:text-base">
            <Link to="/about-us/contact">درباره ما</Link>
          </li>
        </ul>

        <ul className="flex gap-x-5 bg-blue-200 justify-end">
          <li>
            <a
              href="https://www.instagram.com/masoume.frontend.js?utm_source=qr&igsh=MTNxdzBpN2k4OHhwMw=="
              className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
            >
              <BiLogoInstagram className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
            >
              <BiLogoTwitter className="text-2xl" />
            </a>
          </li>

          <li>
            <a
              href="#"
              className="rounded-full bg-primary-700 duration-300 hover:bg-secondary-200 h-10 w-10 flex justify-center items-center border-none"
            >
              <BiLogoTelegram className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      <div className="my-7 bg-secondary-400 h-[1px] w-full rounded-md"></div>

      <h5>رابوک 1402 © </h5>
    </footer>
  );
};

export default Footer;
