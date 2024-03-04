import CheckOTPForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import SendOTPForm from './SendOtpForm';
import { getOtp } from '../../services/authService';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, register } = useForm();

  const { isPending: isSendingOtp, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    // console.log(data);
    try {
      const d = await mutateAsync(data);

      console.log(d);
      setStep(2);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
          />
        );
      case 2:
        return <CheckOTPForm />;

      default:
        return null;
    }
  };
  return <>{renderStep()}</>;
};

export default AuthContainer;
