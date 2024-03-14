import { TokenProvider } from '../features/authentication/TokenContext';

const Provider = ({ children }) => {
  return <TokenProvider>{children}</TokenProvider>;
};

export default Provider;
