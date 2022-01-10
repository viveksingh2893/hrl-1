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
import { useParams } from "react-router-dom";


const Picpage = () => {
  const params=useParams();
  
  const idgallery=params.id;
  console.log(idgallery,'aaaaaaaa')
  const [viewPortWidth, setWidth] = useState(0);
  const [newdata, setNewData] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const { Title, Text } = Typography;
  const prevdata = () => {
    console.log("Fetch previous member");
    setNewData({image:`https://picsum.photos/id/${idgallery+100}/300/200`})
  };

  const nextdata = () => {
    console.log("Fetch next member");
  };

  const picdata = {
    location: "Hyderabad, India",
    avatar: `https://picsum.photos/id/${idgallery}/600/400`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    kword:
      "hello,my frnd, enjoy,nature ",
  };
  

  return (
    <div className="container-layout">
      <Wordcloud data={['hjh','ghgh','hggj']}></Wordcloud>
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
              picdata.kword.split(',').map((item,indx)=>{

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
                  }}
                  onClick={prevdata}>
                
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
                }}
                onClick={nextdata}>
               
        </Button>



      </div>
      <Divider></Divider>
    </div>
  );
};

export default Picpage;
