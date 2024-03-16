import { useQuery, useQueryClient } from '@tanstack/react-query';
import Stat from './Stat';
import { BiCollection } from 'react-icons/bi';
import { getBooks } from '../services/bookService';

function Stats() {
  // const { filteredBook: totalBooks } = useFilteredBook();
  const queryClient = useQueryClient();
  const { data: totalBooks } = useQuery({
    queryKey: ['get-filtered-book'],
    queryFn: () => getBooks(),
    retry: false,

    onSuccess: () => {
      queryClient.removeQueries(['get-filtered-book']);
    },
  });

  const readBooks =
    totalBooks?.length > 0 && totalBooks?.filter((book) => book.is_read === true);
  const unReadBooks =
    totalBooks?.length > 0 && totalBooks?.filter((book) => book.is_read === false);

  const data = [
    {
      id: 1,
      icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-secondary-0" />,
      title: totalBooks?.length,
      subTitle: 'کل کتاب‌ها',
      bgColor: 'green',
    },
    {
      id: 2,
      icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-secondary-0" />,
      title: readBooks?.length,
      subTitle: 'خوانده شده‌ها',
      bgColor: 'yellow',
    },
    {
      id: 3,
      icon: <BiCollection className="w-7 sm:w-11 h-7 sm:h-11 text-secondary-0" />,
      title: unReadBooks?.length,
      subTitle: 'خوانده نشده‌ها',
      bgColor: 'blue',
    },
  ];
  return (
    <div className="my-16 px-5 lg:px-0 sm:my-28 flex w-full flex-wrap md:grid grid-cols-12 justify-between gap-4 md:gap-8">
      {data &&
        data.map((item) => (
          <Stat
            key={item.id}
            color={item.bgColor}
            title={item.title}
            value={item.subTitle}
            icon={item.icon}
          />
        ))}
    </div>
  );
}

export default Stats;
