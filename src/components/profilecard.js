import React from "react";
import "../App.less";
import { Card } from "antd";
import { useEffect, useState } from "react";

const ProfileCard = (props) => {
  const { Meta } = Card;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <Card
      hoverable
      onClick={props.action}
      cover={<img alt="example" src={props.avatar} height="180vw" />}
    >
      <Meta title={props.name} description="This is the description" />
    </Card>
  );
};

export default ProfileCard;
