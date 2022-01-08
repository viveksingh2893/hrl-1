import { Menu, Layout, Button, Image, Typography, Divider } from "antd";
import '../assets/css/style.css'

import "../App.less";

const ConceptB = (props) => {
  const { Title, Text } = Typography;
  const {Content} =Layout

  return (

      <div
       style={{
        display: "flex",
        width:'80vw',
        flexWrap: "wrap-reverse", 
        flexDirection: "row",
        backgroundColor:'#ECF87F',
        
        
        justifyContent: "space-around",
    
      }}>
      <div 
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          padding:'2vw',
          justifyContent: "flex-start",
          alignItem: "center",
          flexDirection: "column",
          
        }}>  
           <Title level={2} style={{display:'flex',justifyContent:'flex-start'}}>
            {props.title}
           </Title>
           <Text style={{display:'flex',justifyContent:'center'}}>
          {props.text}
           </Text>
        

           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Button onClick={props.navigation} 
             type="primary"
             size='large'
             style={{border:'none',
             fontFamily:'Calibri',
             fontWeight:'600',
             backgroundColor:'#666666'
             }}>
             {props.btitle.toUpperCase()}
          </Button>
           </div>
      </div>
    
        <Image width={props.width>500?"30vw":'80vw'} src={props.img} />
      </div>
    
    
  );
};

export default ConceptB;
