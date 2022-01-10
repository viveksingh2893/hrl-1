import React from "react";
import "../App.less";
import { Input } from "antd";
import { useEffect, useState } from "react";

const Searchbar = (props) => {
  const { Search } = Input;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <Search
      style={{ width: `${viewPortWidth > 900 ? "40vw" : "70vw"}`}}
      placeholder="Enter the keyword here"
      onSearch={props.onSearch}
      // enterButton
    />
  );
};

export default Searchbar;
