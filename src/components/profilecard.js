import React from "react";
import "../App.less";
import { Card,Image } from "antd";

const ProfileCard = (props) => {
  const { Meta } = Card;
 
  return (
    <div>
      <a>
    <div className="profilecard" onClick={props.action}>
     <img alt={props.avatar} src={props.avatar}
      />
    </div>
    </a>
    </div>
    // <Card
    //   hoverable
    //   
    //   style={{width:props.viewPortWidth>576?'18vw':'80vw '}}
    //   cover={<Image alt="example" src={props.avatar}
    //   preview={false}
    //   //  height={props.viewPortWidth>576?'18vw':'80vw '}
    //   //  width={props.viewPortWidth>576?'18vw':'80vw '} 
    //    />}
    // >
    // <Meta
    //     style={{ textAlign: "center" }}
    //     title={props.name}
    //   />
    // </Card>
  );
};

export default ProfileCard;
