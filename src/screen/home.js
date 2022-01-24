import React,{useEffect, useState} from 'react'
import {  Layout,  Image, Typography,Divider } from "antd";
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css'
import axios from 'axios'
import ConceptW from "../components/conceptwhite";
import Loader from '../components/spinner';

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
  const data=await axios.get('http://65.1.254.51:6004/homepage'
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
          width:"100vw",

          display: "flex",
          flexDirection: "column",
        }}
      >
       
        <Image 
         width="100vw" 
         preview={false} src={homeData.image} />
        <Typography.Title level={4}style={{width:'80vw',marginTop:'2vw',marginBottom:'2vw',fontWeight:'400'}}>
        {homeData.what}
        </Typography.Title>
      
      {homeData.concept.map((val,index)=>{
  
        {
            return (
            <><ConceptW 
              width={width} 
              conceptname={val.conceptname} 
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
         title='Blog'
         text='Checkout our Blog colections.'
        flexsize={1}
        img={homeData.blog_image}
        btitle='Discover More'
         navigation={()=>{navigate('blog',{state:'mith'})}}/>
       <Divider/>
        <ConceptW width={width} title='News'
         text='Checkout our News collection.'
        flexsize={1}
        img={homeData.news_image}
        btitle='Discover More'
         navigation={()=>{navigate('news',{state:'mith'})}}/>
       <Divider/>
        <ConceptW width={width} title='Gallery'
         text='Checkout our Gallery colections.'
        flexsize={1}
        img={homeData.gallery_image}
        btitle='Discover More'
         navigation={()=>{navigate('gallery',{state:'mith'})}}/>
         <Divider/>
         <div id='contactus'>
        <ConceptW  width={width} title='Contact Us'
         text='Checkout our News collection.'
        flexsize={1}
        img={homeData.contact_image}
        btitle='Discover More'
         navigation={()=>{navigate('news',{state:'mith'})}}/>
         </div>
       
      </Content>
  );
}else{
  return(
    <Loader/>
    
  )

}}
export default Home;
