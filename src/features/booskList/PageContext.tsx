import { createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../../types/Auth';

type PageContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
};

const PageContext = createContext<PageContextType>({} as PageContextType);

export const PageProvider: React.FC<ChildrenProps> = ({ children }) => {
  const limit = 5;
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage, limit }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePage() {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error('PageContext was used outSide of the QueryProvider.');
  }
  return context;
}
