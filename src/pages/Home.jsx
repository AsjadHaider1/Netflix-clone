import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row
        rowID={1}
        title="Now Playing"
        fetchUrl={requests.requestNowPlaying}
      />
      <Row rowID={2} title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowID={3} title="Popular" fetchUrl={requests.requestPopular} />
      <Row rowID={4} title="Trending" fetchUrl={requests.requestTrending} />
      <Row rowID={5} title="Top Rated" fetchUrl={requests.requestTopRated} />
    </>
  );
};

export default Home;
