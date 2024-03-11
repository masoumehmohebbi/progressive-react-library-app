import Loading from '../../ui/Loading';
import useBook from './useBook';
import { HiArrowRight, HiCheck, HiPencil, HiTrash, HiX } from 'react-icons/hi';
import toLocalDateShort from '../../utils/toLocalDateShort';
import useMoveBack from '../../hooks/useMoveBack';
import { useState } from 'react';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import useRemoveBook from './useRemoveBook';
import useEditBook from './useEditBook';

const BookDetails = () => {
  const { isLoading, book } = useBook();
  const moveBack = useMoveBack();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeBook } = useRemoveBook();
  const { isEditing, editBook } = useEditBook();

  if (isLoading)
    return (
      <div className="my-36">
        <Loading />
      </div>
    );
  return (
    <div className="px-5 text-secondary-800 mt-9 mb-28 md:shadow-md md:bg-secondary-0 py-5 rounded-md md:border border-primary-100 max-w-screen-md mx-auto">
      <button className="pb-9" onClick={moveBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <div className="flex flex-col gap-y-14 md:gap-y-0 md:flex-row items-center md:items-start gap-x-2 justify-evenly">
        <img
          className="object-cover rounded-md max-w-60 max-h-80"
          src={book.image_url ? book.image_url : '/images/book-default.png'}
          alt={book.title}
        />

        <ul className="flex flex-col gap-y-7">
          <li className="li-item">
            <h1>عنوان:</h1>
            <h2>{book.title}</h2>
          </li>
          <li className="li-item">
            <h1>نویسنده:</h1>
            <h2>{book.author}</h2>
          </li>
          <li className="li-item">
            <h1>ژانر:</h1>
            <h2>{book.category}</h2>
          </li>
          <li className="li-item">
            <h1>قبلا خونده م؟</h1>
            <div>
              {book.is_favorite === true ? (
                <HiCheck className="text-success text-lg" />
              ) : (
                <HiX className="text-error text-lg" />
              )}
            </div>
          </li>
          <li className="li-item">
            <h1>مورد علاقمه؟</h1>
            <div>
              {book.is_read === true ? (
                <HiCheck className="text-success text-lg" />
              ) : (
                <HiX className="text-error text-lg" />
              )}
            </div>
          </li>
          <li className="li-item">
            <h1>تاریخ:</h1>
            <h2>{toLocalDateShort(book.created_at)}</h2>
          </li>
          <li className="li-item">
            <h1>عملیات:</h1>

            <div className="flex text-lg sm:text-xl gap-x-5">
              <button onClick={() => setIsDeleteOpen(true)}>
                <HiTrash className="text-error" />
              </button>
              <button>
                <HiPencil className="text-primary-900" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <Modal
        title={`حذف ${book.title}`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={book.title}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={() => {
            removeBook(book.id, {
              onSuccess: () => setIsDeleteOpen(false),
            });
          }}
          disabled={false}
        />
      </Modal>
    </div>
  );
};

export default BookDetails;
