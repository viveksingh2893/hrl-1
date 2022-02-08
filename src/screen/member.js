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
import axios from 'axios'
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import Resume from "../components/resume";
// import PDFDownloadLink from '@react-pdf/renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";
import Loader from "../components/spinner";
import ipaddress from "../components/url";

const Member = () => {
  
  const { Title, Text } = Typography;
  const memberData=useLocation()
  const {id,membername} =useParams()
  const [viewPortWidth, setWidth] = useState(0);
  const [currentdata,setCurrent]=useState()
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
    setIndx(currentIndex-1)
    
  }

  };
  
  //GET request to fetch member data//
  const getData= async ()=>{
    setCurrent()
    const data=await axios.get(`${ipaddress}api/team/${id}/${membername}`
      )
      .then(response=>response.data)
      .catch(error=>console.log(error))
      console.log("memberData.............",data)
      setCurrent(data)
      
    
    }
    
  
    useEffect(()=>{
      if(membername){
       
        getData();
        window.scrollTo(0,0)

      }
      
      // return ()=>{setHome()}
    },[membername])

  const nextdata = () => {
    if (currentIndex<memberData.state.result.length-1){
        setIndx(currentIndex+1)
    // setCurrent(result)
  }

  };

  if(currentdata){
    return (<div>
  <div style={{
      width: "100vw",
      marginTop:'80px',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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
            <Title level={2} style={{color:'#333333'}}>{currentdata.name}</Title>
            <Text style={{color:'#333333'}}>
              <b>Designation:</b> {currentdata.designation}
            </Text>
            <Text>
              <b>Email:</b> {currentdata.email}
            </Text>
            <Text>
              <b>Phone Number:</b> {currentdata.contact}
            </Text>
            {currentdata.linkedin?<Text>
              <b>LinkedIn Profile:</b> <a href={currentdata.linkedin}>{currentdata.linkedin}</a>
            </Text>:<></>}
            <Divider></Divider>
            <PDFDownloadLink style={{
              border:'none',
              fontWeight:'600',
              backgroundColor:'#666666',
              padding:'10px',
            color:'#ffffff'}}
             document={<Resume data={currentdata} />} fileName="resume.pdf">{<DownloadOutlined />} Download CV</PDFDownloadLink>
          {/* <Button onClick={pdfDownload}
            style={{
              border:'none',
              
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
            flexBasis: 305,
            display: "flex",
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
           <NavLink to={`/member/${
          currentIndex==0?
          memberData.state.result[currentIndex].id 
          +`/${memberData.state.result[currentIndex].name}`
          :memberData.state.result[currentIndex-1].id 
          +`/${memberData.state.result[currentIndex-1].name}`}`}  
         state={{item:currentdata,
          result:memberData.state.result,
          index:currentIndex}}
          onClick={prevdata}
           >
        <Button 
              size='small'
                  type="primary"
                  icon={<LeftOutlined/>}
                  style={{
                    border:'none',
                    backgroundColor:currentIndex==0?'#c2c2c2':'#666666'
                  }}>
                
        </Button>
        </NavLink>
        <NavLink to={`/member/${
          currentIndex==memberData.state.result.length-1?
          memberData.state.result[currentIndex].id +
          `/${memberData.state.result[currentIndex].name}`
          :memberData.state.result[currentIndex+1].id +
          `/${memberData.state.result[currentIndex+1].name}`}`}  
         state={{item:currentdata,result:memberData.state.result,index:currentIndex}}
          onClick={nextdata}
           >
        <Button 
               
                size='small'
                type="primary"
                icon={<RightOutlined/>}
                style={{
                    border:'none',
                    backgroundColor:currentIndex==memberData.state.result.length-1?'#c2c2c2':'#666666'
                }}>
               
        </Button>
       
        </NavLink>


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
        <Divider></Divider>
        <Credentials title="EVENTS" event={currentdata.event} />
        <Divider></Divider>
        <Credentials title="ARTICLES" article={currentdata.article} />
         {/* <Divider></Divider>
        <Credentials title="EVENTS" txt={currentdata.event} />
         <Divider></Divider>
        <Credentials title="ARTICLES" txt={currentdata.art} /> */}
         
      </div>
    </div></div>
  );}else{return(
    <Loader/>
  )}
};
export default Member;
