
import { Layout } from "antd";
import "./App.less";

import {
  Routes,
  Route,
  
} from "react-router-dom";
import Gallery from "./screen/gallery";
import Blog from "./screen/blog";
import Home from "./screen/home";
import Concept from "./screen/concept";
import Headbar from "./components/header";


function App() {
  const { Footer } = Layout;


  return (
    <div>
      <Headbar/>
      
      <Layout style={{width:'100vw',background:'#ffffff'}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog page="blog" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/concept" element={<Concept />} />
      </Routes>
      <Footer style={{ textAlign: "center" }}>
         ©2021 Created by Destratum
      </Footer>
      </Layout>
    </div>
  );
}

export default App;
