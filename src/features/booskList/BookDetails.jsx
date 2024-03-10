import Loading from '../../ui/Loading';
import useBook from './useBook';

const BookDetails = () => {
  const { isLoading, book } = useBook();

  if (isLoading)
    return (
      <div className="my-36">
        <Loading />
      </div>
    );
  return (
    <div className="flex justify-between py-11">
      <div className="flex">
        <div className="w-20">
          <img src={book.image_url} alt={book.title} />
        </div>
        <div>
          <h1>{book.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
