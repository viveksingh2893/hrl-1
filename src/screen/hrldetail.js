import React,{useEffect, useState} from 'react'
import {  Layout,  Image, Typography,Divider } from "antd";
import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css'
import axios from 'axios'
import ConceptW from "../components/conceptwhite";
import Loader from '../components/spinner';
import Title from 'antd/lib/skeleton/Title';

const HrlDetail = () => {
  const [width,setWidth]=useState(0)
  const [homeData, setHome]=useState()
  const {Content} = Layout;
 
 
  const navigate=useNavigate()
  // useEffect(()=>{
  //   window.location.href='#contactus'
    

  // },[])
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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
        
        <Typography.Title level={1} style={{width:'80vw',marginTop:'20px'}}>About us</Typography.Title>
        
        <Typography.Title level={4}style={{width:'80vw',marginTop:0,marginBottom:'2vw',fontWeight:'400'}}>
        {homeData.what}
        </Typography.Title>       
      </Content>
  );
}else{
  return(
    <Loader/>
    
  )

}}


export default HrlDetail