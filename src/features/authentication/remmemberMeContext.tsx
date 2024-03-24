import { createContext, useContext, useState } from 'react';
import { ChildrenProps } from '../../types/Auth';

type RemmemberMeContextType = {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const RemmemberMeContext = createContext<RemmemberMeContextType>({
  enabled: false,
  setEnabled: () => {},
});

export const RemmemberMeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <RemmemberMeContext.Provider value={{ enabled, setEnabled }}>
      {children}
    </RemmemberMeContext.Provider>
  );
};

export function useRemmemberMe() {
  const context = useContext(RemmemberMeContext);

  if (context === undefined) {
    throw new Error('RemmemberMeContext was used outSide of the QueryProvider.');
  }
  return context;
}
