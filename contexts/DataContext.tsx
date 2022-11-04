import { useState, useContext, createContext, useEffect } from "react";
import { CREDENTIALKEYS } from "utils/constants";

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(CREDENTIALKEYS.LOGINCHECK))) {
      setIsLoggedIn(true);
      setToken(String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)));
    } else {
      setIsLoggedIn(false);
      setToken("");
    }
  }, []);

  return (
    <DataContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, token, setToken }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
