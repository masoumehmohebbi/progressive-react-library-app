import useFetchBooks from './useFetchBooks';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const BooksListSection = () => {
  const { data: allBooks } = useFetchBooks();

  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-secondary-700">
      {allBooks ? (
        allBooks?.map((book) => (
          <div
            key={book.id}
            className="p-3 gap-y-2 rounded-md border cursor-pointer hover:shadow-lg shadow-md shadow-primary-300 flex flex-col items-center"
          >
            <img
              className="w-full h-[15rem] bg-cover object-cover"
              src={book.image_url}
              alt={book.title}
            />
            <h1 className="font-bold text-lg">{book.title}</h1>
            <p>{book.author}</p>
            <div className="flex items-center gap-1">
              قبلا خوانده ام:
              {book.is_read ? (
                <IoMdCheckmarkCircleOutline className="text-success" />
              ) : (
                <IoIosCloseCircleOutline className="text-error" />
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 className="font-extrabold text-lg">شما هنوز هیچ کتابی ثبت نکردید</h1>
      )}
    </div>
  );
};

export default BooksListSection;
