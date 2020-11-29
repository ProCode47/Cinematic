import React from "react";
import TrendingShow from "./trendingShow";
import LatestShow from "./latestShow";

const Shows = () => {
  return (
    <React.Fragment>
      <LatestShow />
      <TrendingShow />
    </React.Fragment>
  );
};

export default Shows;
