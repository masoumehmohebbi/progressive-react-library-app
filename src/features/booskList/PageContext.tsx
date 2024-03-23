import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export function PageProvider({ children }) {
  const limit = 5;
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage, limit }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error('PageContext was used outSide of the QueryProvider.');
  }
  return context;
}
