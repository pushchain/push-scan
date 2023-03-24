// React, NextJS imports
import React, { useState, useContext, createContext, useEffect } from 'react';

// Internal Components imports
import {
  CREDENTIALKEYS,
  DATA_KEYS,
  CHAIN_LIST,
  TIME_FILTERS,
} from '../utils/constants';
import {
  SubscriberType,
  NotificationType,
  ChannelType,
  ChainType,
  DataContextType,
} from '../types/context';
import { GovernanceType } from '../types/governance';

const DataContext = createContext<DataContextType>({});

const DataProvider = ({ children }: { children: any }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [token, setToken] = useState<string>('');
  const [pushIntegrations, setPushIntegrations] = useState<number>(0);
  const [subscriberData, setSubscriberData] = useState<SubscriberType[]>([]);
  const [notificationData, setNotificationData] = useState<NotificationType[]>(
    []
  );
  const [subscriberCategories, setSubscriberCategories] = useState<
    Array<string>
  >([]);
  const [subscriberValues, setSubscriberValues] = useState<Array<number>>([]);
  const [notificationCategories, setNotificationCategories] = useState<
    Array<string>
  >([]);
  const [notificationValues, setNotificationValues] = useState<Array<number>>(
    []
  );
  const [channelList, setChannelList] = useState<ChannelType[]>([]);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [chatUsers, setChatUsers] = React.useState<number>(0);
  const [chatSent, setChatSent] = React.useState<number>(0);
  const [notifiactionsSent, setNotificationsSent] = React.useState<number>(0);
  const [selectedChannel, setSelectedChannel] = React.useState<ChannelType>({
    name: 'All Channels',
    channel: 'All',
  });
  const [selectedChain, setSelectedChain] = React.useState<ChainType>(
    CHAIN_LIST[1]
  );
  const [pushGrants, setPushGrants] = React.useState<number>(0);
  const [updateTracker, setUpdateTracker] = useState<boolean>(false);
  const [governanceData, setGovernanceData] = useState<GovernanceType>();
  const [isStatisticDataLoading, setStatisticDataLoading] =
    useState<boolean>(false);
  const [isChannelDataLoading, setChannelDataLoading] =
    useState<boolean>(false);

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
    setGovernanceData(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.GOVERNANCE_DATA)) || {}
    );
    setPushIntegrations(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.PUSH_INTEGRATIONS)) || 0
    );
    setPushGrants(
      JSON.parse(sessionStorage.getItem(DATA_KEYS.PUSH_GRANTS)) || 0
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
        TIME_FILTERS,
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
        governanceData,
        setGovernanceData,
        pushGrants,
        setPushGrants,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext<DataContextType>(DataContext);

export { DataProvider, useData };
