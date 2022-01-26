import React,{useEffect, useState} from 'react'
import {  Layout,  Image, Typography,Divider } from "antd";
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css'
import axios from 'axios'
import ConceptW from "../components/conceptwhite";
import Loader from '../components/spinner';
import ipaddress from '../components/url';
const Home = () => {
  const [width,setWidth]=useState(0)
  const [homeData, setHome]=useState()
  const {Content} = Layout;
 
 
  const navigate=useNavigate()
  // useEffect(()=>{
  //   window.location.href='#contactus'
    

  // },[])
  useEffect(()=>{
    setWidth(window.innerWidth)
    window.addEventListener('resize',(e)=>{
     console.log("size",e.target)
     setWidth(window.innerWidth)
    })
  },[])
 
 
  const getData= async ()=>{
  const data=await axios.get(`${ipaddress}homepage`
    ).then(response=>response.data).catch(error=>console.log(error))
    console.log("homedata.............",data)
    setHome(data)
  
  }
  

  useEffect(()=>{

    getData();
    return ()=>{setHome()}
  },[])

  if (homeData){

  return (
      <Content
        style={{
          
          alignItems: "center",
          justifyContent: "center",
          marginTop:80,
          width:"calc(98vw - 3px)",

          display: "flex",
          flexDirection: "column",
        }}
      >
       
        <Image 
         width="100vw" 
         preview={false} src={homeData.image} />
        <Typography.Title 
        level={4}
        style={
          {width:'78vw',
          marginTop:'2vw',
          marginBottom:'2vw',
          textAlign:'justify',
          fontWeight:'400'}}>
        {homeData.what}
        </Typography.Title>
      
      {homeData.concept.map((val,index)=>{
  
        {
            return (
            <><ConceptW 
              width={width} 
              conceptname={'/concept/'+val.conceptname} 
              img={val.homepageimage1} 
              img2={val.homepageimage2}
             
              b4title='Read More'
              flexsize={4} 
               />
              <Divider /></> 
            )
     
        }
        
      })}
      
        <ConceptW width={width}  
        conceptname="/resource/blog"
        flexsize={1}
        img={homeData.blog_image1}
        img2={homeData.blog_image2}
        b4title='Discover More'
         />
       <Divider/>
        <ConceptW width={width} 
        conceptname="/resource/news"
        flexsize={1}
        img={homeData.news_image1}
        img2={homeData.news_image2}
        b4title='Discover More'
        />
       <Divider/>
        <ConceptW width={width} 
        conceptname="gallery"
        flexsize={1}
        img={homeData.gallery_image1}
        img2={homeData.gallery_image2}
        b4title='Discover More'
         navigation={()=>{navigate('gallery',{state:'mith'})}}/>
         <Divider/>
         <div id='contactus'>
        <ConceptW  width={width} title='Contact Us'
         text='Checkout our News collection.'
        flexsize={1}
        img={homeData.contact_image}
        b4title='Discover More'
         />
         </div>
       
      </Content>
  );
}else{
  return(
    <Loader/>
    
  )

}}
export default Home;
