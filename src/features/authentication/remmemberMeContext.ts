import { createContext, useContext, useState } from 'react';

const RemmemberMeContext = createContext();

export function RemmemberMeProvider({ children }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <RemmemberMeContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </RemmemberMeContext.Provider>
  );
}

export function useRemmemberMe() {
  const context = useContext(RemmemberMeContext);

  if (context === undefined) {
    throw new Error('RemmemberMeContext was used outSide of the QueryProvider.');
  }
  return context;
}
