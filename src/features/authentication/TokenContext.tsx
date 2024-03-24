import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
import { ChildrenProps } from '../../types/Auth';

type TokenContextType = {
  token: null;
  // setToken: () => void;
  setToken: Dispatch<SetStateAction<null>>;
};

const TokenContext = createContext<TokenContextType>({
  token: null,
  setToken: () => {},
});

export const TokenProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>{children}</TokenContext.Provider>
  );
};

export function useToken() {
  const context = useContext(TokenContext);

  if (context === undefined) {
    throw new Error('TokenContext was used outSide of the QueryProvider.');
  }
  return context;
}
