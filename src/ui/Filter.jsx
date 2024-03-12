import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getFilteredBook } from '../services/bookService';
import Loading from './Loading';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  const { data, isLoading } = useQuery({
    queryKey: ['get-filtered-book'],
    queryFn: () => getFilteredBook('?' + filterField + '=' + currentFilter),
    retry: false,
  });
  // console.log(data);

  return (
    <div className="order-3 col-span-5 sm:col-span-3 flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 p-1 border border-secondary-100 bg-secondary-300 rounded-lg">
        {options.map(({ value, label }) => {
          const isActive = value === currentFilter;
          return (
            <button
              key={value}
              disabled={isActive}
              onClick={() => handleClick(value)}
              className={`whitespace-nowrap rounded-md px-4 py-1 font-bold transition-all duration-300
             ${
               isActive
                 ? '!bg-primary-900 text-white'
                 : 'bg-secondary-200 text-secondary-800'
             } 
              `}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Filter;
