import { useState, useContext, createContext, useEffect } from "react";

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginHistory = sessionStorage.getItem("userLogin");
    setIsLoggedIn(Boolean(loginHistory));
  }, []);

  return (
    <DataContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
