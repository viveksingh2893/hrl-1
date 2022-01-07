import { Layout, Menu, Card } from 'antd';
import StatisticData from "../components/statistic";
import AddUser from "../components/adduser";
import HomePage from "../components/homepage";
import BlogPage from "../components/blogpage";
import GalleryPage1 from "../components/gallerypage.js";
import ProductPage from '../components/productpage';
import BioForm from '../components/biopage';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileImageOutlined ,
  TeamOutlined,
  FormOutlined,
  LayoutOutlined,
  PicLeftOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
const { Content,  Sider } = Layout;
const { SubMenu } = Menu;


const Admin=()=> {
  const [state,setState]=useState({collapsed:false})
  const [key,setKey]=useState(1)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
const menuclick=(event)=>{
console.log(event.key,'event')
    setKey(event.key)
}
    const { collapsed } = state;
    return (
      <Layout style={{ minHeight: '100vh' ,marginTop:'80px'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={menuclick} >
              Statistics
            </Menu.Item>
            <Menu.Item key="2" onClick={menuclick}>Edit Bio</Menu.Item>
              <Menu.Item key="3" onClick={menuclick}>Write Blog</Menu.Item>
              <Menu.Item key="4" onClick={menuclick}>Add News</Menu.Item>
              
           
           
            {/* <SubMenu key="sub2" icon={<DesktopOutlined />} title="Concepts">
              <Menu.Item key="7" onClick={menuclick}>Mith.AI</Menu.Item>
              <Menu.Item key="8" onClick={menuclick}>Dhara</Menu.Item>
              <Menu.Item key="9" onClick={menuclick}>Sky Bridge</Menu.Item>
            </SubMenu> */}
            {/* <Menu.Item key="10" icon={<FormOutlined />} onClick={menuclick}>
              Add New Concepts +
            </Menu.Item> */}
            <Menu.Item key="5" icon={<LogoutOutlined />} onClick={menuclick}>
            <a href="http://127.0.0.1:8000/admin" target="_blank">Logout</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
        {key==1?<StatisticData/>:null}
        {/* {key==2?<AddUser/>:null} */}
        {/* {key==3?<HomePage/>:null} */}
        {key==2?<BioForm/>:null}
        {key==3?<BlogPage />:null}
        {key==4?<BlogPage/>:null}
        {/* {key==6?<GalleryPage1 color='lightblue'/>:null}
        {key==7?<ProductPage color='lightblue'/>:null}
        {key==8?<ProductPage color='lightyellow'/>:null}
        {key==9?<ProductPage color='lightgreen'/>:null}
        {key==10?<ProductPage color='lightpink'/>:null} */}
        {key==4?<b>LogOut</b>:null}
            
          </Content>
        </Layout>
      </Layout>
    );
  }

export default Admin;