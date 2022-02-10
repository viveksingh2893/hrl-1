import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import { Divider, Row } from "antd";
import { Image, Typography } from "antd";
import { Button} from "antd";
import {LeftOutlined,RightOutlined} from "@ant-design/icons";
import { useLocation } from "react-router-dom";



const Picpage = () => {


  const galleryData=useLocation()
  console.log(galleryData,'memeber screen')
  const [currentdata,setCurrent]=useState(galleryData.state.item)
  const [currentIndex,setIndx]=useState(galleryData.state.index)
  const [viewPortWidth, setWidth] = useState(0);
  
  var width=viewPortWidth>576?'20vw':'80vw'

  const prevdata = () => {
    
    console.log("index value......",currentIndex)
    if(currentIndex>0){
    var result=galleryData.state.results[currentIndex-1]
    setIndx(currentIndex-1)
    
    console.log("result...........",result)
    setCurrent(result)
  }

  };

  const nextdata = () => {
    console.log("Fetch next member");
    
    console.log("index value......",currentIndex)
   
    if (currentIndex<galleryData.state.results.length-1){

   
    var result=galleryData.state.results[currentIndex+1]
    setIndx(currentIndex+1)
    
    console.log("result...........",result)
    setCurrent(result)
  }

  };
  
  const idgallery=galleryData.state.id;
  console.log(idgallery,'aaaaaaaaaaaa')
  
  const [newdata, setNewData] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
  const {  Text } = Typography;
  return (
    <div className="container-layout">
      {/* <Wordcloud data={['hjh','ghgh','hggj']}></Wordcloud> */}
      <Divider></Divider>
      <div style={{display:'flex',
      width:'80vw',
      flexWrap:'wrap',
  
      justifyContent:'flex-start',
      alignItems:'flex-start',
      
     
      flexDirection:'row'}}>
          <div id='gallery'
            style={{
              flexbasis:'250px',
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems:'flex-start',
            }}
          > 
          <Image
          src={currentdata.image} preview={false}
          width={viewPortWidth>576?'40vw':'80vw'}
        />
          
          </div>
          <div
            style={{
              flexbasis:'400px',
              display: "flex",
              marginLeft:'0.5vw',
              width:width,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "white",
            }}>
             <Text style={{fontWeight:'400',width:width}}>
              Location
            </Text>
            <Text style={{width:width,fontWeight:'600'}}>
            {(currentdata.district+', ' + currentdata.state).toUpperCase()}
            </Text>
            <Text style={{width:width,fontWeight:'400',fontSize:'1rem'}}>
               {currentdata.description}
            </Text>
            <Divider/>
            <Text style={{fontWeight:'700',width:width}}>
              KEYWORDS
            </Text >
          <Row>
              {
              currentdata.keyword.split(',').map((item,indx)=>{

                return(
               
                  <Button  size='middle'
                  style={{
                  fontFamily:'Calibri',
                  fontWeight:'600',
                  border:'2px solid #666666',
                  margin:'0.2vw'
                  }}>
                  {item.toUpperCase()}
                  </Button>
                  
                )
              })
              
              }
              </Row>
           
         
        
          </div>
          
    
        <div
          style={{
            
         
          
            // flexShrink: 1,
            flexBasis: 405,
            display: "flex",
            // justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
        
          }}
        >
          
       
         
        </div>
      </div>
      <Divider></Divider>
      <div style={{display:'flex',width:viewPortWidth > 500 ? "20vw" : "80vw",justifyContent:'space-between'}}>
     <Button 
        
                  size='large'
                  type="primary"
                  icon={<LeftOutlined/>}
                  style={{
                  border:'none',
                  alignItems:'center',
                  backgroundColor:currentIndex==0?'#c2c2c2':'#666666'
                  }}
                  onClick={prevdata}>
                
        </Button>
        <Button 
                size='large'
                type="primary"
                 icon={<RightOutlined/>}
                style={{
                border:'none',
                alignItems:'center',
                backgroundColor:currentIndex==(galleryData.state.results.length-1)?'#c2c2c2':'#666666'
                }}
                onClick={nextdata}>
               
        </Button>



      </div>
      <Divider></Divider>
    </div>
  );
};

export default Picpage;
