import { useState, useContext, createContext, useEffect } from "react";

const DataContext = createContext<any>({});
const KEY = "userLogin";

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(sessionStorage.getItem(KEY)));


  const logUserIntoSession = () => {
    sessionStorage.setItem(KEY, ""+true);
    setIsLoggedIn(true)
  }

  return (
    <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn: logUserIntoSession }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
