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
import { useLocation } from "react-router-dom";
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
  const keytoken=useLocation()
  const getData=async(token)=>{
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    const data=await axios.get('http://65.1.254.51:6004/api/member',config
    ).then(response=>response.data).catch(error=>console.log(error))
    setValue(data)
    console.log(data,'$$$$$')
  };
  useEffect(()=>{
    getData(keytoken.state.token);
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
        <Sider style={{marginTop:'120px', background:'#666666'}} collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={menuclick} >
              Statistics
            </Menu.Item>
            <Menu.Item key="2" icon={<UserAddOutlined />}onClick={menuclick}>Edit Bio</Menu.Item>
              <Menu.Item key="3" icon={<FormOutlined />}onClick={menuclick}>Write Blog</Menu.Item>
              <Menu.Item key="4" icon={<PicLeftOutlined />}onClick={menuclick}>Add News</Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} onClick={menuclick}>
            <a href="http://65.1.254.51:6004/admin" target="_blank">Admin Panel</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
        {key==1?<StatisticData/>:null}
        {key==2?<BioForm data={dataval} token={keytoken.state.token}/>:null}
        {key==3?<BlogPage url='blogupload' token={keytoken.state.token}/>:null}
        {key==4?<BlogPage url='newsupload' token={keytoken.state.token}/>:null}
        {key==4?<b>LogOut</b>:null}
          </Content>
        </Layout>
      </Layout>
    );
  }

export default Admin;