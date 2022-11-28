import { useState, useContext, createContext, useEffect } from 'react';
import { CREDENTIALKEYS } from 'utils/constants';

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [token, setToken] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlciIsImlhdCI6MTY2ODU3OTAzMCwiZXhwIjoxNjY5NDQzMDMwfQ.Ji8PPVoHwA5JOPtR46I-cF5Z8-pniEYd6pewpj1e5KQ'
  );

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(CREDENTIALKEYS.LOGINCHECK))) {
      setIsLoggedIn(true);
      // setToken(String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)));
    } else {
      setIsLoggedIn(false);
      setToken('');
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
