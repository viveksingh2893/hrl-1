import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined, IdcardFilled } from "@ant-design/icons";

const Credentials = (props) => {
  const { Title,Paragraph } = Typography;
  return (
    <div
    style={{
      // width: `${viewPortWidth > 850 ? "70%" : "90%"}`,
      width:'75vw',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
      overflowY:'scroll'
     
      // borderRadius: "1vw",
      // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      // padding: 10,
    }}
  >
    <Title level={4}>
      {props.title}
    </Title>
   
    <Paragraph >
      {props.txt}
    </Paragraph>
  </div>
  );
};
export default Credentials;
