import TextField from "../../ui/TextField";

function SendOTPForm() {
  return (
    <div className="w-full md:w-2/5 border p-8 border-primary-100 rounded-lg shadow-md">
      <form className="flex flex-col gap-y-6">
        <TextField name="title" label="نام" type="text" />
        <TextField name="title" label="نام خانوادگی" type="text" />
        <TextField name="title" label="یوزرنیم" type="text" />
        <TextField name="title" label="ایمیل" type="text" />
        <TextField name="number" label="پسورد" type="text" />

        <button type="submit" className="btn btn--primary">
          بعدی
        </button>
      </form>
    </div>
  );
}
export default SendOTPForm;
