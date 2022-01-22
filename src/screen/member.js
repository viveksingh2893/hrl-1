import React from "react";
import "../App.less";
import Credentials from "../components/credentials";
import { useEffect, useState } from "react";
import { Divider, Image, Typography } from "antd";
import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import Resume from "../components/resume";
// import PDFDownloadLink from '@react-pdf/renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";
const Member = () => {
  
  const { Title, Text,Paragraph } = Typography;

  const memberData=useLocation()
  console.log(memberData.state,'memeber screen')

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
  const [currentdata,setCurrent]=useState(memberData.state.item)
  const [currentIndex,setIndx]=useState(memberData.state.index)
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const pdfDownload1 = e => {
    e.preventDefault()
    let doc = new jsPDF("landscape", 'pt', 'A4');
    doc.html(document.getElementById('pdf-view'), {
      callback: () => {
        doc.save('test.pdf');
      }
    });
}
const pdfDownload=()=>{
  console.log('1');
 <PDFDownloadLink document={<Resume />} fileName="resume.pdf"></PDFDownloadLink>
}

  const prevdata = () => {
    
    console.log("index value......",currentIndex)
    if(currentIndex>0){
    var result=memberData.state.result[currentIndex-1]
    setIndx(currentIndex-1)
    
    console.log("result...........",result)
    setCurrent(result)
  }

  };

  const nextdata = () => {
    console.log("Fetch next member");
    
    console.log("index value......",currentIndex)
    if (currentIndex<memberData.state.result.length-1){

   
    var result=memberData.state.result[currentIndex+1]
    setIndx(currentIndex+1)
    
    console.log("result...........",result)
    setCurrent(result)
  }

  };

  return (<div>
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
          src={currentdata.image}
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
            }}
          >
            <Title level={2} style={{fontFamily:'Calibri',color:'#333333'}}>{currentdata.name}</Title>
            <Text style={{fontFamily:'Calibri',color:'#333333'}}>
              <b>Designation:</b> {currentdata.designation}
            </Text>
            <Text>
              <b>Email:</b> {currentdata.email}
            </Text>
            <Text>
              <b>Phone Number:</b> {currentdata.contact}
            </Text>
            <Divider></Divider>
            <PDFDownloadLink style={{
              border:'none',
              fontFamily:'Calibri',
              fontWeight:'600',
              backgroundColor:'#666666',
              padding:'10px',
            color:'#ffffff'}}
             document={<Resume data={currentdata} />} fileName="resume.pdf">{<DownloadOutlined />} Download CV</PDFDownloadLink>
          {/* <Button onClick={pdfDownload}
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
          </Button> */}
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
            width:viewPortWidth > 500 ? "20vw" : "85vw",
            
            justifyContent:'space-between',
            alignItems:'flex-start',
           
         }}>
        <Button 
              onClick={prevdata}
              size='small'
                  type="primary"
                  icon={<LeftOutlined/>}
                  style={{
                    border:'none',
                    backgroundColor:currentIndex==0?'#c2c2c2':'#666666'
                  }}>
                
        </Button>
        <Button 
                onClick={nextdata}
                size='small'
                type="primary"
                icon={<RightOutlined/>}
                style={{
                    border:'none',
                    backgroundColor:currentIndex==memberData.state.result.length-1?'#c2c2c2':'#666666'
                }}>
               
        </Button>



      </div>
      </div>
      <Divider></Divider>
       
        <Credentials title="BIOSKETCH" bio={currentdata.bio_sketch} />
          <Divider></Divider>
        <Credentials title="EDUCATION" education={currentdata.education} />
        <Divider></Divider>
        <Credentials title="PRESENT POSITIONS" current={currentdata.current_position} />
         <Divider></Divider>
        <Credentials title="PREVIOUS POSITIONS" previous={currentdata.preposition} />
         <Divider></Divider>
        <Credentials title="PROJECTS" project={currentdata.project} />
         <Divider></Divider>
        <Credentials title="PATENTS" patent={currentdata.patent} />
         <Divider></Divider>
        <Credentials title="PUBLICATIONS" publication={currentdata.publication} />
         {/* <Divider></Divider>
        <Credentials title="EVENTS" txt={currentdata.event} />
         <Divider></Divider>
        <Credentials title="ARTICLES" txt={currentdata.art} /> */}
         
      </div>
    </div></div>
  );
};
export default Member;
