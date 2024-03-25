import { TokenProvider } from '../features/authentication/TokenContext';
import { PageProvider } from '../features/booskList/PageContext';
import { ChildrenProps } from '../types/Auth';

const Provider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <TokenProvider>
      <PageProvider>{children}</PageProvider>
    </TokenProvider>
  );
};

export default Provider;
