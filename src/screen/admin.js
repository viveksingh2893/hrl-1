import { Layout, Menu, Breadcrumb, Statistic } from 'antd';
import StatisticData from "../components/statistic";
import AddUser from "../components/adduser";
import HomePage from "../components/homepage";
import BlogPage from "../components/blogpage";
import GalleryPage1 from "../components/gallerypage.js";
import ProductPage from '../components/productpage';
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
import { useState } from 'react';
const { Content,  Sider } = Layout;
const { SubMenu } = Menu;


const Admin=()=> {
  const [state,setState]=useState({collapsed:false})
  const [key,setKey]=useState(1)
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={menuclick} >
              Statistics
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined /> } onClick={menuclick}>
              Add User
            </Menu.Item>
            <Menu.Item key="3" icon={<LayoutOutlined />} onClick={menuclick}>
              Home Page
            </Menu.Item>
           
            <SubMenu key="sub1" icon={<PicLeftOutlined />} title="Blog & News">
              <Menu.Item key="4" onClick={menuclick}>Blogs</Menu.Item>
              <Menu.Item key="5" onClick={menuclick}>News</Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<FileImageOutlined/>} onClick={menuclick}>
              Gallery
            </Menu.Item>
            <SubMenu key="sub2" icon={<DesktopOutlined />} title="Concepts">
              <Menu.Item key="7" onClick={menuclick}>Mith.AI</Menu.Item>
              <Menu.Item key="8" onClick={menuclick}>Dhara</Menu.Item>
              <Menu.Item key="9" onClick={menuclick}>Sky Bridge</Menu.Item>
            </SubMenu>
            <Menu.Item key="10" icon={<FormOutlined />} onClick={menuclick}>
              Add New Concepts +
            </Menu.Item>
            <Menu.Item key="11" icon={<LogoutOutlined />} onClick={menuclick}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
        {key==1?<StatisticData/>:null}
        {key==2?<AddUser/>:null}
        {key==3?<HomePage/>:null}
        {key==4?<BlogPage color='#FFDB4D'/>:null}
        {key==5?<BlogPage color='lightblue'/>:null}
        {key==6?<GalleryPage1 color='lightblue'/>:null}
        {key==7?<ProductPage color='lightblue'/>:null}
        {key==8?<ProductPage color='lightyellow'/>:null}
        {key==9?<ProductPage color='lightgreen'/>:null}
        {key==10?<ProductPage color='lightpink'/>:null}
        {key==11?<b>LogOut Page</b>:null}
            
          </Content>
        </Layout>
      </Layout>
    );
  }

export default Admin;