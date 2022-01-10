import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import Mapbox from "../components/Mapbox";
import { Typography, Divider, List, Button } from "antd";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/profilecard";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  const navigate = useNavigate();
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

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>

      <Mapbox></Mapbox>
      <Divider></Divider>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
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
      ) :null}
      <Divider></Divider>
      <div  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'80vw'}}>
      <List
 
        grid={{
          gutter:16,
         column:viewPortWidth>500?4:1}}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 16,
        }}
        dataSource={searchshow == false ? data : searchdata}
        renderItem={(item) => (
          <List.Item>
            <ProfileCard
              name={item.name}
              avatar={item.avatar}
              action={() => {
                navigate("/picpage");
              }}
            ></ProfileCard>
          </List.Item>
        )}
      />
      </div>
    </div>
  );
};

export default Gallery;
