import { Layout,Typography} from "antd";
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
import ReadBlog from "./screen/readblog";
import axios from "axios";
import ipaddress from "./components/url";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
import HrlDetail from "./screen/hrldetail";
import Contact from "./screen/contact";

function App() {
  const { Footer } = Layout;
  const [concept,setConcept]=useState()
  const getData=async()=>{
    const ip=ipaddress

    const data=await axios.get(`${ip}api/header`).then(response=>response.data)
    console.log("headerdata......",data.concept)
    setConcept(data.concept)

  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div style={{scrollBehavior:'smooth'}} >
      <Layout style={{ backgroundColor: "white" }}>
        <Headbar concept={concept}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resource/:rname" element={<Blog/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/concept/:name" element={<Concept />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/team" element={<Team />} />
          <Route path="/member/:membername" element={<Member />} />
          <Route path="/picpage" element={<Picpage />} />
          <Route path="/readblog" element={<ReadBlog/>} />
          <Route path="/detail" element={<HrlDetail/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer style={{ position: "relative",bottom:'0', marginTop:'2vw',textAlign: "center",backgroundColor:'#F7E279' }}>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',padding:'1vw'}}>
          <Typography.Paragraph>For further information, pls write to <b>contact@hirapidlab.com</b> from your official email id only, stating your query followed by your name and designation. 
            We will answer your mail. </Typography.Paragraph>
          <Typography.Paragraph>
            The content of the website is collated by Hi Rapid Lab and is offered to the
            viewers for information purposes only. It does not reflect the opinion of Hi Rapid
            Lab or any of the affiliating institutions of the presenters or participants on the
            website. The content of the website does not endorse any organization, product
            or process or service whose names, logos or features which appear in the website
            content. The content of the website should not be altered in any way, nor should
            it be used in a way that may distort its meaning. If you wish to apply or expand
            content, concepts or ideas contained in the website, please understand that you
            are taking full responsibility for all your actions. While all efforts have been made
            to ensure that the information given in this website content is correct, the
            producers, writers, presenters, participants, sponsors, copyright holders, assigned
            users or anyone associated with the website content shall not be in any event held
            liable to any party, for any direct, indirect, implied, punitive, special, incidental or
            other consequential damages arising directly or indirectly from any thought
            process, social media share or use of the content of the website, which is provided
            as is without any warranties. As in all cases, viewers should never take any
            information sources from the website at face value and should always do their
            due diligence on any viewed material to form their own opinions, judgments and
            actions. For any further clarifications or suggestions or comments please email to
            contact@hirapidlab.com 
          </Typography.Paragraph>
        </div>
          ©2021 Created and Maintained by <b>Destratum</b>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
