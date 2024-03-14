import { useSearchParams, useLocation } from 'react-router-dom';

function Filter({ filterField, options }) {
  let location = useLocation();
  console.log(location.search);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    if (value !== '') {
      searchParams.set(filterField, value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(filterField);
      setSearchParams(searchParams);
    }
    if (searchParams.get('page')) searchParams.set('page', 1);
  }

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
                 ? '!bg-primary-900 text-secondary-0'
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
