import React from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from './LineChartSet/linchartset.styled';
import { useTheme } from '@mui/material/styles';

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
  const { theme } = useTheme();
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <>
      <Box
        display="flex"
        sx={{
          '@media(max-width:480px)': {
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: '10px',
          },
          '@media(max-width:768px)': {
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: '10px',
          },
        }}
      >
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
                    onClick={() => {
                      handleChannelChange(channel);
                      setShowChain(!showChain);
                    }}
                  >
                    {channel?.icon && (
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
                      />
                    )}

                    <Box
                      sx={{
                        display: 'block',
                        maxWidth: '160px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        paddingLeft: !channel?.icon ? '10px' : null,
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
          marginRight={isMobile ? '0px' : '10px'}
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
              {chainList.map((chain, index) => (
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
    </>
  );
}
