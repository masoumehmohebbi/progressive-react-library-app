import CheckOTPForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import SendOTPForm from './SendOtpForm';
import { getOtp } from '../../services/authService';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { GetOtpProps } from '../../types/Auth';
import { AxiosError } from 'axios';

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<GetOtpProps>();

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data: GetOtpProps) => {
    try {
      await mutateAsync(data);
      setStep(2);
      toast.success('کد با موفقیت برای ' + getValues('email') + ' ارسال شد');
    } catch (error) {
      let ErrorMsg = 'Failed to get OTP';
      if (error instanceof AxiosError) {
        if (error?.response?.data?.error) {
          ErrorMsg = error.response.data.error;
        }
      }
      toast.error(ErrorMsg);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            errors={errors}
            // register={register}
            isSendingOtp={isSendingOtp}
            // onSubmit={handleSubmit(sendOtpHandler)}
            onSubmit={sendOtpHandler}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            onReSendOtp={handleSubmit(sendOtpHandler)}
            otpResponse={'کد با موفقیت برای ' + getValues('email') + ' ارسال شد'}
            username={getValues('username')}
            onBack={() => setStep((s) => s - 1)}
          />
        );

      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
};

export default AuthContainer;
