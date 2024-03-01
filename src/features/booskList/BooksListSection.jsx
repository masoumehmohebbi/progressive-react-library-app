const BooksListSection = () => {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div className="p-3 rounded-md border shadow-md shadow-blue-200 flex flex-col items-center">
        <img
          className="w-full h-full object-cover"
          src="/book.svg"
          alt="book"
        />
        <h1>کوری</h1>
        <p>ژوزه ساراماگو</p>
        <span>12,2,1374</span>
      </div>
    </div>
  );
};

export default BooksListSection;
