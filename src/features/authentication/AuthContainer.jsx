import CheckOTPForm from './CheckOtpForm';
import { useMutation } from '@tanstack/react-query';
import SendOTPForm from './SendOtpForm';
import { getOtp } from '../../services/authService';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit, register } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    // console.log(data);
    try {
      const d = mutateAsync(data);
      console.log(d);
    } catch (error) {
      console.log(error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            setStep={setStep}
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
