import React, { createContext, useContext } from "react";

type AppState = {
  name: string;
  image: string;
  desc: string;
  id: number;
};

type AppType = {
  selectedItem?: AppState | string;
  setSelectedItem?: any;
  children?: React.ReactNode;
};

const AppConsumerContext = createContext<AppType | null>(null);

const AppContext: React.FC<AppType> = ({ children }) => {
  const [selectedItem, setSelectedItem] = React.useState<AppState | string>("");

  return (
    <AppConsumerContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </AppConsumerContext.Provider>
  );
};

export const useAppContext = () => {
  const ctx = useContext(AppConsumerContext);

  if (!ctx) {
    throw new Error(
      "useAppContext has to be used within <AppContext> component"
    );
  }

  return ctx;
};

export default AppContext;
