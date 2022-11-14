import LeaderBoard from "./LeaderBoard/LeaderBoard";

export default function Trending() {
  const data = [
    {
      image: "/static/Clothing.png",
      name: "Lens Protocol",
      value: 100,
      trend: 10,
    },
    {
      image: "/static/Clothing.png",
      name: "Coinshots",
      value: 200,
      trend: 7.4,
    },
    { image: "/static/Clothing.png", name: "Aave", value: 300, trend: 3.2 },
    {
      image: "/static/Clothing.png",
      name: "Meet with Wallet",
      value: 200,
      trend: 7.5,
    },
    { image: "/static/Clothing.png", name: "Uniswap", value: 300, trend: 3.2 },
  ];

  return <LeaderBoard title="Trending" data={data} isTrending={true} />;
}
