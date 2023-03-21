// React, NextJS imports
import React, { useState, useContext, createContext, useEffect } from 'react';

// Internal Components imports
import { CREDENTIALKEYS, DATA_KEYS, CHAIN_LIST } from '../utils/constants';

const DataContext = createContext<any>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [token, setToken] = useState<string>('');
  const [pushIntegrations, setPushIntegrations] = useState<number>(0);
  const [subscriberData, setSubscriberData] = useState<any[]>([]);
  const [notificationData, setNotificationData] = useState<any[]>([]);
  const [subscriberCategories, setSubscriberCategories] = useState<any[]>([]);
  const [subscriberValues, setSubscriberValues] = useState<any[]>([]);
  const [notificationCategories, setNotificationCategories] = useState<any[]>(
    []
  );
  const [notificationValues, setNotificationValues] = useState<any[]>([]);
  const [channelList, setChannelList] = useState<any[]>([]);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [chatUsers, setChatUsers] = React.useState<number>(0);
  const [chatSent, setChatSent] = React.useState<number>(0);
  const [notifiactionsSent, setNotificationsSent] = React.useState<number>(0);
  const [selectedChannel, setSelectedChannel] = React.useState({
    name: 'All Channels',
    channel: 'All',
  });
  const [selectedChain, setSelectedChain] = React.useState(CHAIN_LIST[0]);
  const [updateTracker, setUpdateTracker] = useState<boolean>(false);
  const [isStatisticDataLoading, setStatisticDataLoading] =
    useState<boolean>(false);
  const [isChannelDataLoading, setChannelDataLoading] =
    useState<boolean>(false);
  const timeFilterOptions = [
    { time: '1D' },
    { time: '7D' },
    { time: '1M' },
    { time: '1Y' },
    { time: 'YTD' },
    { time: 'ALL' },
  ];

  useEffect(() => {
    if (Boolean(sessionStorage.getItem(CREDENTIALKEYS.LOGINCHECK))) {
      setToken(String(sessionStorage.getItem(CREDENTIALKEYS.TOKEN)));
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setToken('');
    }
    setStatisticDataLoading(true);
    setChannelDataLoading(true);
    setSubscriberData(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.SUBSCRIBER_DATA)) || []
    );
    setTotalNotifications(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.TOTAL_NOTIFICATIONS)) || 0
    );
    setTotalSubscribers(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.TOTAL_SUBSCRIBERS)) || 0
    );
    setNotificationData(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATION_DATA)) || []
    );
    setSubscriberCategories(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.SUBSCRIBER_CATEGORIES)) || []
    );
    setNotificationCategories(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATION_CATEGORIES)) ||
        []
    );
    setSubscriberValues(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.SUBSCRIBER_VALUES)) || []
    );
    setNotificationValues(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATION_VALUES)) || []
    );
    setChannelList(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.CHANNEL_LIST)) || []
    );
    setChatSent(JSON.parse(sessionStorage.getItem(DATA_KEYS.CHAT_SENT)) || 0);
    setChatUsers(JSON.parse(sessionStorage.getItem(DATA_KEYS.CHAT_USERS)) || 0);
    setNotificationsSent(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATIONS_SENT)) || 0
    );
    if (
      JSON.parse(sessionStorage.getItem(DATA_KEYS.SUBSCRIBER_DATA)) !== null &&
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATION_DATA)) !== null
    ) {
      setStatisticDataLoading(false);
    }
    if (
      JSON.parse(sessionStorage.getItem(DATA_KEYS.SUBSCRIBER_CATEGORIES)) !==
        null &&
      JSON.parse(sessionStorage.getItem(DATA_KEYS.NOTIFICATION_CATEGORIES)) !==
        null
    ) {
      setChannelDataLoading(false);
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        timeFilterOptions,
        //chainList,
        updateTracker,
        setUpdateTracker,
        pushIntegrations,
        setPushIntegrations,
        subscriberData,
        setSubscriberData,
        notificationData,
        setNotificationData,
        subscriberCategories,
        setSubscriberCategories,
        notificationCategories,
        setNotificationCategories,
        subscriberValues,
        setSubscriberValues,
        notificationValues,
        setNotificationValues,
        channelList,
        setChannelList,
        totalSubscribers,
        setTotalSubscribers,
        totalNotifications,
        setTotalNotifications,
        isStatisticDataLoading,
        setStatisticDataLoading,
        isChannelDataLoading,
        setChannelDataLoading,
        chatSent,
        chatUsers,
        notifiactionsSent,
        setChatSent,
        setChatUsers,
        setNotificationsSent,
        selectedChannel,
        setSelectedChannel,
        selectedChain,
        setSelectedChain,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
