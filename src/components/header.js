import logo from "../assets/image/logo.jpeg";
import { Layout, Drawer, Image } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { useNavigate } from "react-router-dom";



const Headbar=()=>{
    const [visible,setVisible]=useState(false)
    const {Header} = Layout;
    const [viewPortWidth,setWidth]=useState(0)
    const navigate=useNavigate()
  
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
      <div style={{ position: 'fixed', zIndex: 5 ,backgroundColor:'#ffffff'}}>
        {viewPortWidth>700?<div style={{width:'100vw',height:'2.5vh'}}>

          
        </div>:null}
        {viewPortWidth>700?<div 
        onClick={()=>navigate('/')}
        style={{position:'absolute',
        display:'flex',
        flex:1,
        zIndex:2,
        top:0,left:'10vw',border:'2vh solid #666666',background:'#666666'}}>

       
        <Image
        height='12vh'
        width='8vh'
        preview={false}
        style={{aspectRatio:1}}
        
       
        src={logo}
      
        />
         </div>:null}
       

      

      

      <Header
        style={{
          display: "flex",
          height: "80px",
          width: "100vw",

          flexDirection: "row",
          justifyContent: "space-evenly",

          alignItems: "center",
          backgroundColor: "#ffcc00",
        }}
      >
        {viewPortWidth <700? (
          <div
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              display: "flex",
              flex: 1,
              height:80,
              zIndex: 2,
              top: 0,
              left: "10vw",
              justifyContent:'center',
              alignItems:'center',
              border: "10px solid #666666",
              background: "#666666",
            }}
          >
            <Image
              height="60px"
              // width="6vh"
              preview={false}
              style={{ aspectRatio: 1 }}
              src={logo}
            />
          </div>
        ) : null}

        <div
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {viewPortWidth >700? (
            <NavMenu viewPortWidth={viewPortWidth} 
            style={{
              fontSize:'calc(10px + 0.5vw)',
              fontWeight: "600",
              height:'80px',
              color: "#666666",
              fontFamily: "Calibri",
              justifyContent: "flex-end",
              alignItems:'center',
              backgroundColor: "#ffcc00",
            }}
            />
          ) : (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <MenuOutlined
                onClick={openDraw}
                style={{
                  fontSize: "16px",
                  justifyContent: "flex-end",
                  color: "#666666",
                }}
              />
            </div>
          )}
        </div>
        <Drawer
          placement="right"
          width="50vw"
          closable={false}
          visible={visible}
          onClose={onClose}
        >
          <NavMenu
            viewPortWidth={viewPortWidth}
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#666666",
              fontFamily: "Calibri",
              justifyContent: "flex-end",
              backgroundColor: "#ffcc00",
            }}
          />
        </Drawer>
      </Header>
    </div>
  );
};

export default Headbar;
