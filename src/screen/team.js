import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Typography, List, Divider } from "antd";
import axios from 'axios';
import  defaultImage from '../assets/image/default.png';
import { useNavigate } from "react-router-dom";
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
        width: "70vw",
        marginTop: `${viewPortWidth > 500 ? "12.5vh" : "10vh"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        border:'1px solid black'
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
      style={{display:'flex',flexDirection:'column',border:'1px solid black',alignItems:'center'}}
     
        grid={{
          gutter:16,

          xs:1,
          sm:4
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
            <div style={{display:'flex',
            width:150,height:'auto',
            border:'1px solid black',
            justifyContent:'center',
            

            flexDirection:'column'}}
              // name={item.name}
              // avatar={item.image}
              // viewPortWidth={viewPortWidth}
              // action={() => {
              //   navigate("/member",{state:{item:item,result:teamData.results,index:index}});
              // }}
            >
              
              <img src={item.image?item.image:defaultImage}
              style={{objectFit:'contain'}}
              />
              <Title style={{width:150,textAlign:'center'}}level={5}>
                {item.name}
              </Title>
              
            </div>
          </List.Item>
        )}
      />:null}
    </div>
     </div>
  );}else{return(
    <Loader/>
  )}
};

export default Team;
