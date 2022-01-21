import {Menu,Layout,Button,Image,Form, Typography,Col, Input, Alert} from 'antd'
import axios from 'axios';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../App.less';
import '../assets/css/style.css'
import ipaddress from './url';

const ConceptW=(props)=>{
    const {Title,Text} =Typography
    const[visible,setVisible]=useState(false)
    const handleClose=()=>{
      setVisible(!visible)
    }
    
    const onFinish=async (values)=>{
      const ip=ipaddress
     const config={headers:{
       'content-type':'application/json'
     }}

      await axios.post(`${ip}api/contactus`,values,config)
      .then(response=>{
        if (response.status==200){
          setVisible(!visible)
          console.log('.....................')
        

        }
      })
        
      
      // <Alert
      //   message="Alert Message Text" type="success" closable afterClose={handleClose}

      //   />})
     
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
      <div style={{width:props.width>576?"39vw":'80vw',
        height:props.width>576?"26vw":'54vw'}}>
     <Image
        src={props.img}
     />
     </div>

   {props.conceptname? 
   <div style={{position:'relative',
  
  
   width:props.width>576?"39vw":'80vw',
   height:props.width>576?"26vw":'54vw'}}>
     <Image
        preview={false}
        style={{objectFit:'cover'}}
        src={props.img2}
     />
      <Button  
       className='homebtn'
       block
       type='primary'
       size='large'
      >
      <NavLink to={`/concept/${props.conceptname}`}><Title level={5}>{props.b4title}</Title></NavLink> 
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
       {visible?<Alert 
            message="We will in touch soon, thank you" type="success" closable afterClose={handleClose}
              />:null}
      
     </div>:null}

      
     </div>
     
     
     
     }
     

  
  </div>
  


)
}

export default ConceptW;