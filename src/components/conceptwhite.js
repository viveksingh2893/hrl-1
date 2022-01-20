import {Menu,Layout,Button,Image,Form, Typography,Col, Input, Alert} from 'antd'
import axios from 'axios';

import { useState } from 'react';

import '../App.less';
import '../assets/css/style.css'
import ipaddress from './url';

const ConceptW=(props)=>{
    const {Title,Text} =Typography
    
    const onFinish=async (values)=>{
      const ip=ipaddress
     const config={headers:{
       'content-type':'application/json'
     }}

      await axios.post(`${ip}api/contactus`,values,config)
      .then(response=>console.log(response.data)
      )
    }
    

    return(

     
      <div 
      style=
      {{display:'flex',
      flex:1,
      flexWrap:'wrap',
      justifyContent:'flex-start',
      alignItems:'center',
    
      overflow:'hidden',
      

     
      width:'80vw'}}>
      
      {/* <div style={{display:'flex',flex:1,
      flexBasis:200,
      justifyContent:'center',
      alignItems:'flex-end',
      border:'1px solid green'}}> */}
      <div style={{width:props.width>576?"39vw":'80vw',
        height:props.width>576?"26vw":'54vw'}}>
     <Image
        
        src={props.img}
     /></div>
 {/* </div>  */}
  {/* <div 
  style={{
    display: "flex",
    flex: props.flexsize,
    flexShrink: 1,
    flexBasis: 300,
    paddingLeft:'1vw',
    justifyContent: "flex-start",
    alignItem: "center",
    flexDirection: "column",
    
  }}>   */}
   {props.title=='mith.ai'||props.title=='skybridge'||props.title=='dhara'? 
   <div style={{position:'relative',
  
  
   width:props.width>576?"39vw":'80vw',
   height:props.width>576?"26vw":'54vw'}}>
     <Image
     
        
        preview={false}
        style={{objectFit:'cover'}}
       
        src={props.img2}
     />
      <Button onClick={props.navigation} 
       className='homebtn'
       block
       type='primary'
       size='large'
      >
       <Title level={5}>{props.b4title}</Title>
    </Button>
     </div>:
     <div  style={{position:'relative',
     width:props.width>576?"39vw":'80vw',
     height:props.width>576?"26vw":"auto",
    
     
    }}>
       <Title level={2} style={{display:'flex',justifyContent:'flex-start',marginLeft:20}}>
      {props.title.toUpperCase()}
     </Title>
     {props.title==='Contact Us'?
     <div style={{margin:20}}>
       <Form 
       onFinish={onFinish}
       >

      
       <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
       >
          <Input bordered={false}size='large'
                style={{border:'none',backgroundColor:'#F1F0B1'}}
                placeholder='Name' 
               
            />
       </Form.Item>
       <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
          {type:'email',
        message:'Email is Not Valid '}
        ]}
       >
          <Input bordered={false}size='large'
                 style={{border:'none',backgroundColor:'#F1F0B1'}}
                placeholder='Email' 
               
            />
       </Form.Item>
        <Form.Item
            name="message"
        >
        <Input.TextArea bordered={false}size='large'  style={{border:'none',backgroundColor:'#F1F0B1'}}placeholder='Message'/>

        </Form.Item>
  
       <Button block htmlType='submit' size='large' style={{border:'none',backgroundColor:'#666666',color:'#ffffff'}}>Submit</Button>
       </Form>
     </div>:null}

      
     </div>
     
     
     
     }
     {/* <Title level={2} style={{display:'flex',justifyContent:'flex-start'}}>
      {props.title.toUpperCase()}
     </Title>
     <Text style={{display:'flex',justifyContent:'center'}}>
    {props.text}
     </Text>
   */}

     {/* <Col style={{display:'flex',
     alignItems:'center',
     justifyContent:'center',
     flexDirection:'column'}}>
     <Button onClick={props.navigation} 
      
       size='large'
       style={{border:'none',
       
       fontWeight:'400',
       margin:2,
       hover:{
         color:'#ffcc00'
       }
    
      
       }}>
        <Typography.Title level={4}>{props.b1title}</Typography.Title>
    </Button>
    <Button onClick={props.navigation} 
       
       size='large'
       style={{border:'none',
       
       fontWeight:'400',
       margin:2,
      
       }}>
       <Typography.Title level={4}>{props.b2title}</Typography.Title>
    </Button>
     <Button onClick={props.navigation} 
       
       size='large'
       style={{border:'none',
      
       fontWeight:'400',margin:2,
       
       }}>
         <Typography.Title level={4}>{props.b3title}</Typography.Title>
     
    </Button>
    <Button onClick={props.navigation} 
       
       size='large'
       style={{border:'none',
      
       fontWeight:'400',margin:2,
       backgroundColor:'#666666',
       color:'#ffffff'
       
       }}>
       {props.b4title}
    </Button>
     </Col> */}
  {/* </div>  */}
  </div>
  


)
}

export default ConceptW;