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


const HrlDetail = () => {
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
          <div 
          style={{display:'flex',position:'fixed',
          zIndex:'2',
          top:80,
          right:'0vw',
          }}>
           <Menu 
           mode='inline'
           >

             <Menu.SubMenu
             key="sub1"
             >
             <Menu.Item 
             onClick={()=>{
               window.location='#about'
             }}>
              About

             </Menu.Item>
             <Menu.Item
             onClick={()=>{
              window.location='#progress'
            }}>
             Progress

             </Menu.Item>

             <Menu.Item
             onClick={()=>{
              window.location='#progressyearly'
            }}>
               Progress Yearly

             </Menu.Item>

             <Menu.Item
              onClick={()=>{
              window.location='#labspace'}}
              >
               Lab Space

             </Menu.Item>
             <Menu.Item
              onClick={()=>{
              window.location='#reg'}}>
              Registrations 

             </Menu.Item>
             <Menu.Item
                onClick={()=>{
                window.location='#location'}}
             >
              Location

             </Menu.Item>
             </Menu.SubMenu>
             
           </Menu>
          </div>
        <div id='about' className='conceptcls'>
          <div className='sectiontext'>
            <Title>About</Title>

            <Descard level={3} txt={hrldata.about} /> 
            </div>

        </div>
        <Divider ></Divider>   
        <div  
        id='progress'
        className='conceptcls'
        > 
        <div className='sectiontext'>
            
          <Title >Progress</Title>
          <Descard txt={hrldata.progress_text1}/>
          <Image
                  src={hrldata.progress_image1}
                  preview={false}
                  style={{ width: "60vw", objectFit: "cover",marginTop:5 }}
                />
          <Descard txt={hrldata.progress_text2}/>
          <Image
                  src={hrldata.progress_image2}
                  preview={false}
                  style={{ width: "60vw", objectFit: "cover",marginTop:5 }}
                />
          <Descard txt={hrldata.progress_text3}/>
          <Descard txt={hrldata.progress_text4}/>
          <Descard txt={hrldata.progress_text5}/>
          <Image
                  src={hrldata.progress_image3}
                  preview={false}
                  style={{ width: "60vw", objectFit: "cover",marginTop:5 }}
                />
          <Descard txt={hrldata.progress_text6}/>
          <Descard txt={hrldata.progress_text7}/>
          <Descard txt={hrldata.progress_text8}/>
          <Videobox width="60vw"  link={hrldata.video_url}/>
          <Descard txt={hrldata.progress_text9}/>
          <Descard txt={hrldata.progress_text10}/>
          <Descard txt={hrldata.progress_text11}/>
          <Image
                  src={hrldata.progress_image4}
                  preview={false}
                  style={{ width: "60vw", objectFit: "cover",marginTop:5 }}
                />
        </div>
        </div>
        <Divider></Divider>
        <div id='progressyearly' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Progress Yearly</Title>
            <div
      style={{
        display: "flex",
        flexDirection:'column',
        width: "60vw",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop:5,
        marginBottom:5
      }}
    >
      
       {hrldata?     hrldata.progress.map((item,ind)=>{
        return(
          <div >
            <Title level={5}>{item.title}</Title>
          <Paragraph>
              {item.subtext}
          </Paragraph>
          </div>
        )

      }):null}</div>
            </div>

        </div>
        <Divider ></Divider>
        <div id='labspace' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Lab Space</Title>
            <div 
          style={{
            display: "flex",
            width: "60vw",
            flexDirection: "row",
            marginTop:10,
            
            justifyContent: "space-between",
            alignItems: "center",
            overflow :'auto',
            
            
          }}
          
        >
            <Image preview={false} width='17vw'src={hrldata.lab_image1}/>
            <Image preview={false} width='17vw'src={hrldata.lab_image2}/>
            <Image preview={false} width='17vw'src={hrldata.lab_image3}/>
            </div></div>

        </div>
        <Divider ></Divider>
        {viewPortWidth<500?<div id='reg' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Registrations</Title>
            <div
      style={{
        display: "flex",
        flexDirection:'column',
        width: "60vw",
        alignItems: "center",
        justifyContent: "center",
        flexWrap:'wrap',
        marginTop:5,
        marginBottom:5,

      }}
    >
      <Descriptions layout="vertical" size='middle'bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} contentStyle={{fontSize:'1.1rem'}} labelStyle={{fontSize:'1.1rem'}}>
    <Descriptions.Item label="Name" >{hrldata.name}</Descriptions.Item>
    <Descriptions.Item label="Address">{hrldata.address}</Descriptions.Item>
    <Descriptions.Item label="GST Reg No">{hrldata.gst}</Descriptions.Item>
    <Descriptions.Item label="PAN No">{hrldata.pan}</Descriptions.Item>
    <Descriptions.Item label="Bank Name">{hrldata.bankname}</Descriptions.Item>
    <Descriptions.Item label="Account Name">{hrldata.accountname}</Descriptions.Item>
    <Descriptions.Item label="Account No">{hrldata.accountnum}</Descriptions.Item>
    <Descriptions.Item label="Branch Name">{hrldata.branchname}</Descriptions.Item>
    <Descriptions.Item label="IFSC code">{hrldata.ifsc}</Descriptions.Item>
    <Descriptions.Item label="SWIFT code">{hrldata.swift}</Descriptions.Item>
    <Descriptions.Item label="Bank Address">{hrldata.bankaddress}</Descriptions.Item>
    <Descriptions.Item label="Contact Rep." >{hrldata.contactrep}</Descriptions.Item>
  </Descriptions>
      </div>
           </div>

        </div>:<div id='reg' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Registrations</Title>
            <div
      style={{
        display: "flex",
        flexDirection:'column',
        width: "60vw",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap:'wrap',
        marginTop:5,
        marginBottom:5,

      }}
    >
      <Descriptions size='middle'bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} contentStyle={{fontSize:'1.1rem'}} labelStyle={{fontSize:'1.1rem'}}>
    <Descriptions.Item label="Name" >{hrldata.name}</Descriptions.Item>
    <Descriptions.Item label="Address">{hrldata.address}</Descriptions.Item>
    <Descriptions.Item label="GST Reg No">{hrldata.gst}</Descriptions.Item>
    <Descriptions.Item label="PAN No">{hrldata.pan}</Descriptions.Item>
    <Descriptions.Item label="Bank Name">{hrldata.bankname}</Descriptions.Item>
    <Descriptions.Item label="Account Name">{hrldata.accountname}</Descriptions.Item>
    <Descriptions.Item label="Account No">{hrldata.accountnum}</Descriptions.Item>
    <Descriptions.Item label="Branch Name">{hrldata.branchname}</Descriptions.Item>
    <Descriptions.Item label="IFSC code">{hrldata.ifsc}</Descriptions.Item>
    <Descriptions.Item label="SWIFT code">{hrldata.swift}</Descriptions.Item>
    <Descriptions.Item label="Bank Address">{hrldata.bankaddress}</Descriptions.Item>
    <Descriptions.Item label="Contact Rep." >{hrldata.contactrep}</Descriptions.Item>
  </Descriptions>
      </div>
           </div>

        </div>}
        <Divider ></Divider>
        <div id='location' className='conceptcls'>
          <div className='sectiontext'>
            <Title>Location</Title>
            <Descard level={3} txt="Hi Rapid Lab Private Limited" />
            <Descard level={3} txt="Indian Institute of Public Health Laboratories" />
            <Descard level={3} txt={hrldata.location} />
            <Descard level={3} txt="Hyderabad - 500030" />
            <Descard level={3} txt="Telangana, INDIA" />
          </div>

        </div>
        <Divider ></Divider>
      </div>)}
  
};

export default HrlDetail;
