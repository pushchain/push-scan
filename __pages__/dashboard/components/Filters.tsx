// React, NextJS imports
import React from 'react';

// External Library imports
import { Box, useMediaQuery, Avatar } from '@mui/material';
import styled, { useTheme } from 'styled-components';

// Internal Components imports
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from './LineChartSet/linchartset.styled';
import { useTheme as useMode } from '../../../contexts/ThemeContext';
import { ItemHV2, ImageV2, SpanV2 } from '../../../components/SharedStyling';

export default function Filters({
  selectedChannel,
  selectedChain,
  chainList,
  channelList,
  handleChainChange,
  handleChannelChange,
  showChain,
  setShowChain,
  showChannel,
  setShowChannel,
  TimeFilterOptions,
  selectedFilter,
  setSelectedFilter,
  handleTimeFilter,
}) {
  const isSmall = useMediaQuery('(max-width:768px)');
  const { isDarkMode } = useMode();
  const theme = useTheme();
  const [channels, setChannels] = React.useState<any[]>();

  React.useEffect(() => {
    setChannels(channelList);
  }, [channelList]);

  console.log('ChannelList', channelList);

  const handleSearch = (event: any) => {
    event.preventDefault();
    const text = event.target.value;
    const searchResult = channelList.filter((obj) =>
      JSON.stringify(obj).toLowerCase().includes(text.toLowerCase())
    );
    if (searchResult.length > 0) {
      setChannels(searchResult);
    } else {
      setChannels(channelList);
    }
  };

  return (
    <>
      <FirstFilterContainer>
        <Select
          background="#cf1c84"
          color="#fff"
          marginRight={isSmall ? '0px' : '10px'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
              cursor: 'pointer',
            }}
            onClick={() => setShowChannel(!showChannel)}
          >
            {selectedChannel?.icon && (
              <Avatar
                src={selectedChannel?.icon}
                sx={{
                  width: 33,
                  height: 33,
                  marginRight: 0.5,
                  cursor: 'pointer',
                }}
              />
            )}

            <Box
              sx={{
                display: 'block',
                maxWidth: '180px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                paddingLeft: !selectedChannel?.icon ? '15px' : null,
              }}
            >
              {selectedChannel?.name}
            </Box>
          </Box>
          <ImageV2
            height="20px"
            width="20px"
            cursor="pointer"
            alt="Dropdown icon"
            src={'./static/caret-down-white.png'}
            onClick={() => setShowChannel(!showChannel)}
          />
          {showChannel && (
            <OptionList background="#cf1c84">
              <SearchbarContainer>
                <ImageV2
                  src={
                    isDarkMode
                      ? './static/search-dark.png'
                      : './static/search.png'
                  }
                  width="16px"
                  height="16px"
                />
                <Searchbar
                  placeholder="Search Channels"
                  onChange={(e) => handleSearch(e)}
                />
              </SearchbarContainer>
              <Box
                sx={{
                  width: '100%',
                  maxHeight: '140px',
                  overflowY: 'auto',
                  '::-webkit-scrollbar': {
                    width: '5px',
                    backgroundColor: 'transparent',
                    borderRadius: '5px',
                  },
                  '::-webkit-scrollbar-thumb': {
                    backgroundColor: '#CF1C84',
                    borderRadius: '5px',
                  },
                }}
              >
                {channels?.map((channel, index) => (
                  <Option
                    key={index}
                    onClick={() => {
                      handleChannelChange(channel);
                      setShowChain(!showChain);
                    }}
                  >
                    {channel?.icon && (
                      <Avatar
                        src={channel.icon}
                        sx={{
                          width: 33,
                          height: 33,
                          marginRight: 0.5,
                          cursor: 'pointer',
                        }}
                      />
                    )}

                    <Box
                      sx={{
                        display: 'block',
                        maxWidth: '160px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        margin: !channel?.icon ? '5px auto' : null,
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
          background={isDarkMode ? '#282A2E' : 'transparent'}
          color={!isDarkMode ? '#657795' : '#B6BCD6'}
          width="80px"
          border={`1px solid ${theme.background.border}`}
          marginRight={isSmall ? '0px' : '10px'}
        >
          <ItemHV2
            justifyContent="flex-start"
            onClick={() => setShowChain(!showChain)}
            cursor="pointer"
          >
            <Avatar
              src={selectedChain.image}
              sx={{
                width: 33,
                height: 33,
                marginRight: 0.5,
                cursor: 'pointer',
              }}
            />
            <Box
              sx={{
                color: !isDarkMode ? '#657795' : '#B6BCD6',
                '@media(max-width:480px)': {
                  display: 'none',
                },
              }}
            >
              {selectedChain?.chain}
            </Box>
          </ItemHV2>
          <ImageV2
            height="20px"
            width="20px"
            alt="Dropdown icon"
            cursor="pointer"
            src={'./static/caret-down-black.png'}
            onClick={() => setShowChain(!showChain)}
          />
          {showChain && (
            <OptionList>
              {chainList.map((chain, index) => (
                <Option key={index} onClick={() => handleChainChange(chain)}>
                  <Avatar
                    src={chain.image}
                    sx={{
                      width: 33,
                      height: 33,
                      marginRight: 0.5,
                      cursor: 'pointer',
                    }}
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
      </FirstFilterContainer>
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
            fontWeight={index + 1 === selectedFilter ? '700' : '500'}
          >
            {time?.time}
          </TimeFilter>
        ))}
      </TimeFilterContainer>
    </>
  );
}

const SearchbarContainer = styled(ItemHV2)`
  width: 100%;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.background.border};
  border-radius: 12px;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const Searchbar = styled.input`
  width: 85%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.background.optionlist};
  color: ${({ theme }) => theme.text.secondary};
  font-size: 15px;
  margin-left: 8px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

const FirstFilterContainer = styled(ItemHV2)`
justify-content:flex-start;
@media(max-width:480px){
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top:25px;
};
@media(max-width:768px) {
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
},
`;
