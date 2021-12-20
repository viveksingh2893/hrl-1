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
        width:'100vw',
        alignItems: "center",
        justifyContent: "center",
        marginTop:'10vh',

        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          width: "100vw",
          height: "30vw",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            position: "absolute",
            borderBottom: "30vw solid #ffcc00",
            borderLeft: "0px solid transparent",
            borderRight: "10vw solid transparent",
            height: "0",
            width: "50vw",
          }}
        ></div>
        <div
          style={{
            borderTop: "30vw solid #000",
            borderRight: "0vw solid transparent",
            borderLeft: "10vw solid transparent",
            height: "0",
            width: "100vw",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            display: "flex",
          }}
        >
          <Image
            preview={false}
            src={img2}
            style={{ objectFit: "contain", width: "45vw" }}
          />
        </div>
      </div> */}
      <Image width="100vw"  preview={true} src={img2} />
      <Title
        level={4}
        style={{
          flexWrap: "wrap",
          fontWeight: "normal",
          width: "50vw",
          textAlign: "center",
          padding: "1.5vw",
          fontSize: "2.5vw",
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
