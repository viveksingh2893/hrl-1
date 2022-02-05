import React from "react";
import "../App.less";
import { Card,Image } from "antd";

const ProfileCard = (props) => {
  const { Meta } = Card;
 
  return (
    <div>
      <a>
    <div style={{display:'flex',justifyContent:'center',alignItem:'center',
    
    width:120,height:120,overflow:'hidden'}}>
     <img alt={props.avatar} src={props.avatar}
     
      style={{objectFit:'contain'}}
      
      
      />
    </div>
    </a>
    </div>
    // <Card
    //   hoverable
    //   onClick={props.action}
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
