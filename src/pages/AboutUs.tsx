import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from '../hooks/useMoveBack';

const developers = [
  {
    id: 1,
    name: 'معصومه محبی',
    field: 'توسعه دهنده فرانت اند',
    socialMedia: [
      {
        id: 1,
        icon: FaLinkedin,
        src: 'https://www.linkedin.com/in/masoumemohebbi/',
      },
      { id: 2, icon: FaGithub, src: 'https://github.com/masoumehmohebbi' },
      { id: 3, icon: FaTelegram, src: 'https://t.me/frontend_source' },
    ],
  },
  {
    id: 2,
    name: 'علی سیدی',
    field: 'توسعه دهنده ی بک اند',
    socialMedia: [
      {
        id: 1,
        icon: FaLinkedin,
        src: 'https://www.linkedin.com/in/aliseyedi01/',
      },
      { id: 2, icon: FaGithub, src: 'https://github.com/aliseyedi01' },
      { id: 3, icon: FaTelegram, src: 'https://t.me/aliseyedi01' },
    ],
  },
];

export const AboutUs = () => {
  const moveBack = useMoveBack();
  return (
    <div className="pb-5 text-secondary-800">
      <div className="w-full px-5 mx-auto h-auto flex items-center justify-center">
        <div className="pt-8 pb-24 w-full md:w-11/12">
          <button onClick={moveBack}>
            <HiArrowRight className="w-6 h-6 text-secondary-500" />
          </button>
          <div className="text-centerr">
            <h1 className="text-2xl font-bold text-center">درباره ی رابوک</h1>
            <div className="pt-9 text-right text-secondary-600 w-full lg:max-w-4xl mx-auto">
              <p>
                رابوک، یک سایت ثبت کتاب هست. مدت هاست این چالش باهام بود که بیام و کتاب
                هایی که میخرم رو در یک اپلیکیشنی وارد کنم تا بدونم که چه کتاب هایی رو
                دارم، چه کتاب هایی رو ندارم و کتاب های تکراری نخرم و بدونم از تمام کتاب
                هایی که دارم چه تعدادشو خوندم و چه تعدادی رو باید بخونم. خودم به این
                اپلیکیشن واقعا احتیاج داشتم و به همین دلیل اومدیم این اپلیکیشن رو توسعه
                دادیم و با شما به اشتراک گذاشتیم تا شما هم بتونید ازش بهره ببرید.
              </p>

              <ul dir="ltr" className="my-3">
                <li className="">
                  .این اپلیکیشن با جاوااسکریپت - ریکت جی اس توسعه داده شده است &#x2022;
                </li>
                <li> .هست Tailwind-css استایل دهی این با &#x2022;</li>
                <li> .هست tanstack-query مدیریت استیت با &#x2022;</li>
                <li> .هست react-hook-form و اعتبارسنجی فرم با &#x2022;</li>
                <li>.توسعه داده شده است supabase و django بک اند با &#x2022;</li>
              </ul>

              <h3 className="my-6 font-semibold">
                این اپلیکیشن توسط برنامه نویس های زیر توسعه داده شده:
              </h3>
            </div>
          </div>
          <hr className="py-4" />
          <div className="text-center mt-19">
            <h1 className="text-2xl font-bold">توسعه دهنده ها</h1>
            <div className="grid grid-cols-1 md:flex md:justify-center gap-5 pt-9">
              {developers.map((dev) => (
                <div
                  key={dev.id}
                  className="border md:w-1/3 bg-secondary-0 block sm:justify-between sm:items-center sm:flex md:block border-secondary-50 hover:scale-105 duration-300 p-4 text-center rounded-md shadow-md"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
                    {dev.name}
                  </h2>
                  <p className="mt-2 text-secondary-500">{dev.field}</p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    {dev.socialMedia.map((item) => (
                      <Link
                        key={item.id}
                        className="bg-primary-100 font-extralight hover:bg-primary-200 duration-500 rounded-full p-2 border shadow"
                        to={item.src}
                      >
                        <item.icon className="text-primary-900 text-xl" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
