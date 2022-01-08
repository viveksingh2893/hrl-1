import React from "react";
import "../App.less";
import Credentials from "../components/credentials";
import { useEffect, useState } from "react";
import { Divider, Image, Typography } from "antd";
import { Text } from "react";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/lib/skeleton/Paragraph";

const Member = () => {
  const { Title, Text,Paragraph } = Typography;
  const memberdata = {
    image:
    "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    membname: "ROHIT JHA",
    desig: "Researcher",
    email: "researcher@hirapidlab.com",
    phone: "+xx-xxxxxxxxxx",
    bio: `Contact dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    edu: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pres: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    prev: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    proj: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pat: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    pub: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    eve: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    art: `Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.Dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Utenim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
  };
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  const prevdata = () => {
    console.log("Fetch previous member");
  };

  const nextdata = () => {
    console.log("Fetch next member");
  };

  return (
    <div style={{
      width: "100vw",
      // backgroundColor: "orange",
      marginTop:'80px',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      // flexWrap: "wrap",
      alignItems: "center",
      
    }}>
      <div style={{display:'flex',
      width:'80vw',
      flexWrap:'wrap',
      paddingTop:'1vw',
      justifyContent:'flex-start',
      alignItems:'flex-start',
     
      flexDirection:'row'}}
        
      >
 
          
         
           
          <div
            style={{
             
              flexbasis:'300px',
              
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems:'flex-start'
              
              
            }}
          > 
          <Image
          src={memberdata.image}
          width={`${viewPortWidth > 500 ? "20vw" : "75vw"}`}
        />
          
          </div>
          <div
            style={{
              flexbasis:'300px',
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "white",
              marginLeft:'1vw',
             
              // borderRadius: "1vw",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              // padding: 10,
            }}
          >
            <Title level={2} style={{fontFamily:'Calibri',color:'#333333'}}>{memberdata.membname}</Title>
            <Text style={{fontFamily:'Calibri',color:'#333333'}}>
              <b>Designation:</b> {memberdata.desig}
            </Text>
            <Text>
              <b>Email:</b> {memberdata.email}
            </Text>
            <Text>
              <b>Phone Number:</b> {memberdata.phone}
            </Text>
            <Divider></Divider>
          <Button
            style={{
              border:'none',
              fontFamily:'Calibri',
              fontWeight:'600',
              backgroundColor:'#666666',
            color:'#ffffff'}}
            icon={<DownloadOutlined />}
            size="large" 
          >
            Download CV
          </Button>
          </div>
          
              <Divider/>
        <div
          style={{
            
         
          
            // flexShrink: 1,
            flexBasis: 305,
            display: "flex",
            // justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
        
          }}
        >
          
       
         
        </div>
      </div>
      <div
        style={{
          width: "80vw",
          justifyContent: "center",
          alignItems: "flex-start",
      
          display: "flex",
          flexDirection: "column",
                  }}
      >
        
      
         <div style={{display:'flex',
         justifyContent:'flex-start',
         alignItems:'stretch',
         
         
        
         }}>
         <div 
         style={{
            display:'flex',
            width:viewPortWidth > 500 ? "20vw" : "80vw",
            
            justifyContent:'space-between',
            alignItems:'flex-start',
           
         }}>
        <Button 
                  size='small'
                  type="primary"
                  icon={<LeftOutlined/>}
                  style={{
                    border:'none',
                    backgroundColor:'#666666'
                  }}>
                
        </Button>
        <Button 
                size='small'
                type="primary"
                icon={<RightOutlined/>}
                style={{
                    border:'none',
                    backgroundColor:'#666666'
                }}>
               
        </Button>



      </div>
      </div>
      <Divider></Divider>
       
        <Credentials title="BIOSKETCH" txt={memberdata.bio} />
          <Divider></Divider>
        <Credentials title="EDUCATION" txt={memberdata.edu} />
        <Divider></Divider>
        <Credentials title="PRESENT POSITIONS" txt={memberdata.pres} />
         <Divider></Divider>
        <Credentials title="PREVIOUS POSITIONS" txt={memberdata.prev} />
         <Divider></Divider>
        <Credentials title="PROJECTS" txt={memberdata.proj} />
         <Divider></Divider>
        <Credentials title="PATENTS" txt={memberdata.pat} />
         <Divider></Divider>
        <Credentials title="PUBLICATIONS" txt={memberdata.pub} />
         <Divider></Divider>
        <Credentials title="EVENTS" txt={memberdata.eve} />
         <Divider></Divider>
        <Credentials title="ARTICLES" txt={memberdata.art} />
         
      </div>
    </div>
  );
};
export default Member;
