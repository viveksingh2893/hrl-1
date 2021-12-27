import { Menu, Layout, Button, Image, Typography } from "antd";
import img2 from "../assets/image/IMG 0.2A.jpeg";
import '../assets/css/style.css'

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

      
  
      <h1 className="T1">
      Hi Rapid Lab proposes to shift the primary health care model from  “people coming to a facility for treatment” to “@ home primary health care service” model. The origin of the present primary health care system (PHCS) dates back to the 1940’s Bhore Committee report recommendations. Although several revisions have been made over the period of years, the concept of “people coming to a facility for treatment” has largely remained unchanged and PHC based service remains synonymous with “ inaccessibility, inadequacy and inefficiency”. Hi Rapid Lab believes a local person trained with our AI led, smart mobility supported digital platform can deliver universal primary health care service "@ home" and make primary health care "accessible, adequate and efficient". 

      </h1>

    
     
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
