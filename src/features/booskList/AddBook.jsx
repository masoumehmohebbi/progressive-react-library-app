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
import { HiTrash } from 'react-icons/hi';
import useRemoveCategory from './useRemoveCategory';

const AddBook = ({ isOpen, setIsOpen }) => {
  const [bookCover, setBookCover] = useState('');

  const { data } = useCategories();
  const category = data?.data?.data;
  const queryClient = useQueryClient();

  const {
    register,
    watch,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { isPending, mutateAsync: mutateAddBook } = useMutation({
    mutationFn: addBook,
  });

  const { mutateAsync: createCat, isPending: isAddingCategory } = useMutation({
    mutationFn: createCategory,
  });

  const { removeCategory, isDeleting } = useRemoveCategory();

  const addBookHandler = async () => {
    try {
      const formData = new FormData();
      formData.append('title', getValues('title'));
      formData.append('author', getValues('author'));
      formData.append('image_url', bookCover);
      formData.append('category_name', getValues('category_name'));
      formData.append('is_read', getValues('is_read'));
      formData.append('is_favorite', getValues('is_favorite'));

      await mutateAddBook(formData);

      queryClient.invalidateQueries({
        queryKey: ['get-all-books'],
      });
      toast.success('کتاب شما با موفقیت ثبت شد');
      setIsOpen(false);
    } catch (error) {
      const err = error?.response?.data?.error?.error;
      Object.keys(err).map((key) => {
        toast.error(err[key]), console.log(err[key]);
      });
    }
  };

  const addCategoryHandler = async () => {
    try {
      await createCat({ name: getValues('category_choose') });
      toast.success(' دسته بندی جدید با موفقیت اضافه شد');

      queryClient.invalidateQueries({
        queryKey: ['get-all-category'],
      });
    } catch (error) {
      toast.error(error?.response?.data?.error?.name);
      console.log(error);
    }
  };
  const removeCategoryHandler = async () => {
    const filteredCat = category?.filter(
      (item) => item.name === getValues('category_name'),
    );
    console.log(filteredCat[0]?.id);
    const d = await removeCategory(filteredCat[0]?.id);
    console.log(d);
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

        <div className="grid grid-cols-6 items-end justify-center gap-x-11">
          <TextField
            errors={errors}
            name="category_choose"
            label="اضافه کردن دسته"
            type="text"
            register={register}
            addField="true"
          >
            {isAddingCategory ? (
              <div className="flex px-1 py-1 items-center rounded-r-none justify-center bg-primary-800 rounded-xl shadow-md">
                <Loading width="33" color="rgb(var(--color-secondary-0))" />
              </div>
            ) : (
              <button
                onClick={addCategoryHandler}
                className="btn btn--primary rounded-r-none py-3"
              >
                +
              </button>
            )}
          </TextField>

          <RHFSelect
            label="انتخاب دسته بندی"
            required
            validationSchema={{
              required: ' انتخاب دسته بندی ضروری است',
            }}
            name="category_name"
            register={register}
            options={category}
            errors={errors}
          >
            {isDeleting ? (
              <div className="border flex px-1 items-center justify-center border-primary-600 rounded-xl rounded-r-none border-r-0 shadow-md bg-secondary-100">
                <Loading width="32" />
              </div>
            ) : (
              <button
                onClick={removeCategoryHandler}
                className="btn btn--danger border-r-0 border-primary-600 shadow-sm bg-secondary-100 py-[9px] px-[10px] rounded-r-none"
              >
                <HiTrash className="w-5 h-5" />
              </button>
            )}
          </RHFSelect>
        </div>
        <TextField
          name="image_url"
          label="عکس"
          type="file"
          register={register}
          accept=".png, .jpg, .jpeg"
          onChange={(e) => {
            setBookCover(e.target.files[0]);
          }}
        />

        <RadioInputGroup
          title="این کتاب رو:"
          errors={errors}
          watch={watch}
          register={register}
          configs={{
            name: 'is_read',
            validationSchema: {
              required: 'انتخاب وضعیت کتاب ضروری است',
            },
            options: [
              { value: 'true', label: ' خوندم' },
              { value: 'false', label: ' نخوندم' },
            ],
          }}
        />

        <RadioInputGroup
          title="به این کتاب علاقه مند:"
          errors={errors}
          watch={watch}
          register={register}
          configs={{
            name: 'is_favorite',
            validationSchema: {
              required: 'انتخاب علاقه مندی ضروری است',
            },
            options: [
              { value: 'true', label: 'هستم' },
              { value: 'false', label: 'نیستم' },
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
