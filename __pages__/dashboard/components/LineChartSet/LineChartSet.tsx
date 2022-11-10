import * as React from "react";
import { Grid, Box } from "@mui/material";
import {
  Select,
  OptionList,
  Option,
  TimeFilterContainer,
  TimeFilter,
} from "./linchartset.styled";
import Notifications from "../Notifications";
import Subscribers from "../Subscribers";

export default function LineChartSet() {
  const [selectedChannel, setSelectedChannel] = React.useState({
    image: "./static/Clothing.png",
    channel: "All Channels",
  });
  const [showChannel, setShowChannel] = React.useState(false);
  const [selectedChain, setSelectedChain] = React.useState({
    image: "./static/ethereum.svg",
    chain: "Ethereum Network",
  });
  const [showChain, setShowChain] = React.useState(false);
  const [selectedFilter, setSelectedFilter] = React.useState(5);
  const TimeFilterOptions = [
    { time: "1D" },
    { time: "7D" },
    { time: "1M" },
    { time: "YTD" },
    { time: "ALL" },
  ];

  const ChannelList = [
    { image: "./static/Clothing.png", channel: "All Channels" },
    { image: "./static/Clothing.png", channel: "Aave" },
    { image: "./static/Clothing.png", channel: "Lens Protocol" },
  ];

  const ChainList = [
    { image: "./static/ethereum.svg", chain: "Ethereum Network" },
    { image: "./static/ethereum.svg", chain: "Polygon Network" },
  ];

  const handleChannelChange = (channel: { image: string; channel: string }) => {
    setShowChannel(!showChannel);
    setSelectedChannel(channel);
  };

  const handleChainChange = (chain: { image: string; chain: string }) => {
    setShowChain(!showChain);
    setSelectedChain(chain);
  };

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
            "@media(max-width:480px)": {
              width: "100%",
              justifyContent: "space-between",
              marginBottom: "10px",
            },
          }}
        >
          <Select background="#cf1c84" color="#fff" border="transparent">
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setShowChannel(!showChannel)}
            >
              <Box
                component="img"
                sx={{
                  height: "33px",
                  width: "33px",
                  marginRight: "5px",
                }}
                alt=""
                src={selectedChannel.image}
                onClick={() => setShowChain(!showChain)}
              />

              {selectedChannel?.channel}
            </Box>
            <Box
              component="img"
              sx={{
                height: "20px",
                width: "20px",
              }}
              alt=""
              src={"./static/caret-down-white.png"}
            />
            {showChannel && (
              <OptionList background="#cf1c84">
                {ChannelList.map((channel, index) => (
                  <Option
                    key={index}
                    onClick={() => handleChannelChange(channel)}
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "33px",
                        width: "33px",
                        marginRight: "5px",
                      }}
                      alt=""
                      src={channel?.image}
                      onClick={() => setShowChain(!showChain)}
                    />
                    {channel.channel}
                  </Option>
                ))}
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
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => setShowChain(!showChain)}
            >
              <Box
                component="img"
                sx={{
                  height: "33px",
                  width: "33px",
                  marginRight: "5px",
                }}
                alt=""
                src={selectedChain.image}
              />
              <Box
                sx={{
                  "@media(max-width:480px)": {
                    display: "none",
                  },
                }}
              >
                {selectedChain.chain}
              </Box>
            </Box>
            <Box
              component="img"
              sx={{
                height: "20px",
                width: "20px",
              }}
              alt=""
              src={"./static/caret-down-black.png"}
              onClick={() => setShowChain(!showChain)}
            />
            {showChain && (
              <OptionList>
                {ChainList.map((chain, index) => (
                  <Option key={index} onClick={() => handleChainChange(chain)}>
                    <Box
                      component="img"
                      sx={{
                        height: "33px",
                        width: "33px",
                        marginRight: "5px",
                      }}
                      alt=""
                      src={chain.image}
                      onClick={() => setShowChain(!showChain)}
                    />
                    <Box
                      sx={{
                        "@media(max-width:480px)": {
                          display: "none",
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
              onClick={() => setSelectedFilter(index + 1)}
              background={
                index + 1 === selectedFilter ? "#cf1c84" : "transparent"
              }
              color={index + 1 === selectedFilter ? "#fff" : "#657795"}
            >
              {time?.time}
            </TimeFilter>
          ))}
        </TimeFilterContainer>
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={0}>
        <Notifications />
        <Subscribers />
      </Grid>
    </>
  );
}
