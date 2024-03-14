import { createContext, useContext, useState } from 'react';

const FilteredContext = createContext();

export function FilteredBooksProvider({ children }) {
  const [filteredBooks, setFilteredBooks] = useState('');

  return (
    <FilteredContext.Provider value={{ filteredBooks, setFilteredBooks }}>
      {children}
    </FilteredContext.Provider>
  );
}

export function useFiltered() {
  const context = useContext(FilteredContext);

  if (context === undefined) {
    throw new Error('FilteredContext was used outSide of the QueryProvider.');
  }
  return context;
}
