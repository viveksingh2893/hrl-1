import { Layout, Menu, Card } from 'antd';
import StatisticData from "../components/statistic";
import BlogPage from "../components/blogpage";
import BioForm from '../components/biopage';
import axios from 'axios';
import {
  UserAddOutlined,
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
  const [dataval,setValue]=useState([])
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const getData=async()=>{
    const data=await axios.get('http://65.1.254.51:6004/api/member'
    ).then(response=>response.data).catch(error=>console.log(error))
    setValue(data)
    console.log(data,'$$$$$')
  };
  useEffect(()=>{
    getData();
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
      <Layout style={{ minHeight: '90vh' ,marginTop:'80px'}}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={menuclick} >
              Statistics
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}onClick={menuclick}>Edit Bio</Menu.Item>
              <Menu.Item key="3" icon={<FormOutlined />}onClick={menuclick}>Write Blog</Menu.Item>
              <Menu.Item key="4" icon={<PicLeftOutlined />}onClick={menuclick}>Add News</Menu.Item>
              
           
           
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
        {key==2?<BioForm data={dataval}/>:null}
        {key==3?<BlogPage url='blogupload' />:null}
        {key==4?<BlogPage url='newsupload'/>:null}
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