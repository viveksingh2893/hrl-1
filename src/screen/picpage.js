import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { Divider } from "antd";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const Picpage = () => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const { Title, Text } = Typography;
  const prevdata = () => {
    console.log("Fetch previous member");
  };

  const nextdata = () => {
    console.log("Fetch next member");
  };

  const onSearch = (value) => console.log(value);
  const data = [];
  const picdata = {
    location: "Hyderabad, India",
    avatar: `https://picsum.photos/id/45/600/400`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    kword:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    date: "12/10/2020 9:30 AM",
  };
  const keywords = [];
  for (let i = 0; i < 21; i++) {
    data.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: `https://picsum.photos/id/${i}/600/400`,
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
      <div
        style={{
          width: "100vw",
          // backgroundColor: "orange",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <div
          style={{
            width: "40%",
            margin: 5,
            display: "flex",
            flex: 1,
            flexShrink: 1,
            flexBasis: 405,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            type="primary"
            icon={<LeftOutlined />}
            shape="circle"
            onClick={prevdata}
            size="large"
          />
          <div
            style={{
              padding: 3,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              margin: 5,
            }}
          >
            {/* <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}> */}
            <Image
              src={picdata.avatar}
              // width={`${viewPortWidth > 500 ? "20vw" : "40vw"}`}
            />
            {/* </div> */}
          </div>
          <Button
            type="primary"
            icon={<RightOutlined />}
            shape="circle"
            onClick={nextdata}
            size="large"
          />
        </div>
        <div
          style={{
            width: "40%",
            margin: 5,
            flex: 1,
            // flexShrink: 1,
            flexBasis: 405,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: `${viewPortWidth > 850 ? "70%" : "90%"}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "white",
              marginTop: 5,
              borderRadius: "1vw",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Description:</b> {picdata.description}
            </Text>
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Keywords:</b> {picdata.kword}
            </Text>
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Date and Time:</b> {picdata.date}
            </Text>
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Location:</b> {picdata.location}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picpage;
