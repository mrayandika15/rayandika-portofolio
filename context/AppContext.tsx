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
  pageActive?: number;
  setPageActive?: any;
  children?: React.ReactNode;
};

const AppConsumerContext = createContext<AppType | null>(null);

const AppContext: React.FC<AppType> = ({ children }) => {
  const [selectedItem, setSelectedItem] = React.useState<AppState | string>("");
  const [pageActive, setPageActive] = React.useState<number>(0);

  return (
    <AppConsumerContext.Provider
      value={{ selectedItem, setSelectedItem, pageActive, setPageActive }}
    >
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
