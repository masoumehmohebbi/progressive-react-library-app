import TextField from "../../ui/TextField";

function SendOTPForm() {
  return (
    <div className="w-full sm:max-w-md lg:max-w-xl bg-secondary-0 sm:border p-5 sm:p-8 rounded-xl shadow-md">
      <h1 className="title w-full text-center text-2xl sm:text-3xl mb-11 mt-3">
        برای ثبت کتاب های خود ثبت نام کنید
      </h1>

      <form className="flex flex-col gap-y-6">
        <TextField name="title" label="نام" type="text" />
        <TextField name="title" label="نام خانوادگی" type="text" />
        <TextField name="title" label="یوزرنیم" type="text" />
        <TextField name="title" label="ایمیل" type="text" />
        <TextField name="number" label="کلمه عبور" type="text" />

        <button type="submit" className="btn btn--primary">
          بعدی
        </button>
      </form>
    </div>
  );
}
export default SendOTPForm;
