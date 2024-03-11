import { BiLogoInstagram, BiLogoTelegram, BiLogoTwitter } from 'react-icons/bi';
import { IoLibraryOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toPersianNumbers } from '../utils/toPersianNumbers';

const Footer = () => {
  return (
    <footer className="bg-secondary-300 rounded-t-md p-5 text-secondary-800">
      <div className="grid grid-cols-1 gap-y-8 sm:gap-y-0 sm:grid-cols-4 items-start">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-1 ml-5">
            <IoLibraryOutline className="w-9 h-9 text-secondary-800" />
            <span className="font-bold">رابوک</span>
          </div>
          <p className="mt-2">
            رابوک به کتابخونه ی شما نظم میده. باعث میشه بهتر کتاب هایی که دارید رو مدیریت
            کنید. اینجوری دیگه موقع خرید، یادتون نمیره که چه کتاب هایی رو از قبل داشتید.
            فقط کافیه یه سر به حساب کاربری خودتون در رابوک بزنید.&#128525;
          </p>
        </div>

        <ul className="sm:text-center">
          <h1 className="title text-base mb-2">لینک های مفید</h1>
          <li className="text-sm sm:text-base">
            <a href="#">خانه</a>
          </li>
          <li className="text-sm sm:text-base">
            <Link to="/login">ورود</Link>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#book_lists">کتاب ها </a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#book_lists">جستجو</a>
          </li>
          <li className="text-sm sm:text-base">
            <a href="#book_lists">افزودن کتاب</a>
          </li>
        </ul>

        <ul className="sm:text-center">
          <h1 className="title text-base mb-2">تیم</h1>
          <li className="text-sm sm:text-base">
            <Link to="/about-us/contact">درباره ما</Link>
          </li>
        </ul>
      </div>

      <div className="my-7 bg-secondary-400 h-[1px] w-full rounded-md"></div>

      <h5 className="w-full text-center">
        {toPersianNumbers(1402)} - © تمامی حقوق برای رابوک محفوظ است
      </h5>
    </footer>
  );
};

export default Footer;
