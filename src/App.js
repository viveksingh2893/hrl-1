import { Layout } from "antd";
import "./App.less";

import { Routes, Route } from "react-router-dom";
import Gallery from "./screen/gallery";
import Blog from "./screen/blog";
import Home from "./screen/home";
import Concept from "./screen/concept";
import Headbar from "./components/header";
import Login from "./screen/login";
import Admin from "./screen/admin";
import Team from "./screen/team";
import Member from "./screen/member";
import Picpage from "./screen/picpage";

function App() {
  const { Footer } = Layout;

  return (
    <div>
      <Layout style={{ backgroundColor: "white" }}>
        <Headbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog page="blog" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/team" element={<Team />} />
          <Route path="/member" element={<Member />} />
          <Route path="/picpage" element={<Picpage />} />
        </Routes>
        <Footer style={{ position: "relative", textAlign: "center" }}>
          ©2021 Created by Destratum
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
