import TextField from '../../ui/TextField';
import RadioInputGroup from '../../ui/RadioInputGroup';
import { useForm } from 'react-hook-form';
import RHFSelect, { OptionInterface } from '../../ui/RHFSelect';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '../../ui/Loading';
import { addBook } from '../../services/bookService';
import { toast } from 'react-hot-toast';
import useCategories from './useCategories';
import { createCategory } from '../../services/categoryService';
import { useState } from 'react';
import { HiTrash } from 'react-icons/hi';
import useRemoveCategory from './useRemoveCategory';
import useEditBook from './useEditBook';
import { AxiosError } from 'axios';
import { AddBookProps, BookToEditType, FormDataType } from '../../types/BooksList';

interface Props {
  bookToEdit?: BookToEditType;
  onClose: () => void;
}

function AddBook({ bookToEdit = {}, onClose }: Props) {
  let editValues = {};
  const { id } = bookToEdit;
  const isEditSession = Boolean(id);

  if (isEditSession) {
    const { title, author, image_url, is_favorite, category: cat, is_read } = bookToEdit;
    editValues = {
      title,
      author,
      image_url,
      is_favorite,
      category: cat,
      is_read,
    };
  }

  const [bookCover, setBookCover] = useState<File | string>('');

  const { data } = useCategories();
  // const category = data?.data?.data;
  const category = data?.data?.data as { id: number; name: string }[] | undefined;

  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValues });

  const { isPending, mutateAsync: mutateAddBook } = useMutation({
    mutationFn: addBook,
  });
  const { mutateAsync: createCat, isPending: isAddingCategory } = useMutation({
    mutationFn: createCategory,
  });

  const { removeCategory, isDeleting } = useRemoveCategory();

  const { editBook } = useEditBook();

  const addBookHandler = async () => {
    try {
      const formData = new FormData();
      formData.append('title', getValues('title' as never));
      formData.append('author', getValues('author' as never));
      formData.append('image_url', bookCover);
      formData.append('category_name', getValues('category_name' as never));
      formData.append('is_read', getValues('is_read' as never));
      formData.append('is_favorite', getValues('is_favorite' as never));

      const newBook: FormDataType = {
        title: formData.get('title') as string,
        author: formData.get('author') as string,
        image_url: bookCover,
        category_name: formData.get('category_name') as string,
        is_read: formData.get('is_read') as string,
        is_favorite: formData.get('is_favorite') as string,
      };
      const bookID = Number(id);
      if (isEditSession) {
        editBook(
          { id: bookID, newBook },
          {
            onSuccess: () => {
              queryClient.removeQueries();
              queryClient.invalidateQueries({
                queryKey: ['get-filtered-book'],
              });
              queryClient.invalidateQueries({
                queryKey: ['get-one-book'],
              });

              reset();
              onClose();
            },
          },
        );
      } else {
        const AddnewBook: AddBookProps = {
          title: formData.get('title') as string,
          author: formData.get('author') as string,
          image_url: bookCover,
          category_name: formData.get('category_name') as string,
          is_read: formData.get('is_read') as string,
          is_favorite: formData.get('is_favorite') as string,
        };
        await mutateAddBook(AddnewBook);
        // await mutateAddBook(formData);

        queryClient.invalidateQueries({
          queryKey: ['get-filtered-book'],
        });

        toast.success('کتاب شما با موفقیت ثبت شد');
        onClose();
        reset();
      }
    } catch (error) {
      // const err = error?.response?.data?.error?.error;
      let err = 'Failed to add book';
      if (error instanceof AxiosError) {
        if (error?.response?.data?.error?.error) {
          err = error.response.data.error.error;
        }
      }
      Object.keys(err).map((key: any) => {
        toast.error(err[key]);
      });
    }
  };

  const addCategoryHandler = async () => {
    try {
      await createCat({ name: getValues('category_choose' as never) });
      toast.success(' دسته بندی جدید با موفقیت اضافه شد');

      queryClient.invalidateQueries({
        queryKey: ['get-all-category'],
      });
    } catch (err) {
      let ErrorMsg = 'Failed to remove Book';
      if (err instanceof AxiosError) {
        if (err?.response?.data?.error?.name) {
          ErrorMsg = err.response.data.error.name;
        }
      }
      toast.error(ErrorMsg);
    }
  };

  const removeCategoryHandler = async () => {
    const filteredCat = category?.filter(
      (item) => item.name === getValues('category_name' as never),
    );

    if (filteredCat && filteredCat.length > 0) {
      await removeCategory(filteredCat[0]?.id);
    }
  };

  const transformedCategories: OptionInterface[] =
    category?.map((cat) => ({
      id: cat.id.toString(),
      name: cat.name,
    })) ?? [];

  return (
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
          options={transformedCategories}
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
        // onChange={(e) => {
        //   setBookCover(e.target.files[0]);
        // }}
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            setBookCover(files[0]);
          }
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
  );
}

export default AddBook;
