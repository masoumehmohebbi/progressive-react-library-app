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
    formState: { errors },
  } = useForm();

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      await mutateAsync(data);
      setStep(2);
    } catch (error) {
      console.log(error);
      // toast.error(error?.response?.data?.message);
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
        return <CheckOTPForm onBack={() => setStep((s) => s - 1)} />;

      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
};

export default AuthContainer;
