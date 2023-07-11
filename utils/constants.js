import AllChainIcon from "../public/static/allchain.svg";
import EthereumIcon from "../public/static/ethereum.svg";
import PolygonIcon from "../public/static/polygon.svg";
import OptimismIcon from '../public/static/optimism.svg';
import BSCIcon from "../public/static/bsc.svg";
import ZkevmIcon from '../public/static/zkevm.svg';
import ArbitrumIcon from "../public/static/arbitrum.svg";

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ERROR: '*',
  ADMIN: '/admin',
  DASHBOARD: '/dashboard',
};

export const DAPP_LINKS = {
  CHANNELS: 'https://app.push.org/#/channels',
  DAPP_CHANNEL:'https://app.push.org/channels?search=',
  CHATS: 'https://app.push.org/#/chat',
};

export const CHAIN_LIST = [
  {
    image: AllChainIcon,
    chain: 'All Networks',
    value: 'All',
  },
  {
    image: EthereumIcon,
    chain: 'Ethereum Network',
    //value: 'ETH_TEST_GOERLI',
    value: 'ETH_MAINNET',
  },
  {
    image: PolygonIcon,
    chain: 'Polygon Network',
    //value: 'POLYGON_TEST_MUMBAI',
    value: 'POLYGON_MAINNET',
  },
  {
    image: BSCIcon,
    chain: 'BNB Network',
    value: 'BSC_MAINNET',
  },
  // {
  //   image: OptimismIcon,
  //   chain: 'Optimism Network',
  //   value: 'OPTIMISM_MAINNET',
  // },
  // {
  //   image: ArbitrumIcon,
  //   chain: 'Arbitrum Network',
  //   value: 'ARBITRUMONE_MAINNET',
  // },
  // {
  //   image: ZkevmIcon,
  //   chain: 'Polygon zkEVM Network',
  //   value: 'POLYGON_ZK_EVM_MAINNET',
  // },
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
  PUSH_INTEGRATIONS: 'pushIntegrations',
  GOVERNANCE_DATA: 'governanceData',
  PUSH_GRANTS: 'pushGrants',
};

export const TIME_FILTERS = [
  { time: '1D' },
  { time: '7D' },
  { time: '1M' },
  { time: '1Y' },
  { time: 'YTD' },
  { time: 'ALL' },
];
