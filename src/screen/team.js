import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Typography, List } from "antd";
import ProfileCard from "../components/profilecard";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();
  const data = [];
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
  }

  const { Title, Text } = Typography;
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
      style={{
        width: "100vw",
        marginTop: `${viewPortWidth > 500 ? "12.5vh" : "10vh"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Title
        level={2}
        style={{ fontFamily: "times-new-roman", marginTop: "5vh" }}
      >
        Our Team
      </Title>
      {/* <div
        style={{
          width: `${viewPortWidth > 600 ? "70vw" : "40vw"}`,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",

          backgroundColor: "orange",
        }}
      > */}
      <List
        style={{ padding: 100 }}
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
          pageSize: 10,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <ProfileCard
              name={item.name}
              avatar={item.avatar}
              action={() => {
                navigate("/member");
              }}
            ></ProfileCard>
          </List.Item>
        )}
      />
    </div>
    // </div>
  );
};

export default Team;