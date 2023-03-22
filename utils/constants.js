export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ERROR: '*',
  ADMIN: '/admin',
  DASHBOARD: '/dashboard',
};

export const DAPP_LINKS = {
  CHANNELS: 'https://app.push.org/#/channels',
  CHATS: 'https://app.push.org/#/chat',
};

export const CHAIN_LIST = [
  {
    image: "/static/allchain.svg",
    chain: 'All Network',
    value: 'All',
  },
  {
    image: '/static/ethereum.svg',
    chain: 'Ethereum Network',
    value: 'ETH_TEST_GOERLI',
    //value: 'ETH_MAINNET',
  },
  {
    image: '/static/polygon.svg',
    chain: 'Polygon Network',
    value: 'POLYGON_TEST_MUMBAI',
    //value: 'POLYGON_MAINNET',
  }
];

export const CREDENTIALKEYS = {
  LOGINCHECK: 'userLogin',
  TOKEN: 'token',
};

export const DATA_KEYS = {
  SUBSCRIBER_DATA: 'subscriberData',
  NOTIFICATION_DATA: 'notificationData',
  CHANNEL_LIST: 'channelList',
  SUBSCRIBER_CATEGORIES: 'subscriberCategories',
  SUBSCRIBER_VALUES: 'subscriberValues',
  NOTIFICATION_CATEGORIES: 'notificationCategories',
  NOTIFICATION_VALUES: 'notificationValues',
  TOTAL_NOTIFICATIONS: 'totalNotifications',
  TOTAL_SUBSCRIBERS: 'totalSubscribers',
  NOTIFICATIONS_SENT: 'notificationsSent',
  CHAT_USERS: 'chatUsers',
  CHAT_SENT: 'chatSent',
};
