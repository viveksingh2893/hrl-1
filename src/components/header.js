import logo from "../assets/image/IMG 0.1A.png";
import { Menu, Layout,Drawer, Image } from "antd";

import {MenuOutlined}  from '@ant-design/icons'
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const Headbar=()=>{
    const [visible,setVisible]=useState(false)
    const {Header} = Layout;
    const [viewPortWidth,setWidth]=useState(0)
  
    const openDraw=()=>{
      setVisible(!visible)
    }
    const onClose = () => {
        setVisible(!visible)
       };
       useEffect(()=>{
         setWidth(window.innerWidth)
         window.addEventListener('resize',(e)=>{
          console.log("size",e.target)
          setWidth(window.innerWidth)
         })
         
     
       },[])
    return(

        <Header

        style={{
          display:'flex',
          height:'10vh',
          width:'100vw',
          flexDirection:'row',
          justifyContent:'space-evenly',
          position: 'fixed', zIndex: 1,

   
   
         
         
          alignItems: "center",
          backgroundColor: "#ffcc00",
        }}
      >
        <div style={{position:'relative',display:'flex',flex:1,alignItems:'center',zIndex:2}}>

       
        <Image
        height='10vh'
        width='50px'
       
        src={logo}
      
        />
         </div>
        {/* <div className='logo'>Hello</div> */}
        {/* <div style={{float:'left'}}>
          <h1>hi rapid lab</h1>
        </div> */}
        <div style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       {viewPortWidth>500? <NavMenu viewPortWidth={viewPortWidth}/>:
        <div style={{display:'flex',justifyContent:'flex-end'}}>
           <MenuOutlined  onClick={openDraw}style={{ fontSize: '32px',justifyContent: "flex-end",color: '#666666' }} /></div>
        }
          
        </div>
        <Drawer
         placement="right"
         closable={false}
         visible={visible}
         onClose={onClose}
      
        >
           <NavMenu viewPortWidth={viewPortWidth}/>


          </Drawer>
      </Header>
    )
}

export default Headbar