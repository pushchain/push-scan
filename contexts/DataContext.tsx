import { useState, useContext, createContext, useEffect } from "react";
import { STORAGEKEY } from "utils/constants";

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(STORAGEKEY))) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{ isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
