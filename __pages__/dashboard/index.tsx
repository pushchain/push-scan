import * as React from "react";
import { Grid, Box } from "@mui/material";
import {
  DashBoardContainer,
  Select,
  OptionList,
  Option,
} from "./dashboard.styled";
import Topchannels from "./components/TopChannels";
import NewChannels from "./components/NewChannels";
import Channels from "./components/Channels";
import Notifications from "./components/Notifications";
import Subscribers from "./components/Subscribers";

const DashBoardView = () => {
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
    <DashBoardContainer>
      <Grid container spacing={4} justifyContent="center">
        <Topchannels />
        <NewChannels />
        <NewChannels />
      </Grid>
      <Grid
        item
        display="flex"
        width="100%"
        justifyContent="flex-start"
        flexWrap="wrap"
        mt={10}
        mb={0}
        xs={12}
        sm={6}
        md={6}
        lg={6}
      >
        {/* <Box sx={{ display: "flex", width: "100%", padding: "50px 0px" }}> */}
        <Select background="#cf1c84" color="#fff" border="transparent">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
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
            onClick={() => setShowChannel(!showChannel)}
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
        <Select background="transparent" color="#657795" border="#657795">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
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
              onClick={() => setShowChain(!showChain)}
            />
            {selectedChain.chain}
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
                  {chain?.chain}
                </Option>
              ))}
            </OptionList>
          )}
        </Select>
        {/* </Box> */}
      </Grid>
      <Grid container spacing={3} justifyContent="center" mt={0}>
        {/* <Channels /> */}
        <Notifications />
        <Subscribers />
      </Grid>
    </DashBoardContainer>
  );
};

export default DashBoardView;
