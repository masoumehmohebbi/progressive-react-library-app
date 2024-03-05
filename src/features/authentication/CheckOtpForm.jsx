import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { HiArrowRight } from 'react-icons/hi';
import { CiEdit } from 'react-icons/ci';
import { useMutation } from '@tanstack/react-query';
import { checkOtp } from '../../services/authService';
import Loading from '../../ui/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RESEND_TIME = 90;

function CheckOTPForm({ onBack, onReSendOtp, otpResponse, username }) {
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      await mutateAsync({ username: username, otp_code: otp });
      toast.success('ثبت نام شما با موفقیت انجام شد. وارد شوید', { icon: '👏' });
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span> {otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={(e) => checkOtpHandler(e)}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="text" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-400))',
            borderRadius: '0.5rem',
          }}
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}
export default CheckOTPForm;
