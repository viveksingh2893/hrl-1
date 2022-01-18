import React from "react";
import "../App.less";
import { Card,Image } from "antd";
import { useEffect, useState } from "react";

const ProfileCard = (props) => {
  const { Meta } = Card;
 
  return (
    <Card
      hoverable
      onClick={props.action}
      style={{width:props.viewPortWidth>576?'18vw':'80vw '}}
      cover={<Image alt="example" src={props.avatar}
       height={props.viewPortWidth>576?'18vw':'80vw '}
       width={props.viewPortWidth>576?'18vw':'80vw '} />}
    >
      <Meta
        style={{ textAlign: "center" }}
        title={props.name}
      //   description="This is the description. 
      //  I am the Tech Lead of the company."
      />
    </Card>
  );
};

export default ProfileCard;
