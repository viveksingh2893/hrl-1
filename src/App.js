import logo from "./logo.svg";
import { Menu, Layout, Button, Image, Typography } from "antd";
import img2 from "./assets/image/img2.webp";
import "./App.less";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ConceptW from "./components/conceptwhite";
import Gallery from "./screen/gallery";
import Blog from "./screen/blog";
import Home from "./screen/home";
import Concept from "./screen/concept";
// import Home from './screen/home';

function App() {
  const { SubMenu } = Menu;
  const navigate = useNavigate();
  const { Sider, Content, Header, Footer } = Layout;
  const { Text, Title } = Typography;
  const data = [
    {
      title: "ABOUT",
      link: ["details", "team", "admin", "contact"],
      item: ["HRL DETAILS", "TEAM", "ADMIN", "CONTACT"],
    },
    {
      title: "CONCEPT",
      link: ["concept", "concept", "concept"],
      item: ["MITH.AI", "DHARA", "SKY BRIDGE"],
    },
    {
      title: "RESOURCE",
      link: ["blog", "gallery", "news"],
      item: ["BLOG", "GALLERY", "NEWS"],
    },
    { title: "LOGIN/REGISTER", link: [], item: [] },
  ];

  return (
    <Layout>
      <Header
        style={{
          width:'100vw',
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#ffcc00",
        }}
      >
        {/* <div className='logo'>Hello</div> */}
        {/* <div style={{float:'left'}}>
          <h1>hi rapid lab</h1>
        </div> */}
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            justifyContent: "flex-end",
            backgroundColor: "#ffcc00",
          }}
        >
          {data.map((val, ind) => {
            return (
              <SubMenu key={`${ind}`} title={val.title}>
                {val.item.map((newVal, index) => {
                  return (
                    <Menu.Item
                      onClick={() =>
                        navigate(`/${val.link[index]}`, { state: newVal })
                      }
                    >
                      {" "}
                      {newVal}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog page="blog" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
