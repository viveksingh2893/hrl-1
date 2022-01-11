import logo from "../assets/image/IMG 0.1.png";
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
    
      

      

      <Header
        style={{
          display: "flex",
          height: "80px",
          padding:'2vw',
          width: "100vw",

          flexDirection: "row",
          justifyContent: "space-evenly",

          alignItems: "center",
          backgroundColor: "#666666",
        }}
      >
         {viewPortWidth>700?<div 
        onClick={()=>navigate('/')}
        style={{
          position:'absolute',

          
          
        display:'flex',
        flex:1,
        zIndex:2,
        top:0,left:'10vw'}}>

       
        <Image
        height='80px'
        preview={false}
        src={logo}
      
        />
         </div>:null}
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
              color: "#ffcc00",
              fontFamily: "Calibri",
              justifyContent: "flex-end",
              alignItems:'center',
              backgroundColor: "#666666",
            }}
            />
          ) : (
            <div style={{ display: "flex",marginRight:'5vw' ,justifyContent: "flex-end" }}>
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
