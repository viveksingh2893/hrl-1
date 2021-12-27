import { Menu, Layout, Button, Image, Typography } from "antd";
import img2 from "../assets/image/IMG 0.3.png";
import "../App.less";

const ConceptB = () => {
  const { Title, Text } = Typography;
  const {Content} =Layout

  return (
    <Content
     
    >
      <div
       style={{
        display: "flex",
        flex: 1,
        width:'80vw',
   
        
        flexWrap: "wrap",
        display: "flex",
        backgroundColor: "#474747 ",
        flexDirection: "row",
        justifyContent: "space-around",
    
      }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexShrink: 1,
          flexBasis: 300,
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          margin: 20,
        }}
      >
        <Title level={3} style={{ display: "flex", justifyContent: "center" }}>
          Mith.AI
        </Title>
        <Text style={{ display: "flex", justifyContent: "center" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
        <Text style={{ display: "flex", justifyContent: "center" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexBasis: 300,
          height:300,
          justifyContent: "center",
        }}
      >
        <Image height="40vh" src={img2} />
      </div>
      </div>
    </Content>
  );
};

export default ConceptB;
