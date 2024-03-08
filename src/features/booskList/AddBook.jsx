import Modal from '../../ui/Modal';
import TextField from '../../ui/TextField';
import RadioInputGroup from '../../ui/RadioInputGroup';
import { useForm } from 'react-hook-form';
import RHFSelect from '../../ui/RHFSelect';
import { useMutation } from '@tanstack/react-query';
import Loading from '../../ui/Loading';
import { addBook } from '../../services/bookService';
import { toast } from 'react-hot-toast';

const category = [
  { value: 'رمان', label: 'رمان' },
  { value: 'شعر', label: 'شعر' },
  { value: 'روانشناسی', label: 'روانشناسی' },
  { value: 'انگیزشی', label: 'انگیزشی' },
  { value: 'دیگر', label: 'دیگر' },
];

const AddBook = ({ isOpen, setIsOpen }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending } = useMutation({
    mutationFn: addBook,
  });

  const addBookHandler = async (data) => {
    console.log(data);

    try {
      await addBook(data);
      toast.success('کتاب شما با موفقیت ثبت شد');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal title="کتاب خود را ثبت کنید" open={isOpen} onClose={() => setIsOpen(false)}>
      <form className="space-y-4" onSubmit={handleSubmit(addBookHandler)}>
        <TextField
          required
          validationSchema={{
            required: 'عنوان کتاب ضروری است',
          }}
          name="title"
          label="عنوان"
          type="text"
          register={register}
          errors={errors}
        />
        <TextField
          required
          validationSchema={{
            required: 'نام نویسنده ضروری است',
          }}
          errors={errors}
          name="author"
          label="نویسنده"
          type="text"
          register={register}
        />
        <RHFSelect
          label="دسته بندی"
          required
          name="category_name"
          register={register}
          options={category}
        />
        <TextField
          name="image_url"
          label="عکس"
          type="file"
          register={register}
          accept=".png, .jpg, .jpeg"
        />

        {/* <div className="flex gap-x-2 m-4 items-center justify-center">
          <RadioInput label="این کتاب رو خوندم" value="آره" name="READ" id="READ" />
          <RadioInput label="هنوز نخوندمش" value="نه" name="READ" id="READ" />
        </div> */}
        <RadioInputGroup
          errors={errors}
          watch={watch}
          register={register}
          configs={{
            name: 'is_read',
            validationSchema: {
              required: 'انتخاب وضعیت کتاب ضروری است',
            },
            options: [
              { value: 'true', label: 'این کتاب رو خوندم' },
              { value: 'false', label: 'هنوز نخوندمش' },
            ],
          }}
        />

        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ثبت
          </button>
        )}
      </form>
    </Modal>
  );
};

export default AddBook;
