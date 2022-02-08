import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Typography, List, Divider } from "antd";
import axios from 'axios';
import  defaultImage from '../assets/image/default.png';
import { NavLink, useNavigate } from "react-router-dom";
import ipaddress from '../components/url';
import Loader from "../components/spinner";

const Team = () => {
  const navigate = useNavigate();
  const [teamData,setData]=useState()

  const { Title, Text } = Typography;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      setWidth(window.innerWidth);
    });
    return ()=>setWidth()
  }, []);
  const getData= async ()=>{
    const data=await axios.get(`${ipaddress}api/team`
      ).then(response=>response.data).catch(error=>console.log(error))
      setData(data)
    
    }
    useEffect(()=>{
      window.scrollTo(0,0)
    },[]);
    useEffect(()=>{
  
      getData();
      return () => {
        setData()}
    },[])
    const paginationdata=async(page)=>{
      console.log(page);
      const data=await axios.get(`${ipaddress}api/team?page=${page}`).then(response=>response.data).catch(error=>console.log(error));
      setData(data);
    };
  if(teamData!=undefined){return (
    <div style={{display:'flex',width:'100vw',
    justifyContent: "center",
    alignItems: "center",}}>
    <div
      style={{
        width: viewPortWidth>576?"67vw":"80vw",
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
     
        
      }}
    >
      <Title
        level={2}
        style={{ fontFamily: "times-new-roman", marginTop: "5vh" }}
      >
        Our Team
      </Title>
      <Divider></Divider>
   
      {teamData?<List 
      style={{display:'flex',
      justifyContent:'center',flexDirection:'column',alignItems:'center'}}
     
        grid={{
          gutter:viewPortWidth>576?25:30,
          

          xs:2,
          sm:6
        }}
        pagination={{
          onChange: (page) => {
            paginationdata(page)
          },
          pageSize: 50,
          total:teamData.count,
        }}
        dataSource={teamData.results}
        renderItem={(item,index) => (
          <List.Item key={index}>
            <NavLink to={`/member/${item.id}/${item.name}`}
            
             state={{item:item,result:teamData.results,index:index}}>
            <div className="teamlistItem">
              
              <img src={item.image?item.image:defaultImage}
              className='teamlistImage'
              
              />
              <Title 
              className='teamlistTitle'
              
              level={5}>
                {item.name}
              </Title>
              
            </div>
            </NavLink>
          </List.Item>
        )}
      />:null}
    </div>
     </div>
  );}else{
    return(
    <Loader/>
  )}
};

export default Team;
