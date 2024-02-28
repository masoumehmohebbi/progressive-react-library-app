const Banner = () => {
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
          <p className="text-xs md:text-lg font-medium text-secondary-500 mb-6 md:mb-2">
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
    </section>
  );
};

export default Banner;
