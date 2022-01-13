import React,{useEffect, useState} from 'react'
import { Menu, Layout, Button, Image, Typography,Divider } from "antd";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/image/IMG 0.2A.jpg";
import img2 from '../assets/image/IMG 0.3.jpg'
import img3 from "../assets/image/IMG 0.4.jpg";
import img4 from "../assets/image/IMG 0.5.jpg";
import img5 from "../assets/image/blog.jpg";
import img6 from "../assets/image/IMG 0.6.jpg";
import img7 from "../assets/image/GALLERY-Icon.png";
import '../assets/css/style.css'
import axios from 'axios'

import ConceptW from "../components/conceptwhite";
import ConceptB from "../components/conceptY";

const homedata = {
  'posterurl':img1,
  'detail':'Hi Rapid Lab proposes to shift the primary health care model from  “people coming to a facility for treatment” to “@ home primary health care service” model. The origin of the present primary health care system (PHCS) dates back to the 1940’s Bhore Committee report recommendations. Although several revisions have been made over the period of years, the concept of “people coming to a facility for treatment” has largely remained unchanged and PHC based service remains synonymous with “ inaccessibility, inadequacy and inefficiency”. Hi Rapid Lab believes a local person trained with our AI led, smart mobility supported digital platform can deliver universal primary health care service "@ home" and make primary health care "accessible, adequate and efficient". ',
  'concept':['mith.ai','dhara','skybridge'],
  'mith.ai':{'image':img2,'detail':'MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi RapidLab for providing @ home universal primary health care.MITH.AI has two components –the DIGITAL HEALTH component and the MOBILITY component.'},
  'dhara':{'image':img3,'detail':'MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi RapidLab for providing @ home universal primary health care.MITH.AI has two components –the DIGITAL HEALTH component and the MOBILITY component.'},
  'skybridge':{'image':img4,'detail':'MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi RapidLab for providing @ home universal primary health care.MITH.AI has two components –the DIGITAL HEALTH component and the MOBILITY component.'},
};

const Home = () => {
  const [width,setWidth]=useState(0)
  const { Sider, Content, Header, Footer } = Layout;
 
  const navigate=useNavigate()
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
  const data=await axios.get('http://192.168.29.198:8000/homepage'
    ).then(response=>response.data).catch(error=>console.log(error))

    console.log(data)
  
  }

  useEffect(()=>{

    getData();
  },[])


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
         preview={false} src={homedata.posterurl} />

        
    
        <Typography.Title level={4}style={{width:'80vw',margin:10,fontWeight:'400'}}>
        {homedata.detail}
        </Typography.Title>
        <Divider/>
      {homedata.concept.length>0?homedata.concept.map((val,index)=>{
        console.log(index,val,homedata[val])
        {
            return (
            <><ConceptW 
              width={width} 
              title={val} 
              // text={homedata[val].detail} 
              img={homedata[val].image} 
              b1title='What'
              b2title='Demo'
              b3title='How'
              b4title='Read More'
              
              flexsize={4} 
              navigation={() => { navigate('concept#demo', { state: 'mith' }); } } />
              <Divider /></> 
            )
     
        }
        
      }):null}
      
        <ConceptW width={width}  
         title='Blog'
         text='Checkout our Blog colections.'
        flexsize={1}
        img={img5}
        btitle='Discover More'
         navigation={()=>{navigate('blog',{state:'mith'})}}/>
       <Divider/>
        <ConceptW width={width} title='News'
         text='Checkout our News collection.'
        flexsize={1}
        img={img6}
        btitle='Discover More'
         navigation={()=>{navigate('news',{state:'mith'})}}/>
       <Divider/>
        <ConceptW width={width} title='Gallery'
         text='Checkout our Gallery colections.'
        flexsize={1}
        img={img7}
        btitle='Discover More'
         navigation={()=>{navigate('gallery',{state:'mith'})}}/>
         <Divider/>
        <ConceptW width={width} title='Contact Us'
         text='Checkout our News collection.'
        flexsize={1}
        img={img6}
        btitle='Discover More'
         navigation={()=>{navigate('news',{state:'mith'})}}/>
       
      </Content>
  );
};
export default Home;
