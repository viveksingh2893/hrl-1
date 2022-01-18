import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import { LeftOutlined, RightOutlined, IdcardFilled } from "@ant-design/icons";

const Credentials = (props) => {
  const { Title,Paragraph } = Typography;
  const showData=()=>{

    if(props.education){
      return props.education.map((item,ind)=>{
        return(
          <Paragraph>
            {item.degree+' '+item.university+' '+item.year}
          </Paragraph>
        )

      })
    }else if(props.patent){
      return props.patent.map((item,ind)=>{
        return(
          <Paragraph>
            {item.description}
          </Paragraph>
        )

      })
    }else if(props.publication){
      return props.publication.map((item,ind)=>{
        return(
          <Paragraph>
              {item.description}
          </Paragraph>
        )

      })
    }else if(props.project){
      return props.project.map((item,ind)=>{
        return(
          <div>
            <Title level={5}>{item.title}</Title>
          <Paragraph>
              {item.description}
          </Paragraph>
          </div>
        )

      })
    }else if(props.bio){
      return (
          <div>
          
          <Paragraph>
              {props.bio}
          </Paragraph>
          </div>
        )

      }else if(props.current){
        return (
            <div>
            
            <Paragraph>
                {props.current}
            </Paragraph>
            </div>
          )
  
        }else if(props.previous){
          return props.previous.map((item,ind)=>{
            return(
              <div>
                
              <Paragraph>
                  {item.designation+' '+item.start_year+ ' to ' +item.end_year}
              </Paragraph>
              </div>
            )
    
          })
        }
    }
  
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
  
   {showData()}
  </div>
  );
};
export default Credentials;
