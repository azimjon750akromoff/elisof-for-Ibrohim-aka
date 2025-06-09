import React from "react";
import FamousProduct from "./third/famousproduct";
import About from "./fourth/about";
import News from "./six/news";
import Request from "./seven/request";
import MainComponent from "../maincomponent/main";
import FeedMainComponent from "../feedmaincomponent/feedmaincomponent";

function HomePage() {
  return (
    <div>
      <MainComponent/>
      <FamousProduct />
      <About />
      <FeedMainComponent/>
      <News />
      <Request />
    </div>
  );
}

export default HomePage;
