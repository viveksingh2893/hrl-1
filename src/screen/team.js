import React from "react";
import "../App.less";
import { useEffect, useState } from "react";
import { Typography, List, Divider } from "antd";
import axios from 'axios';
import ProfileCard from "../components/profilecard";
import { useNavigate } from "react-router-dom";
import ipaddress from '../components/url';

const Team = () => {
  const navigate = useNavigate();
  const [teamData,setData]=useState()
  const data = [];
  for (let i = 0; i < 21; i++) {
    data.push({
      href: "https://ant.design",
      name: `ant design part ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const { Title, Text } = Typography;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
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
  
      getData();
      return () => {
        setData()}
    },[])
    const paginationdata=async(page)=>{
      console.log(page);
      const data=await axios.get(`${ipaddress}api/team?page=${page}`).then(response=>response.data).catch(error=>console.log(error));
      setData(data);
    };
  return (
    <div style={{display:'flex',width:'100vw',
    justifyContent: "center",
    alignItems: "center",}}>
    <div
      style={{
        width: "80vw",
        marginTop: `${viewPortWidth > 500 ? "12.5vh" : "10vh"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
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
     
      
        grid={{
          gutter:5,
          xs:1,
          sm:4
        }}
        pagination={{
          onChange: (page) => {
            paginationdata(page)
          },
          pageSize: 5,
          total:teamData.count,
        }}
        dataSource={teamData.results}
        renderItem={(item,index) => (
          <List.Item >
            <ProfileCard
              name={item.name}
              avatar={item.image}
              viewPortWidth={viewPortWidth}
              action={() => {
                navigate("/member",{state:{item:item,result:teamData.results,index:index}});
              }}
            ></ProfileCard>
          </List.Item>
        )}
      />:null}
    </div>
     </div>
  );
};

export default Team;
