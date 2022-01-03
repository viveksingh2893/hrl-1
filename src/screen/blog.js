import React, { Component } from "react";
import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography,Divider } from "antd";
import { List } from "antd";
import ProfileCard from "../components/profilecard";

const Blog = () => {
  const onSearch = (value) => console.log(value);

  const data = [];
  const keywords = [];
  for (let i = 0; i < 21; i++) {
    data.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
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
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      <Divider></Divider>
      <List
        bordered
        style={{ padding: 100, borderWidth: 0 }}
        grid={{
          gutter: 16,
          // xs: 1,
          // sm: 2,
          // md: 4,
          // lg: 4,
          // xl: 5,
          //xxl: 4,
          //   // md: `${Object.keys(data).length < 3 ? 2 : 4}`,
          //   // lg: `${Object.keys(data).length < 3 ? 2 : 4}`,
          //   // xl: `${Object.keys(data).length < 3 ? 2 : 5}`,
          //   // xxl: `${Object.keys(data).length < 3 ? 2 : 5}`,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <ProfileCard name={item.name}></ProfileCard>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Blog;
