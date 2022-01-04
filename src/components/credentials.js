import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined, IdcardFilled } from "@ant-design/icons";

const Credentials = (props) => {
  const { Text } = Typography;
  return (
    <div
      style={{
        width: "80%",
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "#ffcc00",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#ffcc00",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <IdcardFilled style={{ color: "white", fontSize: 40 }}></IdcardFilled>
        <Text
          style={{
            color: "white",
            marginLeft: 20,
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {props.Title}
        </Text>
      </div>
      <div style={{ width: "100%", padding: 5 }}>
        <Text
          style={{
            fontSize: "20px",
          }}
        >
          {props.txt}
        </Text>
      </div>
    </div>
  );
};
export default Credentials;
