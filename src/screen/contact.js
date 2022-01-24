import React,{useEffect, useState} from 'react'

import ConceptW from "../components/conceptwhite";


const Contact = () => {
    const [width,setWidth]=useState(0)
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener('resize',(e)=>{
         setWidth(window.innerWidth)
        })
      },[])

  return (
      <div
        style={{
          display:"flex",
         width:'100vw',
          alignItems:"center",
          justifyContent:"center",
          marginTop:100,
         
        }}
      >
       
<div style={{
          display:"flex",
         width:'80vw',
         height:'80vh',
          alignItems:"center",
          justifyContent:"center",
         
        }}>
        
        <ConceptW width={width} title='Contact Us'
        flexsize={1}
        btitle='Discover More'
        /></div>
       
       
      </div>
  );
}


export default Contact;
