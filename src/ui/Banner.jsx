const Banner = () => {
  return (
    <section className="flex mt-12 md:mt-16 justify-between">
      <div className="flex gap-y-9 flex-col-reverse items-center md:flex-row md:gap-x-5 md:items-center md:justify-between">
        <div className="text-center md:text-right">
          <h1 className="font-extrabold text-2xl sm:text-[30px] md:text-[40px] lg:text-[50px] leading-relaxed text-secondary-900 mb-2 md:mb-5">
            آمار کتاب های خود
            <br />
            را داشته باشید
          </h1>
          <p className="text-xs md:text-lg font-medium text-gray-400 mb-6 md:mb-2">
            با رابوک خیلی راحت می تونید مشخصات کتاب های خودتون <br /> رو ذخیره
            کنید و در صورت لزوم کتاب های خودتون رو پیدا کنید
            <br />
            اینجوری یادتون نمی ره که چه کتاب هایی دارید
            <br />
            کدوما رو خوندید
            <br />و کدومارو قراره که بخونید
            <br />
            برای شروع وارد شوید
          </p>
        </div>
      </div>
      <div className="w-[80%] md:w-[46%] max-w-screen-sm relative">
        <div className="aspect-w-4 aspect-h-4">
          <img
            alt="وبسایت آموزش برنامه نویسی |فرانت هوکس"
            src="/library.png"
            className="object-cover object-center w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
