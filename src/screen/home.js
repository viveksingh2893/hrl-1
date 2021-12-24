import { Menu, Layout, Button, Image, Typography } from "antd";
import img2 from "../assets/image/IMG 0.2A.jpeg";

import ConceptW from "../components/conceptwhite";
import ConceptB from "../components/conceptblue";
const Home = () => {
  const { Sider, Content, Header, Footer } = Layout;
  const { Title } = Typography;
  return (
    <Content
      style={{
        
        alignItems: "center",
        justifyContent: "center",
        marginTop:'calc(20px + 2.5vw )',
        width:"100vw",

        display: "flex",
        flexDirection: "column",
      }}
    >
     
      <Image 
       width="100vw" 
       style={{border:'2px solid black'}} 
       preview={false} src={img2} />

      
  
      <Title
        level={4}
        style={{
          fontWeight: "normal",
          textAlign: "center",
          
          fontSize: "2.5vh",
        }}
      >
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. "
      </Title>

    
     
      <ConceptW />
      <ConceptB />
      <ConceptW />
      <ConceptB />
      <ConceptW />
      <ConceptB />
    </Content>
  );
};
export default Home;
