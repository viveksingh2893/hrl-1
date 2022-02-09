import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import {  Typography } from "antd";


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
          <Paragraph key={ind}>
            {item.description}
          </Paragraph>
        )

      })
    }else if(props.publication){
      return props.publication.map((item,ind)=>{
        return(
          <Paragraph key={ind}>
              {item.description}
          </Paragraph>
        )

      })
    }else if(props.event){
      return props.event.map((item,ind)=>{
        return(
          <Paragraph key={ind}>
              {item.description}
          </Paragraph>
        )

      })
    }else if(props.article){
      return props.article.map((item,ind)=>{
        return(
          <Paragraph key={ind}>
              {item.description}
          </Paragraph>
        )

      })
    }else if(props.project){
      return props.project.map((item,ind)=>{
        return(
          <div key={ind}>
            <Title level={5}>{item.title}</Title>
          <Paragraph>
              {item.description}
          </Paragraph>
          </div>
        )

      })
    }else if(props.bio){
      return (
          <div >
          
          <Paragraph>
              {props.bio}
          </Paragraph>
          </div>
        )

      }else if(props.current){
        return (
            <div >
            
            <Paragraph>
                {props.current}
            </Paragraph>
            </div>
          )
  
        }else if(props.previous){
          return props.previous.map((item,ind)=>{
            return(
              <div key={ind}>
                
              <Paragraph>
                  {item.designation+' '+item.start_year+ ' to ' +item.end_year}
              </Paragraph>
              </div>
            )
    
          })
        }
    }
  
  return (
    <><Title level={4} style={{width:"100%"}}>
    {props.title}
  </Title>
    <div className="member-cred">  
   {showData()}
  </div></>
  );
};
export default Credentials;
