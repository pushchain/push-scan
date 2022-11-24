import { useEffect, useState } from "react";
import { getLeaderBoard } from "utils/api";
import { useData } from "contexts/DataContext";
import LeaderBoard from "./LeaderBoard/LeaderBoard";

export default function TopChannels() {
  const [data, setData] = useState([]);
  const { token } = useData();

  useEffect(() => {
    (async () => {
      try {
        const res = await getLeaderBoard({
          token: token,
          limit: 5,
          sort: "subscribers",
          order: "desc",
        });
        setData(res.leaderboardAnalytics);
      } catch (e) {
        console.log("Error occured", e);
      }
    })();
  }, []);

  return <LeaderBoard title="Top channels by subscriber count" data={data} />;
}
