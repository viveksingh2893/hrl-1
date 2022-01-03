import React,{useEffect} from 'react'
import { Menu, Layout, Button, Image, Typography } from "antd";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/image/IMG 0.2A.jpeg";
import img2 from '../assets/image/IMG 0.4.png'
import img3 from "../assets/image/IMG 0.3.png";
import img4 from "../assets/image/Skybridge.png";
import img5 from "../assets/image/blog.jpg";
import img6 from "../assets/image/news.jpg";
import img7 from "../assets/image/GALLERY-Icon.png";
import '../assets/css/style.css'

import ConceptW from "../components/conceptwhite";
import ConceptB from "../components/conceptblue";

const Home = () => {
  const { Sider, Content, Header, Footer } = Layout;
  const navigate=useNavigate()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const getData= async ()=>{
  //  const result=await fetch('http://192.168.29.54:8000/homepage',{
  //   mode: 'no-cors',
  //     method: 'GET',
  //   }
  //   )
   
  //   console.log(result)
  }

  // useEffect(()=>{

  //   getData();
  // },[])


  return (
    <Content
      style={{
        
        alignItems: "center",
        justifyContent: "center",
        marginTop:'calc(20px + 2.5vw )',
        width:"100vw",

        display: "flex",
        flexDirection: "column",
      }}
    >
     
      <Image 
       width="100vw" 
       style={{border:'2px solid black'}} 
       preview={false} src={img1} />

      
  
      <h1 className="T1">
      Hi Rapid Lab proposes to shift the primary health care model from  “people coming to a facility for treatment” to “@ home primary health care service” model. The origin of the present primary health care system (PHCS) dates back to the 1940’s Bhore Committee report recommendations. Although several revisions have been made over the period of years, the concept of “people coming to a facility for treatment” has largely remained unchanged and PHC based service remains synonymous with “ inaccessibility, inadequacy and inefficiency”. Hi Rapid Lab believes a local person trained with our AI led, smart mobility supported digital platform can deliver universal primary health care service "@ home" and make primary health care "accessible, adequate and efficient". 

      </h1>

    
     
      <ConceptW title="Mith.AI"  
      text='
      MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a 
      “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi Rapid
       Lab for providing @ home universal primary health care.MITH.AI has two components –
        the DIGITAL HEALTH component and the MOBILITY component.
        
'btitle='Read More'flexsize={4}img={img3}navigation={()=>{navigate('concept',{state:'mith'})}}/>
      <ConceptB title='Dhara'
      text='MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi Rapid Lab for providing @ home
       universal primary health care.MITH.AI has two components – the DIGITAL HEALTH component and the MOBILITY component.'
       flexsize={4}
      img={img2}
      btitle='Read More'
      navigation={()=>{navigate('concept',{state:'mith'})}}/>
      <ConceptW  title='SkyBridge'
      text='MITH.AI or Mass Modular Integrated Transformational Health Care through Artificial Intelligence is a “comprehensive, convergent and customized” (3C) digital platform designed and developed at PHFI Hi Rapid Lab for providing @ home
      universal primary health care.MITH.AI has two components – the DIGITAL HEALTH component and the MOBILITY component.'
      flexsize={4}
     img={img4}
     btitle='Read More'
      navigation={()=>{navigate('concept',{state:'mith'})}} />
      <ConceptB  
       title='Blog'
       text='Checkout our Blog colections.'
      flexsize={1}
      img={img5}
      btitle='Discover More'
       navigation={()=>{navigate('blog',{state:'mith'})}}/>
      <ConceptW title='News'
       text='Checkout our News collection.'
      flexsize={1}
      img={img6}
      btitle='Discover More'
       navigation={()=>{navigate('news',{state:'mith'})}}/>
      <ConceptB title='Gallery'
       text='Checkout our Gallery colections.'
      flexsize={1}
      img={img7}
      btitle='Discover More'
       navigation={()=>{navigate('gallery',{state:'mith'})}}/>
    </Content>
  );
};
export default Home;
