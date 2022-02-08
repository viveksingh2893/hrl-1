import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import "../App.less";
import { useEffect, useState } from "react";

const Wordcloud = (props) => {
  const data = props.data;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
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
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.searchfor(item);
              }}
            >
              {item}
            </div>
          ))}
        </TagCloud>
      </div>
    </div>
  );
};

export default Wordcloud;
