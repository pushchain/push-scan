import { GovernanceType } from './governance';

export type SubscriberType = [date: string | Date, subscribers: boolean];

export type NotificationType = [date: string | Date, notifications: boolean];

export type ChannelType = {
  channel: string;
  icon?: string;
  name: string;
};

export type ChainType = {
  image: string;
  chain: string;
  value: string;
};

export type TimeFilterType = {
  time: string;
};

export type DataContextType = {
  isLoggedIn?: boolean;
  setIsLoggedIn?: (isLoggedIn: boolean) => void;
  token?: string;
  setToken?: (token: string) => void;
  TIME_FILTERS?: TimeFilterType[];
  updateTracker?: boolean;
  setUpdateTracker?: (tracker: boolean) => void;
  pushIntegrations?: number;
  setPushIntegrations?: (integrations: number) => void;
  subscriberData?: SubscriberType[];
  setSubscriberData?: (subscribers: SubscriberType[]) => void;
  notificationData?: NotificationType[];
  setNotificationData?: (notifications: NotificationType[]) => void;
  subscriberCategories?: Array<string>;
  setSubscriberCategories?: (categories: Array<string>) => void;
  notificationCategories?: Array<string>;
  setNotificationCategories?: (categories: Array<string>) => void;
  subscriberValues?: Array<number>;
  setSubscriberValues?: (values: Array<number>) => void;
  notificationValues?: Array<number>;
  setNotificationValues?: (values: Array<number>) => void;
  channelList?: ChannelType[];
  setChannelList?: (list: ChannelType[]) => void;
  totalSubscribers?: number;
  setTotalSubscribers?: (subscribers: number) => void;
  totalNotifications?: number;
  setTotalNotifications?: (notifications: number) => void;
  isStatisticDataLoading?: boolean;
  setStatisticDataLoading?: (loading: boolean) => void;
  isChannelDataLoading?: boolean;
  setChannelDataLoading?: (loading: boolean) => void;
  chatSent?: number;
  chatUsers?: number;
  notifiactionsSent?: number;
  setChatSent?: (sent: number) => void;
  setChatUsers?: (users: number) => void;
  setNotificationsSent?: (notifactions: number) => void;
  selectedChannel?: ChannelType;
  setSelectedChannel?: (channel: ChannelType) => void;
  selectedChain?: ChainType;
  setSelectedChain?: (chain: ChainType) => void;
  governanceData?: GovernanceType;
  setGovernanceData?: (data: GovernanceType) => void;
  pushGrants?: number;
  setPushGrants?: (grants: number) => void;
};

export type ThemeContextType = {
  isDarkMode: boolean;
  darkModeToggle: () => void;
};
