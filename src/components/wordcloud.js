import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import "../App.less";
import { useEffect, useState } from "react";

const Wordcloud = (props) => {
  const data = props.data;
  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    setInterval(() => {
      setCount((old) => old + 1);
    }, 3000);
  }, []);

  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div
      className="app-outer"
      style={{ height: `${viewPortWidth > 800 ? "45vh" : "45vh"}` }}
    >
      <div className="app-inner">
        <TagCloud
          minSize={12}
          maxSize={35}
          className="tag-cloud"
          style={{
            fontFamily: "sans-serif",
            fontSize: viewPortWidth > 800 ? 24 : 17,
            color: () => randomColor({ luminosity: "dark" }),
          }}
        >
          {data.map((item, i) => (
            <div key={i}>{item.keyword}</div>
          ))}
        </TagCloud>
      </div>
    </div>
  );
};

export default Wordcloud;
