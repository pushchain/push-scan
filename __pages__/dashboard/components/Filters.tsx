// React, NextJS imports
import React from 'react';

// External Library imports
import { Box, useMediaQuery } from '@mui/material';
import styled from 'styled-components';

// Internal Components imports
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from './LineChartSet/linchartset.styled';
import { useTheme } from '../../../contexts/ThemeContext';
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
  const isMobile = useMediaQuery('(max-width:768px)');
  const { isDarkMode } = useTheme();
  const [channels, setChannels] = React.useState<any[]>();

  React.useEffect(() => {
    setChannels(channelList);
  }, []);

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
          border="transparent"
          marginRight={isMobile ? '0px' : '10px'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
            }}
            onClick={() => setShowChannel(!showChannel)}
          >
            {selectedChannel?.icon && (
              <ImageV2
                height="33px"
                width="33px"
                marginRight="5px"
                borderRadius="50%"
                alt=""
                src={selectedChannel?.icon}
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
            alt=""
            src={'./static/caret-down-white.png'}
            onClick={() => setShowChannel(!showChannel)}
          />
          {showChannel && (
            <OptionList background="#cf1c84">
              <Searchbar
                placeholder="Search for channel here..."
                onChange={(e) => handleSearch(e)}
              />
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
                {channels?.map((channel, index) => (
                  <Option
                    key={index}
                    onClick={() => {
                      handleChannelChange(channel);
                      setShowChain(!showChain);
                    }}
                  >
                    {channel?.icon && (
                      <ImageV2
                        height="33px"
                        width="33px"
                        borderRadius="33px"
                        marginRight="5px"
                        alt=""
                        src={channel?.icon}
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
          background="transparent"
          color={!isDarkMode ? '#657795' : '#B6BCD6'}
          border="#657795"
          width="80px"
          marginRight={isMobile ? '0px' : '10px'}
        >
          <ItemHV2
            justifyContent="flex-start"
            onClick={() => setShowChain(!showChain)}
          >
            <ImageV2
              height="33px"
              width="33px"
              marginRight="5px"
              borderRadius="50%"
              alt=""
              src={selectedChain?.image}
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
            alt=""
            src={'./static/caret-down-black.png'}
            onClick={() => setShowChain(!showChain)}
          />
          {showChain && (
            <OptionList>
              {chainList.map((chain, index) => (
                <Option key={index} onClick={() => handleChainChange(chain)}>
                  <ImageV2
                    height="33px"
                    width="33px"
                    marginRight="5px"
                    borderRadius="50%"
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

const Searchbar = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
  background-color: transaparent;
  border-radius: 16px;
  font-size: 15px;
`;

const FirstFilterContainer = styled(ItemHV2)`
justify-content:flex-start;
@media(max-width:480px){
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
};
@media(max-width:768px) {
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
},
`;
