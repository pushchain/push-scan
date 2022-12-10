import React, { useState, useContext, createContext, useEffect } from 'react';
import { CREDENTIALKEYS } from 'utils/constants';

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [token, setToken] = useState<string>("");
=======
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [updateTracker, setUpdateTracker] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const stagingToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoicHVzaF9zdGFnaW5nX3VzZXIiLCJpYXQiOjE2NzA1OTk3MTYsImV4cCI6MTY3MDY4NjExNn0.rm34qGbgEgIx-ugSBA-jWMapZ5NkXwYv3oCZ5i6607g';
  const timeFilterOptions = [
    { time: '1D' },
    { time: '7D' },
    { time: '1M' },
    { time: '1Y' },
    { time: 'YTD' },
    { time: 'ALL' },
  ];

  const chainList = [
    {
      image: './static/ethereum.svg',
      chain: 'Ethereum Network',
      value: 'ETH_TEST_GOERLI',
    },
    {
      image: './static/polygon.svg',
      chain: 'Polygon Network',
      value: 'POLYGON_TEST_MUMBAI',
    },
  ];
>>>>>>> 8f5360e4426db5609acdc82315749444251df7d3

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(CREDENTIALKEYS.LOGINCHECK))) {
      setToken(String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setToken('');
    }
  }, []);
  console.log({token});

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        timeFilterOptions,
        chainList,
        updateTracker,
        setUpdateTracker,
        stagingToken,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
