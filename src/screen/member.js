import React from "react";
import "../App.less";
import Credentials from "../components/credentials";
import { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

const Member = () => {
  const { Title, Text } = Typography;
  const memberdata = {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    membname: "Lorem Ipsum",
    desig: "Researcher",
    email: "researcher@hirapidlab.com",
    phone: "+xx-xxxxxxxxxx",
    bio: `Contact dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    edu: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pres: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    prev: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    proj: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pat: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pub: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    eve: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    art: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
  };
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  const prevdata = () => {
    console.log("Fetch previous member");
  };

  const nextdata = () => {
    console.log("Fetch next member");
  };

  return (
    <div>
      <div
        style={{
          width: "100vw",
          // backgroundColor: "orange",
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
            <Image
              src={memberdata.image}
              width={`${viewPortWidth > 500 ? "20vw" : "40vw"}`}
            />
          </div>
          <Button
            type="primary"
            icon={<RightOutlined />}
            shape="circle"
            onClick={nextdata}
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
          <Title level={2}>{memberdata.membname}</Title>
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
              <b>Designation:</b> {memberdata.desig}
            </Text>
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Email:</b> {memberdata.email}
            </Text>
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Phone Number:</b> {memberdata.phone}
            </Text>
          </div>
          <div
            style={{
              width: `${viewPortWidth > 850 ? "70%" : "90%"}`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              backgroundColor: "white",
              marginTop: 20,
              borderRadius: "1vw",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: "20px", margin: 10 }}>
              <b>Bio-Sketch: </b>
              {memberdata.bio}
            </Text>
          </div>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            style={{ margin: 20 }}
          >
            Download CV
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Credentials Title="EDUCATION" txt={memberdata.edu} />
        <Credentials Title="PRESENT POSITIONS" txt={memberdata.pres} />
        <Credentials Title="PREVIOUS POSITIONS" txt={memberdata.prev} />
        <Credentials Title="PROJECTS" txt={memberdata.proj} />
        <Credentials Title="PATENTS" txt={memberdata.pat} />
        <Credentials Title="PUBLICATIONS" txt={memberdata.pub} />
        <Credentials Title="EVENTS" txt={memberdata.eve} />
        <Credentials Title="ARTICLES" txt={memberdata.art} />
      </div>
    </div>
  );
};
export default Member;
