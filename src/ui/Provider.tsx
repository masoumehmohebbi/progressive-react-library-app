import { TokenProvider } from '../features/authentication/TokenContext';
import { PageProvider } from '../features/booskList/PageContext';

const Provider = ({ children }) => {
  return (
    <TokenProvider>
      <PageProvider>{children}</PageProvider>
    </TokenProvider>
  );
};

export default Provider;
