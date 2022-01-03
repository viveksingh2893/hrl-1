import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { Text } from "react";

const Member = () => {
  const { Title, Text } = Typography;
  const memberdata = [];
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "orange",
          marginTop: `${viewPortWidth > 500 ? "14.5vh" : "12vh"}`,
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
            flexBasis: 300,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: 5,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width={`${viewPortWidth > 500 ? "20vw" : "40vw"}`}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            width: "40%",
            margin: 5,
            flex: 1,
            // flexShrink: 1,
            flexBasis: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Title level={2}>Lorem Ipsum</Title>
          {/* <div
            style={{
              width: "40%",
              height: "40vw",
              backgroundColor: "white",
              marginTop: 5,
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};
export default Member;
