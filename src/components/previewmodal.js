import { Card, Typography, Button, Image, Divider, Row } from "antd";
import '../App.less'
import React, { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const PreviewModal = (props) => {
  const { Title, Text, Paragraph ,Link} = Typography;
  let TDate = new Date();

  const { title, keywords,url_source,source_title } = props.data();
  console.log(props,'@@@@')
  const keylist = keywords.split(",");
  // console.log(TDate);
  const textData = (content) => {
    return (
      <Paragraph
        className="body-text"
        copyable={false}
      >
        {content}
      </Paragraph>
    );
  };
  const imgData = ({ image, caption }) => {
    return (
      <div className='child2-preview-model'>
        <Image src={image} className='image-preview-model' />
        <Text style={{ textAlign: "start", fontWeight: "400",fontStyle:'italic' }}>
          {caption}
        </Text>
      </div>
    );
  };
  const vidData = (content) => {
    return (
      <div
        className="video-preview-model"
      >
        <iframe
          src={content}
          className='video-iframe'
        />
      </div>
    );
  };
  return (
    <div className='main-preview-model'>
      <div className="child1-preview-model">
        <Title level={2}style={{ textAlign: "left" }}>{title}</Title>
        <Text
          style={{ textAlign: "justify", fontWeight: "700", fontSize: "0.8rem" }}
        >
          By {props.author}
        </Text>
        <Text
          style={{ textAlign: "justify", fontWeight: "400",fontSize:'0.8rem' }}
        >
          {props.date
            ? `${
                months[props.date.getMonth()]
              } ${props.date.getDate()} ${props.date.getFullYear()}`
            : `${
                months[TDate.getMonth()]
              } ${TDate.getDate()} ${TDate.getFullYear()}`}
        </Text>
        <Divider></Divider>
        {props.body.map((val, index) => {
          if (val.type == "text") {
            console.log(val, "values");
            return <div>{textData(val.content)}</div>;
          } else if (val.type == "image") {
            return (
              <div>
                {imgData({ image: val.image, caption: val.description })}
              </div>
            );
          } else if (val.type == "video") {
            return <div>{vidData(val.video)}</div>;
          }
        })}
        {url_source?<div style={{display:'flex'}}><Paragraph
        style={{ textAlign: "justify", fontSize: "1.2rem", color: "black" }}
        copyable={false}
      >Source : <a href={url_source} target="_blank" >
    {source_title}</a></Paragraph></div>:null}
    <Divider/>
        <Row>
          {keylist.map((value, index) => {
            return (
              <Button
                size="middle"
                style={{
                  fontWeight: "600",
                  border: "2px solid #666666",
                  margin: "0.2vw",
                }}
              >
                {value.toUpperCase()}
              </Button>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default PreviewModal;
