import { Card,Image } from "antd";
import { useEffect, useState } from "react";
import "../App.less";
import { useEffect, useState } from "react";

const Linkcard = (props) => {
  const [width,setWidth]=useState(0)
  const [height,setHeight]=useState(0)
  useEffect(()=>{
    setWidth(window.innerWidth)
    window.addEventListener('resize',(e)=>{
     console.log("size",e.target)
     setWidth(window.innerWidth)
     setHeight(window.innerHeight)
     console.log("height",window.innerHeight)
    })},[])
  const { Meta } = Card;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div style={{marginRight:5}}>
      <Card
 
     
        id={props.id}
        onClick={props.action}
        hoverable
        bodyStyle={{fontSize:height>width?"10px":'11px',}}
        style={{
          width:height>width?"80vw":'25vw',
          height:height>width?'82vw':'27.5vw',
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
         

          background:'#ffd633'

        }}
        cover={<Image height={height>width?'42vw':'15vw'}alt="unavailable" src={props.image} />}

      >
    
        <Meta  title={<h1 
        style={{display:'flex',justifyContent:'center',
        fontSize:height>width?'calc(12px + 0.5vw)':'calc(10px + 0.5vw)',textAlign:'center'}}>{props.title}</h1>} description={props.description} />
      </Card>
    </div>
  );
};

export default Linkcard;
