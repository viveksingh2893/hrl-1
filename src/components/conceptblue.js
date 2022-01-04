import { Menu, Layout, Button, Image, Typography } from "antd";
import '../assets/css/style.css'

import "../App.less";

const ConceptB = (props) => {
  const { Title, Text } = Typography;
  const {Content} =Layout

  return (
    <Content
     
    >
      <div
       style={{
        display: "flex",
        flex: 1,
        width:'100vw',
        padding:'2vw',
        flexWrap: "wrap", 
        backgroundColor: "#666666 ",
        flexDirection: "row",
        justifyContent: "space-around",
    
      }}>
      <div
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          
        }}
      >
        <Title level={2} style={{ display: "flex", justifyContent: "center",color:'#ffffff' }}>
          {props.title}
        </Title>
        <Text style={{display:'flex',justifyContent:'center',fontSize:'calc(11px + 0.5vw)',fontFamily:'Calibri',color:'#ffffff'}}>
          {props.text}
        </Text>
       
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Button onClick={props.navigation} style={{width:'calc(100px + 1vw)',margin:'0.5vw',fontFamily:'Calibri',fontWeight:'600',backgroundColor:'#ffcc00'}}>{props.btitle}</Button>
           </div>
      </div>
      <div
        style={{
          display: "flex",
          flex:1,
          flexBasis: 200,
          height:300,
          justifyContent: "center",
        }}
      >
        <Image height="40vh" src={props.img} />
      </div>
      </div>
    </Content>
  );
};

export default ConceptB;
