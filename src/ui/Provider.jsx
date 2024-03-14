import { TokenProvider } from '../features/authentication/TokenContext';
import { FilteredBooksProvider } from '../features/booskList/FilteredBookContext';

const Provider = ({ children }) => {
  return (
    <FilteredBooksProvider>
      <TokenProvider>{children}</TokenProvider>
    </FilteredBooksProvider>
  );
};

export default Provider;
