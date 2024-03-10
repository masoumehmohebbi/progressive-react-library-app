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
      toast.success('کتاب شما با موفقیت ثبت شد');
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
        queryKey: ['get-all-category', 'get-all-books'],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const removeCategoryHandler = async () => {
    const filteredCat = category?.filter(
      (item) => item.name === getValues('category_name'),
    );
    console.log(filteredCat[0]?.id);

    try {
      const d = await removeCategory(filteredCat[0]?.id);
      console.log(d);
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

        <div className="grid grid-cols-8 items-end justify-center gap-x-2">
          <TextField
            errors={errors}
            name="category_choose"
            label="دسته بندی"
            type="text"
            register={register}
          />
          <div className="flex col-span-2 items-center gap-x-2 justify-center mb-2">
            {isAddingCategory ? (
              <Loading width="42" />
            ) : (
              <button onClick={addCategoryHandler} className="btn btn--primary">
                +
              </button>
            )}

            {isDeleting ? (
              <Loading width="42" />
            ) : (
              <button
                onClick={removeCategoryHandler}
                className="btn btn--danger py-[9px] px-[10px] shadow-lg"
              >
                <HiTrash className="w-5 h-5" />
              </button>
            )}
          </div>
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
          />
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
