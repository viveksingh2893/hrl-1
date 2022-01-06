import React, { Component } from "react";
import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography, Divider, Image, Button } from "antd";
import { List } from "antd";
import img1 from "../assets/image/IMG 2.4C.jpg";
import ProfileCard from "../components/profilecard";

const Blog = () => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const [srchres, setSrchres] = useState("none");
  const onSearch = (value) => {
    setSrchres(value);
    setSearchShow(true);
  };
  const clearSearch = () => {
    setSearchShow(false);
  };
  const { Title, Text } = Typography;
  const [searchshow, setSearchShow] = useState(false);
  const data = [];
  const keywords = [];
  const searchdata = [];
  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();

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
    searchdata.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: `https://picsum.photos/id/${i + 100}/300/200`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-layout">
      <div>
        <Wordcloud data={keywords}></Wordcloud>
      </div>
      <div>
        <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      </div>
      {searchshow ? (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
            flexDirection: "column",
          }}
        >
          <Typography.Title
            // style={{ marginLeft: "10vw" }}
            level={tlvl}
            style={{ fontFamily: "calibri" }}
          >{`${searchdata.length} SEARCH RESULTS FOR "${srchres}"`}</Typography.Title>
          <Button
            type="primary"
            shape="round"
            size="small"
            onClick={clearSearch}
          >
            Clear Results
          </Button>
        </div>
      ) : (
        <div></div>
      )}
      <Divider></Divider>
      <div style={{ width: "80vw" }}>
        <List
          itemLayout="vertical"
          grid={{
            column: 1,
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
          dataSource={searchshow == false ? data : searchdata}
          renderItem={(item) => (
            <List.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <Image width={272} alt="logo" src={item.avatar} />
                <Divider type="vertical"></Divider>
                <List.Item.Meta
                  style={{ display: "flex", flexBasis: 400 }}
                  title={
                    <Typography.Title level={4} href={item.href}>
                      Hello World
                    </Typography.Title>
                  }
                  description={
                    <Typography.Text>
                      {item.description + item.description}
                    </Typography.Text>
                  }
                />
              </div>

              {/* <ProfileCard name={item.name} avatar={img1}></ProfileCard> */}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Blog;
