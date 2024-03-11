import Loading from '../../ui/Loading';
import useBook from './useBook';
import { HiArrowRight, HiCheck, HiPencil, HiTrash, HiX } from 'react-icons/hi';
import toLocalDateShort from '../../utils/toLocalDateShort';
import useMoveBack from '../../hooks/useMoveBack';

const BookDetails = () => {
  const { isLoading, book } = useBook();
  const moveBack = useMoveBack();

  if (isLoading)
    return (
      <div className="my-36">
        <Loading />
      </div>
    );
  return (
    <div className="px-5 text-secondary-800">
      <button className="py-9" onClick={moveBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <div className="flex items-start gap-x-2">
        <img
          className="w-20 sm:w-56 shadow-md rounded-md border border-primary-200"
          src={book.image_url ? book.image_url : '/images/book-default.png'}
          alt=""
        />
        <div className="col-span-5 h-fit w-full bg-secondary-0 overflow-x-auto">
          <table>
            <thead className="font-bold text-lg">
              <tr className="title-row">
                <td>عنوان</td>
                <td>نویسنده</td>
                <td>ژانر</td>
                <td>قبلا خونده م؟</td>
                <td>مورد علاقمه؟</td>
                <td>تاریخ اضافه کردن</td>
                <td>عملیات</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  {book.is_favorite === true ? (
                    <HiCheck className="text-success text-lg" />
                  ) : (
                    <HiX className="text-error text-lg" />
                  )}
                </td>
                <td>
                  {book.is_read === true ? (
                    <HiCheck className="text-success text-lg" />
                  ) : (
                    <HiX className="text-error text-lg" />
                  )}
                </td>
                <td>{toLocalDateShort(book.created_at)}</td>
                <td>
                  <div className="flex text-lg gap-x-3">
                    <button>
                      <HiTrash className="text-error" />
                    </button>
                    <button>
                      <HiPencil className="text-primary-900" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
