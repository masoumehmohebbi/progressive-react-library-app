import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import useUser from '../features/authentication/useUser';

const Banner = () => {
  const navigate = useNavigate();

  const { data, refetch } = useUser();
  const userProfile = data?.data?.data;
  refetch();

  return (
    <section className="md:flex flex-row-reverse mt-12 md:mt-16 justify-between px-3 lg:px-0">
      <div className="w-[80%] md:w-[46%] max-w-screen-sm  mx-auto relative">
        <div className="aspect-w-4 aspect-h-4">
          <img
            alt="وبسایت آموزش برنامه نویسی |فرانت هوکس"
            src="/library.png"
            className="object-cover object-center w-full h-full md:absolute inset-0"
          />
        </div>
      </div>
      <div className="flex gap-y-9 flex-col-reverse items-center md:flex-row md:gap-x-5 md:items-center md:justify-between">
        <div className="text-center md:text-right text-secondary-800">
          <h1 className="font-extrabold text-2xl sm:text-[30px] md:text-[40px] lg:text-[50px] leading-relaxed mb-2 md:mb-5">
            آمار کتاب های خود
            <br />
            را داشته باشید
          </h1>
          <p className="text-xs md:text-lg max-w-xs sm:max-w-md font-medium text-secondary-500 mb-6 md:mb-2">
            با رابوک خیلی راحت می تونید مشخصات کتاب های خودتون رو ذخیره کنید، کتاب های
            خودتون رو جستجو کنید.
            <br />
            حتی یادتون نمی ره که چه کتاب هایی دارید&#128521;
            <br />
            کدوما رو خوندید و کدومارو قراره که بخونید
          </p>
          <div className="mt-8 text-xs md:text-lg font-semibold text-secondary-500">
            {userProfile ? (
              <p>
                {userProfile?.first_name} عزیز! به رابوک خوش آمدید &#128075; شروع کنید
              </p>
            ) : (
              <span className="flex gap-x-2 items-center justify-center sm:justify-start">
                برای شروع روی دکمه ورود کلیک کنید
                <button
                  onClick={() => navigate('/login')}
                  className="font-sans btn text-sm py-[9px] sm:py-2 sm:text-base btn--primary flex items-center gap-x-1"
                >
                  <CiLogout />
                  ورود
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
