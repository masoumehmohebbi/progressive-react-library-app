import { Link } from 'react-router-dom';
import TextField from '../../ui/TextField';
import GoogleField from '../../ui/GoogleField';
import Loading from '../../ui/Loading';

function SendOTPForm({ onSubmit, register, errors, isSendingOtp }) {
  return (
    <div className="w-full sm:max-w-md lg:max-w-xl bg-secondary-0 sm:border p-5 sm:p-8 rounded-xl shadow-md">
      <h1 className="title w-full text-center text-2xl sm:text-3xl mb-11 mt-3">
        برای ثبت کتاب های خود ثبت نام کنید
      </h1>

      <GoogleField label="ثبت نام با گوگل" />

      <form onSubmit={onSubmit} className="flex flex-col gap-y-6">
        <TextField
          validationSchema={{
            required: 'نام ضروری است',
          }}
          required
          errors={errors}
          register={register}
          name="first_name"
          label="نام"
          type="text"
        />
        <TextField
          required
          errors={errors}
          register={register}
          name="last_name"
          label="نام خانوادگی"
          type="text"
        />
        <TextField
          required
          errors={errors}
          register={register}
          name="username"
          label="نام کاربری"
          type="text"
        />
        <TextField
          required
          errors={errors}
          register={register}
          name="email"
          label="ایمیل"
          type="text"
          validationSchema={{
            required: 'ایمیل ضروری است',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'ایمیل نامعتبر است',
            },
          }}
        />
        <TextField
          required
          errors={errors}
          register={register}
          name="password"
          label="کلمه عبور"
          type="text"
        />
        {isSendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary">
            بعدی
          </button>
        )}
      </form>
      <div className="w-full h-[1px] bg-secondary-200 rounded my-9 "></div>
      <div className="w-full flex gap-x-1 items-center justify-center">
        <span className="text-secondary-600">حساب کاربری دارید؟</span>
        <button className="text-primary-900 underline underline-offset-[6px]">
          <Link to="/login">وارد شوید</Link>
        </button>
      </div>
    </div>
  );
}
export default SendOTPForm;
