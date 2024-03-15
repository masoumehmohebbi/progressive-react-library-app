import CheckOTPForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import SendOTPForm from './SendOtpForm';
import { getOtp } from '../../services/authService';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const dt = await mutateAsync(data);
      console.log(dt);
      setStep(2);
      toast.success('کد با موفقیت برای ' + getValues('email') + ' ارسال شد');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            errors={errors}
            register={register}
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
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
