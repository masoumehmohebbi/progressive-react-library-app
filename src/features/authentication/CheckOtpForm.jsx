import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ onBack, onReSendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

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
      <form className="space-y-10">
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        <button type="submit" className="btn btn--primary w-full">
          تایید
        </button>
      </form>
    </div>
  );
}
export default CheckOTPForm;
