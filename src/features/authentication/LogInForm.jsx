import { Link } from 'react-router-dom';
import TextField from '../../ui/TextField';
import SwitchRemmemerMe from '../../ui/SwitchRemmemberMe';
import GoogleField from '../../ui/GoogleField';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { getTokens } from '../../services/authService';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const LogInForm = () => {
  const { errors, register, getValues, handleSubmit } = useForm();

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getTokens,
  });

  const logInHandler = async (data) => {
    try {
      await mutateAsync({
        username_or_email:
          data.username === getValues('username')
            ? getValues('username')
            : getValues('email'),
        password: getValues('password'),
      });

      toast.success('اطلاعات شما تایید شد‍‍‍، به  رابوک خوش آمدید', {
        icon: '👏',
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full mx-auto sm:my-5 sm:max-w-md lg:max-w-xl bg-secondary-0 sm:border p-5 sm:p-8 rounded-xl shadow-md">
      <h1 className="title w-full text-center text-2xl sm:text-3xl mb-11 mt-3">
        به رابوک خوش آمدید. وارد شوید
      </h1>
      <GoogleField label="ورود با گوگل" />
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(logInHandler)}>
        <TextField
          required
          errors={errors}
          register={register}
          name="username"
          label="نام کاربری یا ایمیل خود را وارد کنید"
          type="text"
          validationSchema={{
            required: 'نام کاربری ضروری است',
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

        <div className="flex gap-x-2 items-start my-2">
          <span>مرا به خاطر بسپار</span>
          <SwitchRemmemerMe />
        </div>

        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary">
            ورود
          </button>
        )}
      </form>
      <div className="w-full h-[1px] bg-secondary-200 rounded my-9 "></div>

      <div className="w-full flex gap-x-1 items-center justify-center">
        <span className="text-secondary-600">حساب کاربری ندارید؟</span>
        <button className="text-primary-900 underline underline-offset-[6px]">
          <Link to="/auth">در رابوک ثبت نام کنید</Link>
        </button>
      </div>
    </div>
  );
};
