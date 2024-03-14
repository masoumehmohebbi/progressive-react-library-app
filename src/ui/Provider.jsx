import { TokenProvider } from '../features/authentication/TokenContext';
import { FilteredBooksProvider } from '../features/booskList/FilteredBookContext';

const Provider = ({ children }) => {
  return (
    <TokenProvider>
      <FilteredBooksProvider> {children}</FilteredBooksProvider>
    </TokenProvider>
  );
};

export default Provider;
