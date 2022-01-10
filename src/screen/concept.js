import React, { useEffect } from "react";
import conceptimg from "../assets/image/IMG 2.1.png";
import "../App.less";
import '../assets/css/style.css'
import DATA from '../assets/jsn/data'
import { Image, Layout,List, Typography,Carousel, Divider } from "antd";
import ProfileCard from "../components/profilecard";

import Descard from "../components/descard";
import Videobox from "../components/videobox";
import Linkcard from "../components/linkcard";
import { useNavigate } from "react-router-dom";
import CaraImage from "../components/imageCarousel";



const Concept = () => {
  const galdata=[{
    href: "https://ant.design",
    name: `ant design part 1`,
    avatar: `https://picsum.photos/id/1/300/200`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  },{
    href: "https://ant.design",
    name: `ant design part 1`,
    avatar: `https://picsum.photos/id/1/300/200`,
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  },{
    href: "https://ant.design",
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
  console.log('data',newdata)
  

  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
    
  },[])

  

  return (

    <div style={{
       
        justifyContent: "center",
      
        background:'#fffbeb',
        display: "flex",
        flex:1,
        marginTop:80,
        alignItems:'center',
        flexDirection: "column",}}>
         
    
             <Image width="100vw"  preview={false} src={conceptimg} />

             <Descard level={3} txt={newdata.heading} /> 
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "flex-start",
            justifyContent: "center",
            alignItems:'center',
            
          }}
        >
          <Videobox width="80vw" height='40vw' link={data.video}></Videobox>
        </div>
        <Divider></Divider>
        <div
          style={{
            display: "flex",
            width: "80vw",
            marginRight:'10vw',
            marginLeft:'10vw',
            flexDirection: "row",
            // flexWrap:'wrap',
            justifyContent: "space-between",
            alignItems: "center",
           
            overflow:'auto',
            scrollbarWidth:0,
          
          
       
            
          }}
        >
         
          {newdata.why.map((item,indx)=>{
            return(
              <Linkcard
            action={() => {
              navigate("/");
            }}
            width="25vw"
            
           
            id={data.why[0].id}
            image={data.why[0].photo}
            title={item.heading}
            description={item.description}
          />

            )
          })}
        
        </div>
        <Divider></Divider>
        <div style={{display:'flex',width:'100vw',justifyContent:'center',alignItems:'center'}}>
        
        <Descard txt={data.what}></Descard>
        </div>
        <div
          style={{
            display: "flex",
    
            width: "80vw",
            justifyContent: "center",
            alignItems:'center',
            backgroundColor: "white",
            marginTop: "1vw",
          }}
        >
          <Image
            src={conceptimg}
            preview={false}
            style={{ width: "80vw", height: "30vw", objectFit: "cover" }}
          />
        </div>
        <Divider></Divider>
        <div style={{display:'flex',width:'100vw',justifyContent:'center',alignItems:'center'}}>
        <Descard txt={data.what}></Descard>
        </div>
        
        <div 
          style={{
            display: "flex",
            width: "80vw",
            flexDirection: "row",
            marginTop:'1vw',
            
            justifyContent: "space-between",
            alignItems: "center",
            overflow :'auto',
            scrollbarWidth:'none',
            
          }}
        >
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
        </div>

        
          <Divider></Divider>
    
        <div
          style={{
            // display: "flex",
            width: "80vw",
           alignItems:'center',
            justifyContent: "center",
            backgroundColor: "white",
                      }}

        >
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Descard txt={data.what}></Descard>
        </div>
        
          <Image
            src={conceptimg}
            preview={false}
            style={{ width: "80vw", objectFit: "cover" ,marginTop:'1vw'}}
          />
        </div>
      
        <Divider></Divider>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
       
        
        <Descard txt={data.what}></Descard>
        
        <div
          style={{
            display: "flex",
            flexDirection:'column',
            width: "80vw",
            marginTop:'1vw',
            
            justifyContent: "center",
          
          }}
        >
       
        
          <Image
            src={conceptimg}
            preview={false}
            style={{ width: "80vw"}}
          />
         </div>
        
         </div>
         <Divider></Divider>
        <div 
        style={{display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'}}>
       
        
        <Descard txt={data.what}></Descard>
        
        <div
          style={{
            display: "flex",
            flexDirection:'column',
            width: "80vw",
            marginTop:'1vw',
            
            justifyContent: "center",
          
          }}
        >
      <List
 
      grid={{
        gutter:16,
        xs:1,
      sm:1,
      md:3,
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
              navigate("/picpage");
            }}
     ></ProfileCard>
   </List.Item>
 )}
/>

         </div>
        
         </div>
      </div>)
  
};

export default Concept;
