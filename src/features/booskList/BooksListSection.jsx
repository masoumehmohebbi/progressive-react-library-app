import { HiHeart, HiOutlineEye } from 'react-icons/hi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editBookApi } from '../../services/bookService';
import truncateText from '../../utils/truncateText';
import useFilteredBook from './useGetFilteredBook';
import Loading from '../../ui/Loading';

const BooksListSection = () => {
  const { filteredBook, isLoading } = useFilteredBook();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: editBookApi,
  });

  const favouriteHandler = async (e, id) => {
    e.stopPropagation();

    try {
      await mutateAsync({ id: Number(id) }, { is_favorite: false });
      queryClient.invalidateQueries({
        queryKey: ['get-all-books'],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-4 px-2 mb-28 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-secondary-700">
      {isLoading ? (
        <div className="col-span-5 mt-16 px-5">
          <Loading />
        </div>
      ) : filteredBook ? (
        filteredBook.length > 0 ? (
          filteredBook?.map((book) => (
            <div
              onClick={() => navigate(`/book/${book.id}`)}
              key={book.id}
              className="p-3 gap-y-2 rounded-md border cursor-pointer hover:shadow-lg shadow-md shadow-primary-300 flex flex-col items-center"
            >
              <img
                className="w-full h-[15rem] bg-cover object-cover"
                src={book.image_url ? book.image_url : '/images/book-default.png'}
                alt={book.title}
              />
              <h1 className="font-bold text-lg">{truncateText(book.title, 9)}</h1>
              <p>نویسنده: {truncateText(book.author, 9)}</p>

              <div className="flex items-center gap-1">
                قبلا خوانده ام:
                {book.is_read ? (
                  <IoMdCheckmarkCircleOutline className="text-success" />
                ) : (
                  <IoIosCloseCircleOutline className="text-error" />
                )}
              </div>
              <div className="flex justify-between items-center w-full pt-4">
                <HiOutlineEye className="w-5 h-5 drop-shadow-md text-primary-900" />
                <button onClick={(e) => favouriteHandler(e, book.id)}>
                  <HiHeart
                    className={`w-5 h-5 drop-shadow-md ${
                      book.is_favorite ? 'text-error' : 'text-secondary-400'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="font-extrabold text-base sm:text-lg w-full mt-16 sm:mb-16 text-center col-span-5 px-5">
            یافت نشد
          </p>
        )
      ) : (
        <h1 className="font-extrabold text-base sm:text-lg w-full mt-16 sm:mb-16 text-center col-span-5 px-5">
          با کلیک روی افزودن کتاب خود رو ثبت کنید
        </h1>
      )}
    </div>
  );
};

export default BooksListSection;
