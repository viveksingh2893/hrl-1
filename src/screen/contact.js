import React, { useEffect,useState } from "react";
import axios from 'axios'
import "../App.less";
import '../assets/css/style.css'
import { Image,List, Typography, Divider, Menu ,Descriptions} from "antd";

import Descard from "../components/descard";
import Videobox from "../components/videobox";
import Loader from "../components/spinner";
import ipaddress from '../components/url';
import Paragraph from "antd/lib/typography/Paragraph";
import Mapbox from "../components/Mapbox";

const Contact = () => {
  const [hrldata,setData]=useState()
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  const {Title,Text}=Typography
  const getData= async ()=>{
    const data=await axios.get(`${ipaddress}hrldetail`
      ).then(response=>response.data).catch(error=>console.log(error))
  
      console.log("...........data",data)
      setData(data)
    
    }
  
    useEffect(()=>{
  
      getData();
      window.scrollTo(0,0)
    },[])

  

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  console.log('data',hrldata)
  
  // useEffect(()=>{
  //   window.scrollTo(0,0)
    
  // },[])
const mapData=[{"image": "https://hrl-assets.s3.ap-south-1.amazonaws.com/media/images/IMG00.2A.jpeg",
"id": 53,
"longitude": "78.2458",
"latitude": "17.2049"}]
  
  if (hrldata==undefined){
    return (
      <Loader/>
    )

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
          <Divider/>
        <div id='location' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Location</Title>
            <Descard level={3} txt="Hi Rapid Lab Private Limited" />
            <Descard level={3} txt="Indian Institute of Public Health Laboratories" />
            <Descard level={3} txt={hrldata.location} />
            <Descard level={3} txt="Hyderabad - 500030" />
            <Descard level={3} txt="Telangana, INDIA" />
          </div><Divider/>
          <div id='map' className='conceptcls'>
          <div className='sectiontext'>
          <Title>Map</Title>
          <Mapbox data={mapData}></Mapbox>
          </div></div>
          <Divider/>
          <div id='email' className='conceptcls'>
          <div className='sectiontext'>
          <Title>Email</Title>
          <Descard level={3} txt="Email : contact@hirapidlb.com" />
          </div></div>
        </div>
        <Divider ></Divider>
      </div>)}
  
};

export default Contact;
