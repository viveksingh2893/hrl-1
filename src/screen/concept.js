import React, { useEffect,useState } from "react";
import conceptimg from "../assets/image/IMG 2.1.jpg";
import axios from 'axios'
import "../App.less";
import '../assets/css/style.css'
import DATA from '../assets/jsn/data'
import img2A from '../assets/image/IMG 2.2A.jpg'
import { Image, Layout,List, Typography,Carousel, Divider } from "antd";
import ProfileCard from "../components/profilecard";

import Descard from "../components/descard";
import Videobox from "../components/videobox";
import Linkcard from "../components/linkcard";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CaraImage from "../components/imageCarousel";
import Paragraph from "antd/lib/typography/Paragraph";



const Concept = () => {
  const [conceptData,setData]=useState()
  const galdata=[{
    id: 1,
    name: `ant design part 1`,
    avatar: `https://picsum.photos/id/1/300/200`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  },{
    id: 10,
    name: `ant design part 1`,
    avatar: `https://picsum.photos/id/1/300/200`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  },{
    id: 15,
    name: `ant design part 1`,
    avatar: `https://picsum.photos/id/1/300/200`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  }]
  const keywords=[]
  const data = {
    posterimage:'',
    what: `WHAT- ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
    video: "https://www.youtube.com/watch?v=ctJFwgh4yds",
    why: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "OP index as measure of Primary Health Care service uptake is 0.4 for India versus 13 for ad",
      },
    ],
    how: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    new: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    model: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    where: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
  };

  const navigate = useNavigate();
  const {Title}=Typography
  const {newdata}=DATA[0]
  const getData= async ()=>{
    const data=await axios.get('http://65.1.254.51:6004/concept/Dhara/'
      ).then(response=>response.data).catch(error=>console.log(error))
  
      console.log("...........data",data)
      setData(data)
    
    }
  
    useEffect(()=>{
  
      getData();
    },[])

  

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  console.log('data',conceptData)
  
  // useEffect(()=>{
  //   window.scrollTo(0,0)
    
  // },[])

  
  if (conceptData==undefined){
    return null

  }else{
  return (

    <div style={{
      
       
        justifyContent: "center",
      
        background:'#fffbeb',
        display: "flex",
        flex:1,
        marginTop:80,
        alignItems:'center',
        flexDirection: "column",}}>
          <div 
          style={{display:'flex',position:'fixed',
          zIndex:'2',
          top:100,
          left:0,
         
          justifyContent:'space-around',
          padding:10,
          
          flexDirection:'column',
          backgroundColor:'#ffcc'
          }}>
           
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#what'> What</a></Title>
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#demo'> Demo</a></Title> 
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#why'> Why </a></Title>
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#how'> How </a></Title>
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#new'> New </a></Title> 
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#model'> Model </a></Title>
            <Title style={{fontWeight:'400',fontFamily:'Calibri'}} level={4}><a href='#where'> Where </a></Title>

          </div>
         
    
             <Image width="100vw"  preview={false} src={conceptimg} />
        <div id='what' className='conceptcls'>
          <div className='sectiontext'>
            <Title>What</Title>

            <Descard level={3} txt={conceptData.what} /> 
            </div>

        </div>
        <Divider ></Divider>   
        <div  
        id='demo'
        className='conceptcls'
        > 
        <div className='sectiontext'>
            
          <Title >Demo</Title>
          <Videobox width="80vw" height='40vw' link={conceptData.video_url}></Videobox>
         
        </div>
        </div>
        <Divider></Divider>
        <div id='why'
        className='conceptcls'
        >
          <div className='sectiontext'>

         
          <Title>Why?</Title>
          
        <div
          style={{
            display: "flex",
            width: "80vw",
           
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            msOverflowStyle:'none',
            
          
            overflow:'hidden',
            scrollbarWidth:0,
          }}
        >
          
         
          {conceptData.why.map((item,indx)=>{
            return(
              <div>
                <Image width='25vw'src={item.image}/>
              </div>

            )
          })}
           </div>
        
        </div>
        </div>
        <Divider></Divider>
        <div className='conceptcls' id='how'>
        <Title >How?</Title>
        {conceptData.how.map((item,indx)=>{

          return(
            <div>
               <Descard txt={item.description}></Descard>
                <Image
                  src={item.image}
                  preview={false}
                  style={{ width: "80vw", objectFit: "cover",marginTop:'10px' }}
                />
            </div>
          )
        })}
       
       
        </div>
        <Divider></Divider>
        <div 
         className='conceptcls' id='new'
        >
          <Title >New</Title>
      
        
        <div 
          style={{
            display: "flex",
            width: "80vw",
            flexDirection: "row",
            marginTop:'1vw',
            
            justifyContent: "space-between",
            alignItems: "center",
            overflow :'auto',
            
            
          }}
          
        >{conceptData.new.map((item,indx)=>{
            return(
              <div>
                <Image width='25vw'src={item.image}/>
              </div>

            )
          })}
          
        </div>
        </div>
          <Divider></Divider>
          <div id='model'
          className="conceptcls"

        >
       
       
        <Title >Model</Title>
        {conceptData.model.map((item,index)=>{
          return(
            <div>
              <Descard txt={item.description}></Descard>
              <Image
                src={item.image}
                preview={false}
                style={{ width: "80vw", objectFit: "cover" ,marginTop:'1vw'}}
              />
              </div>
          )
        })}
       
        </div>
        <Divider></Divider>
        <div id='where'
          className="conceptcls"

        >
       
        
        <Title  >Where?</Title>
        {conceptData.where.map((item,index)=>{
          return(
            <div>
              <Descard txt={item.description}></Descard>
              <Image
                src={item.image}
                preview={false}
                style={{ width: "80vw", objectFit: "cover" ,marginTop:'1vw'}}
              />
              </div>
          )
        })}
        </div>
        <Divider></Divider>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       
        
        <div
         className='conceptcls'
        >
      <List
 
      grid={{
        gutter:16,
        xs:1,
      sm:1,
      md:2,
      lg:4
    }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 16,
      }}
      dataSource={galdata}
      renderItem={(item) => (
        <List.Item>
          <ProfileCard
            name={item.name}
            avatar={item.avatar}
            action={() => {
              navigate("/picpage",{state:{id:item.id}});
            }}
     ></ProfileCard>
   </List.Item>
 )}
/>

         </div>
        
         </div>
      </div>)}
  
};

export default Concept;
