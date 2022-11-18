import * as React from 'react';
import { Grid, Box } from '@mui/material';
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from './linchartset.styled';
import Notifications from '../Notifications';
import Subscribers from '../Subscribers';
import { getSubscribers, getNotifications, getLeaderBoard } from 'utils/api';
import { useData } from 'contexts/DataContext';

export default function LineChartSet() {
  const { token } = useData();
  const [selectedChannel, setSelectedChannel] = React.useState({
    icon: './static/Clothing.png',
    name: 'All Channels',
    channel: 'All',
  });
  // const [channel, setChannel] = React.useState('All');
  const [showChannel, setShowChannel] = React.useState(false);
  const [selectedChain, setSelectedChain] = React.useState({
    image: './static/ethereum.svg',
    chain: 'Ethereum Network',
    value: 'ETH_TEST_GOERLI',
  });
  const [showChain, setShowChain] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState(6);
  const [startDate, setStartDate] = React.useState('2022-01-01');
  const [endDate, setEndDate] = React.useState(
    new Date(Date.now()).toISOString().split('T')[0]
  );
  const [min, setMin] = React.useState<any>(new Date('2022-01-01').getTime());
  const [max, setMax] = React.useState<any>(new Date().getTime());
  const [totalSubscribers, setTotalSubscribers] = React.useState(0);
  const [totalNotifications, setTotalNotifications] = React.useState(0);
  const [interval, setInterval] = React.useState(
    Math.ceil(
      Math.ceil(
        Math.abs(new Date('2022-01-01').getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      ) / 60
    )
  );
  const [subscriberData, setSubscriberData] = React.useState<any[]>([]);
  const [notificationData, setNotificationData] = React.useState<any[]>([]);
  const [channelList, setChannelList] = React.useState<any[]>([]);

  const TimeFilterOptions = [
    { time: '1D' },
    { time: '7D' },
    { time: '1M' },
    { time: '1Y' },
    { time: 'YTD' },
    { time: 'ALL' },
  ];

  // const ChannelList = [
  //   { image: './static/Clothing.png', channel: 'All Channels' },
  //   { image: './static/Clothing.png', channel: 'Aave' },
  //   { image: './static/Clothing.png', channel: 'Lens Protocol' },
  // ];

  const ChainList = [
    {
      image: './static/ethereum.svg',
      chain: 'Ethereum Network',
      value: 'ETH_TEST_GOERLI',
    },
    {
      image: './static/ethereum.svg',
      chain: 'Polygon Network',
      value: 'POLYGON_TEST_MUMBAI',
    },
  ];

  var getDatesArray = function ({
    start,
    end,
    interval,
  }: {
    start: string;
    end: string;
    interval: number;
  }) {
    for (
      var dateArray = [], dt = new Date(end);
      dt >= new Date(start);
      dt.setDate(dt.getDate() - interval)
    ) {
      dateArray.push(new Date(dt));
    }

    return dateArray;
  };

  const getDateLength = (arrayLength: number) => {
    let length = 0;
    switch (interval) {
      case 1:
        length = 1;
        break;
      case 7:
        length = 7;
        break;
      case 30:
        length = 6;
        break;
      default:
        length = arrayLength;
        break;
    }
    return length;
  };

  // React.useEffect(() => {
  //   const startDate = new Date('2022-01-01').getTime();
  //   const endDate = new Date().getTime();
  //   const diffTime = Math.abs(endDate - startDate);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   const interval = Math.ceil(diffDays / 60);
  //   setInterval(interval);
  // }, []);

  React.useEffect(() => {
    const dateArray = getDatesArray({
      start: startDate,
      end: endDate,
      interval,
    });

    setMin(dateArray[dateArray.length - 1]);
    setMax(dateArray[0]);
  }, []);

  React.useEffect(() => {
    (async () => {
      setChannelList([]);
      const allChannels = {
        icon: './static/Clothing.png',
        name: 'All Channels',
        channel: 'All',
      };
      try {
        const res = await getLeaderBoard({
          token: token,
          limit: 30,
          sort: 'subscribers',
          order: 'desc',
        });
        // console.log('channels', res);
        setChannelList([allChannels, ...res.leaderboardAnalytics]);
      } catch (e) {
        console.log('Error occured', e);
      }
    })();
    return () => setChannelList([]);
  }, [selectedChain]);

  React.useEffect(() => {
    (async () => {
      setTotalSubscribers(0);
      setTotalNotifications(0);
      const totalSubsc = await getSubscribers({
        token,
        startDate,
        endDate,
        channel: selectedChannel.channel,
        chain: selectedChain.value,
      });
      setTotalSubscribers(totalSubsc?.totalSubscribers);
      const totalNotifi = await getNotifications({
        token,
        startDate,
        endDate,
        channel: selectedChannel?.channel,
        chain: selectedChain?.value,
      });
      setTotalNotifications(totalNotifi?.totalNotification);
      // console.log(
      //   'sub',
      //   totalSubsc.totalSubscribers,
      //   'notif',
      //   totalNotifi.totalNotification
      // );
    })();
    return () => {
      setTotalSubscribers(0);
      setTotalNotifications(0);
    };
  }, [selectedChain, selectedChannel]);

  React.useEffect(() => {
    (async () => {
      setSubscriberData([]);
      setNotificationData([]);

      const dateArray = getDatesArray({
        start: startDate,
        end: endDate,
        interval,
      });

      // setMin(dateArray[dateArray.length - 1]);
      // setMax(dateArray[0]);
      // const dateLength = getDateLength(dateArray.length);
      for (let i = dateArray.length - 1; i > 0; i--) {
        const newStartDate = dateArray[i];
        const newEndDate = dateArray[i - 1];
        const subscriberRes = await getSubscribers({
          token: token,
          startDate: newStartDate,
          endDate: newEndDate,
          channel: selectedChannel?.channel,
          chain: selectedChain?.value,
        });
        setSubscriberData((data) => [
          ...data,
          [new Date(newEndDate).getTime(), subscriberRes?.totalSubscribers],
        ]);
        // console.log('subscriberSet', subscriberData);
        const notificationRes = await getNotifications({
          token: token,
          startDate: newStartDate,
          endDate: newEndDate,
          channel: selectedChannel?.channel,
          chain: selectedChain.value,
        });
        setNotificationData((data) => [
          ...data,
          [new Date(newEndDate).getTime(), notificationRes?.totalNotification],
        ]);
      }
    })();
    return () => {
      setSubscriberData([]);
      setNotificationData([]);
    };
  }, [selectedChain, selectedChannel, interval]);

  const handleChannelChange = (channel: {
    icon: string;
    name: string;
    channel: string;
  }) => {
    setShowChannel(!showChannel);
    setSelectedChannel(channel);
  };

  const handleChainChange = (chain: {
    image: string;
    chain: string;
    value: string;
  }) => {
    setShowChain(!showChain);
    setSelectedChain(chain);
  };

  const handle1 = () => {
    setMin(Date.now() - 1 * 86400000);
    setStartDate(
      new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0]
    );
    setInterval(1);
  };

  const handle7 = () => {
    setMin(Date.now() - 7 * 86400000);
    setStartDate(
      new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0]
    );
    setInterval(1);
  };

  const handle30 = () => {
    setMin(Date.now() - 30 * 86400000);
    setStartDate(
      new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0]
    );
    setInterval(1);
  };

  const handle12 = () => {
    // const isLeapYear=((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    if (new Date(Date.now() - 365 * 86400000) < new Date('2022-01-01')) {
      setMin(new Date('2022-01-01').getTime());
      setStartDate('2022-01-01');
    } else {
      setMin(Date.now() - 365 * 86400000);
      setStartDate(
        new Date(Date.now() - 365 * 86400000).toISOString().split('T')[0]
      );
    }
    setInterval(15);
  };

  const handleYTD = () => {
    const currentYear = new Date().getFullYear();
    setMin(new Date(`${currentYear}-01-01`).getTime());
    setStartDate(`${currentYear}-01-01`);
    setInterval(15);

    const currentMonth = new Date().getMonth();
  };

  const handleAll = () => {
    setMin(new Date('2022-01-01').getTime());
    setStartDate('2022-01-01');
    setMax(Date.now());
    setInterval(5);
  };

  const handleTimeFilter = (time: any) => {
    switch (time) {
      case '1D':
        handle1();
        break;
      case '7D':
        handle7();
        break;
      case '1M':
        handle30();
        break;
      case 'YTD':
        handleYTD();
        break;
      case '1Y':
        handle12();
        break;
      case 'ALL':
        handleAll();
        break;
      default:
        console.log('No option');
    }
  };

  // console.log('NotificationData', notificationData);
  // console.log('subscriberData', subscriberData);

  return (
    <>
      <Grid
        item
        display="flex"
        width="100%"
        justifyContent="space-between"
        flexWrap="wrap"
        mt={8}
        mb={0}
        xs={12}
        sm={6}
        md={6}
        lg={6}
      >
        <Box
          display="flex"
          sx={{
            '@media(max-width:480px)': {
              width: '100%',
              justifyContent: 'space-between',
              marginBottom: '10px',
            },
          }}
        >
          <Select background="#cf1c84" color="#fff" border="transparent">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
              }}
              onClick={() => setShowChannel(!showChannel)}
            >
              <Box
                component="img"
                sx={{
                  height: '33px',
                  width: '33px',
                  marginRight: '5px',
                  borderRadius: '50%',
                }}
                alt=""
                src={selectedChannel?.icon}
              />
              <Box
                sx={{
                  display: 'block',
                  maxWidth: '180px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {selectedChannel?.name}
              </Box>
            </Box>
            <Box
              component="img"
              sx={{
                height: '20px',
                width: '20px',
              }}
              alt=""
              src={'./static/caret-down-white.png'}
              onClick={() => setShowChannel(!showChannel)}
            />
            {showChannel && (
              <OptionList background="#cf1c84">
                <Box
                  sx={{
                    width: '100%',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    '::-webkit-scrollbar': {
                      width: '5px',
                      backgroundColor: 'transparent',
                      borderRadius: '5px',
                    },
                    '::-webkit-scrollbar-thumb': {
                      backgroundColor: 'white',
                      borderRadius: '5px',
                    },
                  }}
                >
                  {channelList.map((channel, index) => (
                    <Option
                      key={index}
                      onClick={() => handleChannelChange(channel)}
                    >
                      <Box
                        component="img"
                        sx={{
                          height: '33px',
                          width: '33px',
                          marginRight: '5px',
                          borderRadius: '50%',
                        }}
                        alt=""
                        src={channel?.icon}
                        onClick={() => setShowChain(!showChain)}
                      />
                      <Box
                        sx={{
                          display: 'block',
                          maxWidth: '160px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {channel?.name}
                      </Box>
                    </Option>
                  ))}
                </Box>
              </OptionList>
            )}
          </Select>
          <Select
            background="transparent"
            color="#657795"
            border="#657795"
            width="80px"
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              onClick={() => setShowChain(!showChain)}
            >
              <Box
                component="img"
                sx={{
                  height: '33px',
                  width: '33px',
                  marginRight: '5px',
                }}
                alt=""
                src={selectedChain?.image}
              />
              <Box
                sx={{
                  '@media(max-width:480px)': {
                    display: 'none',
                  },
                }}
              >
                {selectedChain?.chain}
              </Box>
            </Box>
            <Box
              component="img"
              sx={{
                height: '20px',
                width: '20px',
              }}
              alt=""
              src={'./static/caret-down-black.png'}
              onClick={() => setShowChain(!showChain)}
            />
            {showChain && (
              <OptionList>
                {ChainList.map((chain, index) => (
                  <Option key={index} onClick={() => handleChainChange(chain)}>
                    <Box
                      component="img"
                      sx={{
                        height: '33px',
                        width: '33px',
                        marginRight: '5px',
                      }}
                      alt=""
                      src={chain.image}
                      onClick={() => setShowChain(!showChain)}
                    />
                    <Box
                      sx={{
                        '@media(max-width:480px)': {
                          display: 'none',
                        },
                      }}
                    >
                      {chain?.chain}
                    </Box>
                  </Option>
                ))}
              </OptionList>
            )}
          </Select>
        </Box>
        <TimeFilterContainer>
          {TimeFilterOptions?.map((time, index) => (
            <TimeFilter
              key={time.time}
              onClick={() => {
                setSelectedFilter(index + 1);
                handleTimeFilter(time.time);
              }}
              background={
                index + 1 === selectedFilter ? '#cf1c84' : 'transparent'
              }
              color={index + 1 === selectedFilter ? '#fff' : '#657795'}
            >
              {time?.time}
            </TimeFilter>
          ))}
        </TimeFilterContainer>
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={0}>
        <Notifications
          data={notificationData}
          max={max}
          min={min}
          total={totalNotifications}
        />
        <Subscribers
          data={subscriberData}
          max={max}
          min={min}
          total={totalSubscribers}
        />
      </Grid>
    </>
  );
}
