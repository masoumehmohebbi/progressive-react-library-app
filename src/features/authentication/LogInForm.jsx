import { Link } from "react-router-dom";
import TextField from "../../ui/TextField";
import SwitchRemmemerMe from "../../ui/SwitchRemmemberMe";

export const LogInForm = () => {
  return (
    <div className="w-full mx-auto sm:my-5 sm:max-w-md lg:max-w-xl bg-secondary-0 sm:border p-5 sm:p-8 rounded-xl shadow-md">
      <h1 className="title w-full text-center text-2xl sm:text-3xl mb-11 mt-3">
        به رابوک خوش آمدید. وارد شوید
      </h1>
      <form className="flex flex-col gap-y-6">
        <TextField
          name="title"
          label="نام کاربری یا ایمیل خود را وارد کنید"
          type="text"
        />
        <TextField name="number" label="کلمه عبور" type="text" />

        <div className="flex gap-x-2 items-start my-2">
          <span>مرا به خاطر بسپار</span>
          <SwitchRemmemerMe />
        </div>

        <button type="submit" className="btn btn--primary">
          ورود
        </button>
      </form>
      <div className="w-full h-[1px] bg-secondary-200 rounded my-9 "></div>

      <div className="w-full flex gap-x-1 items-center justify-center">
        <span className="text-secondary-600">حساب کاربری ندارید؟</span>
        <button className="text-primary-900 underline underline-offset-[6px]">
          <Link to="/auth">برای رابوک ثبت نام کنید</Link>
        </button>
      </div>
    </div>
  );
};
