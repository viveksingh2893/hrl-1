import { Layout, Menu } from 'antd';
import StatisticData from "../components/statistic";
import BlogPage from "../components/blogpage";
import BioForm from '../components/biopage';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
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
import { useEffect, useState,Text } from 'react';
import ipaddress from '../components/url';
import Loader from "../components/spinner";
const { Content,  Sider } = Layout;
const { SubMenu } = Menu;



const Admin=()=> {
  const navigate = useNavigate();
  const [state,setState]=useState({collapsed:false})
  const [key,setKey]=useState(1)
  const [dataval,setValue]=useState([])
  const keytoken=useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)

  },[dataval])
 
  const getData=async(token)=>{
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    const data=await axios.get(`${ipaddress}api/member`,config
    ).then(response=>response.data).catch(error=>console.log(error))
    setValue(data)
    console.log(data,'$$$$$')
  };
  const onBiochange=(data)=>{
setValue(data)
console.log(data,'biodata')
  }
  useEffect(()=>{
    try{
      getData(keytoken.state.token);
    }catch{navigate(`/login`)}
    
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
   if(dataval){ return (
      <Layout style={{ minHeight: '90vh' ,marginTop:'80px'}}>
        <Sider style={{marginTop:'120px', background:'#666666'}} collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         
            <Menu.Item key="2" icon={<UserAddOutlined />}onClick={menuclick}>Edit Bio</Menu.Item>
              <Menu.Item key="3" icon={<FormOutlined />}onClick={menuclick}>Write Blog</Menu.Item>
              <Menu.Item key="4" icon={<PicLeftOutlined />}onClick={menuclick}>Add News</Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} onClick={menuclick}>
            Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
        {key==1?<><h1 style={{fontSize:'30px'}}>HiRapidLab DashBoard</h1></>:null}
        {key==2?<BioForm data={dataval} onBiochange={onBiochange}token={keytoken.state.token}/>:null}
        {key==3?<BlogPage author={dataval.name} url='blogupload' token={keytoken.state.token}/>:null}
        {key==4?<BlogPage author={dataval.name}url='newsupload' token={keytoken.state.token}/>:null}
        {key==5?navigate(`/login`):null}
          </Content>
        </Layout>
      </Layout>
    );}else{return(<Loader/>)}
  }

export default Admin;