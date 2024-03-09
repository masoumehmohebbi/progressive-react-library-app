import Modal from '../../ui/Modal';
import TextField from '../../ui/TextField';
import RadioInputGroup from '../../ui/RadioInputGroup';
import { useForm } from 'react-hook-form';
import RHFSelect from '../../ui/RHFSelect';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '../../ui/Loading';
import { addBook } from '../../services/bookService';
import { toast } from 'react-hot-toast';
import useCategories from './useCategories';
import { createCategory } from '../../services/categoryService';
import { useState } from 'react';

// const category = [
//   { value: 'رمان', label: 'رمان' },
//   { value: 'شعر', label: 'شعر' },
//   { value: 'روانشناسی', label: 'روانشناسی' },
//   { value: 'انگیزشی', label: 'انگیزشی' },
//   { value: 'دیگر', label: 'دیگر' },
// ];

const AddBook = ({ isOpen, setIsOpen }) => {
  const { data } = useCategories();
  const category = data?.data?.data;
  const queryClient = useQueryClient();

  const [img, setImg] = useState('');

  const {
    register,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { isPending } = useMutation({
    mutationFn: addBook,
  });

  const { mutateAsync: createCat } = useMutation({
    mutationFn: createCategory,
  });

  const addBookHandler = async () => {
    console.log({
      title: getValues('title'),
      author: getValues('author'),
      image_url: img,
      category_name: getValues('category_name'),
      is_read: getValues('is_read'),
      is_favorite: getValues('is_favorite'),
    });
    try {
      const formData = new FormData();
      formData.append('title', getValues('title'));
      formData.append('author', getValues('author'));
      formData.append('image_url', img);
      formData.append('category_name', getValues('category_name'));
      formData.append('is_read', getValues('is_read'));
      formData.append('is_favorite', getValues('is_favorite'));

      const d = await addBook(formData);
      console.log(d);
      toast.success('کتاب شما با موفقیت ثبت شد');

      // const cat = await createCat({ name: getValues('category_name') });
      // console.log(cat);
    } catch (error) {
      console.log(error);
      Object.keys(error?.response?.data?.error?.error).map((key) => {
        toast.error(error?.response?.data?.error?.error[key]),
          console.log(error?.response?.data?.error?.error[key]);
      });
    }
  };

  const addCategoryHandler = async () => {
    try {
      const cat = await createCat({ name: getValues('category_name1') });
      console.log(cat);
      toast.success(' دسته بندی جدید با موفقیت اضافه شد');

      queryClient.invalidateQueries({
        queryKey: ['get-all-category'],
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal title="کتاب خود را ثبت کنید" open={isOpen} onClose={() => setIsOpen(false)}>
      <form
        className="space-y-4"
        onSubmit={handleSubmit(addBookHandler)}
        encType="multipart/form-data"
      >
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
        {/* <RHFSelect
          label="دسته بندی"
          required
          name="category_name"
          register={register}
          options={category}
        /> */}
        <div className="grid grid-cols-7 items-end justify-center gap-x-2">
          <TextField
            // required
            // validationSchema={{
            //   required: ' نوشتن دسته بندی ضروری است',
            // }}
            errors={errors}
            name="category_name1"
            label="دسته بندی"
            type="text"
            register={register}
          />
          <div className="flex col-span-1 items-center gap-x-2 justify-center mb-2">
            <button onClick={addCategoryHandler} className="btn btn--primary">
              +
            </button>
          </div>
          <RHFSelect
            label=" انتخاب دسته بندی "
            required
            validationSchema={{
              required: ' انتخاب دسته بندی ضروری است',
            }}
            name="category_name"
            register={register}
            options={category}
            errors={errors}
          />
        </div>
        <TextField
          name="image_url"
          label="عکس"
          type="file"
          register={register}
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            setImg(e.target.files[0]);
            console.log(img);
          }}
        />
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
        <RadioInputGroup
          errors={errors}
          watch={watch}
          register={register}
          configs={{
            name: 'is_favorite',
            validationSchema: {
              required: 'انتخاب علاقه مندی ضروری است',
            },
            options: [
              { value: 'true', label: 'اضافه به علاقه مندی ها' },
              { value: 'false', label: 'مورد علاقه م نیست' },
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
