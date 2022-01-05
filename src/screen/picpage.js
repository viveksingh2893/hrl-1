import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { Divider } from "antd";

const Picpage = () => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const onSearch = (value) => console.log(value);
  const data = [];
  const keywords = [];
  for (let i = 0; i < 21; i++) {
    data.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: `https://picsum.photos/id/${i}/300/200`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
    keywords.push({
      id: i,
      keyword: `word ${String(i)}`,
    });
  }

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      <Divider></Divider>
    </div>
  );
};

export default Picpage;
