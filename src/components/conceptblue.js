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
        flex: 1,
        width:'80vw',
        flexWrap: "wrap", 
        flexDirection: "row",
        justifyContent: "space-around",
    
      }}>
      <div
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          justifyContent: "flex-start",
          alignItem: "center",
          
          flexDirection: "column",
          
        }}
      >
        <Title level={2} style={{marginBottom:0,marginTop:10}} >
          {props.title}
        </Title>
        <Divider style={{marginTop:0,backgroundColor:'#fff5cc'}}></Divider>
        <Text 
        style={{display:'flex',fontSize:'1.2rem',fontFamily:'Calibri'}}>
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
      <div
        style={{
          display: "flex",
          flex:1,
          flexBasis: 200,
          justifyContent: "center",
        }}
      >
        <Image width="30vw" src={props.img} />
      </div>
      </div>
    
  );
};

export default ConceptB;
