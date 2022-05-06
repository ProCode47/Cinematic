import React from "react";
import Trending from "./trendingMovie";
import Latest from "./latestMovie";

const Movies = () => {
  return (
    <React.Fragment>
      <Latest />
      <Trending />
    </React.Fragment>
  );
};

export default Movies;
