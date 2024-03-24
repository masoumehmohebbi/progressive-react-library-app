import { Link } from 'react-router-dom';
import TextField from '../../ui/TextField';
import GoogleField from '../../ui/GoogleField';
import Loading from '../../ui/Loading';
import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from '../../hooks/useMoveBack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetOtpProps } from '../../types/Auth';

type SendOTPFormProps = {
  onSubmit: SubmitHandler<GetOtpProps>;
  errors: any;
  isSendingOtp: boolean;
};
function SendOTPForm({ onSubmit, errors, isSendingOtp }: SendOTPFormProps) {
  const { register, handleSubmit } = useForm<GetOtpProps>();
  const moveBack = useMoveBack();

  return (
    <div className="w-full sm:max-w-md lg:max-w-xl bg-secondary-0 sm:border p-5 sm:p-8 rounded-xl shadow-md">
      <button className="pb-9" onClick={moveBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <h1 className="title flex justify-center w-full text-center text-2xl sm:text-3xl mb-11 mt-3">
        برای ثبت کتاب های خود ثبت نام کنید
      </h1>

      <GoogleField label="ثبت نام با گوگل" />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
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
          validationSchema={{
            required: 'نام خانوادگی ضروری است',
          }}
        />
        <TextField
          required
          errors={errors}
          register={register}
          name="username"
          label="نام کاربری"
          type="text"
          validationSchema={{
            required: 'نام کاربری ضروری است',
          }}
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
          validationSchema={{
            required: 'رمز ضروری است',
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              message: 'رمز باید حداقل 8 رقم و شامل حروف کوچک و بزرگ و عدد و نماد باشد',
            },
          }}
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
