import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { Divider, Row } from "antd";
import { Image, Typography } from "antd";
import { Text } from "react";
import { Button,List} from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";


const Picpage = () => {
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const { Title, Text } = Typography;
  const prevdata = () => {
    console.log("Fetch previous member");
  };

  const nextdata = () => {
    console.log("Fetch next member");
  };

  const onSearch = (value) => console.log(value);
  const data = [];
  const picdata = {
    location: "Hyderabad, India",
    avatar: `https://picsum.photos/id/45/600/400`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    kword:
      "We supply series design principles practical patterns ",
          date: "12/10/2020 9:30 AM",
  };
  const keywords = [];
  for (let i = 0; i < 21; i++) {
    data.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: `https://picsum.photos/id/${i}/600/400`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
    keywords.push({
      id: i,
      keyword: `word ${String(i)}`,
    });
  }

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      <Divider></Divider>
      <div style={{display:'flex',
      width:viewPortWidth > 500 ? "80vw" : "80vw",
      flexWrap:'wrap',
  
      justifyContent:'flex-start',
      alignItems:'flex-start',
      
     
      flexDirection:'row'}}
        
      >
 
          
         
           
          <div
            style={{
             
              flexbasis:'250px',
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems:'flex-start',
             
              
              
            }}
          > 
          <Image
          src={picdata.avatar}
          width={`${viewPortWidth > 500 ? "40vw" : "80vw"}`}
        />
          
          </div>
          <div
            style={{
              flexbasis:'400px',
              display: "flex",
              marginLeft:'0.5vw',
              
              width:viewPortWidth > 500 ? "20vw" :"80vw",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
              
             
              // borderRadius: "1vw",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // padding: 10,
            }}
          >
             <Text style={{fontWeight:'400',width:viewPortWidth > 500 ? "20vw" :"80vw"}}>
              Location
            </Text>
            <Text style={{width:viewPortWidth > 500 ? "20vw" :"80vw",fontWeight:'700',fontSize:'1.1rem'}}>
            {picdata.location}
            </Text>
            <Text >
               {picdata.description}
            </Text>
            <Divider/>
            <Text style={{fontWeight:'700',width:viewPortWidth > 500 ? "20vw" :"80vw"}}>
              KEYWORDS
            </Text >
          <Row >
              {
              picdata.kword.split(' ').map((item,indx)=>{

                return(
               
                  <Button  size='middle'
                  style={{
                  fontFamily:'Calibri',
                  fontWeight:'600',
                  border:'2px solid #666666',
                  margin:'0.2vw'
                  }}>
                  {item.toUpperCase()}
                  </Button>
                  
                )
              })
              
              }
              </Row>
           
         
        
          </div>
          
    
        <div
          style={{
            
         
          
            // flexShrink: 1,
            flexBasis: 405,
            display: "flex",
            // justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
        
          }}
        >
          
       
         
        </div>
      </div>
      <Divider></Divider>
      <div style={{display:'flex',width:viewPortWidth > 500 ? "20vw" : "80vw",justifyContent:'space-between'}}>
        <Button 
                  size='large'
                  type="primary"
                  icon={<LeftOutlined/>}
                  style={{
                  border:'none',
                  fontFamily:'Calibri',
                  fontWeight:'600',
                  alignItems:'center',
                  backgroundColor:'#666666'
                  }}>
                
        </Button>
        <Button 
                size='large'
                type="primary"
                 icon={<RightOutlined/>}
                style={{
                border:'none',
                fontFamily:'Calibri',
                fontWeight:'600',
                alignItems:'center',
                backgroundColor:'#666666'
                }}>
               
        </Button>



      </div>
      <Divider></Divider>
    </div>
  );
};

export default Picpage;
