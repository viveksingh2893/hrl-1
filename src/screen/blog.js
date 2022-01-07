import React, { Component } from "react";
import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography,Divider ,Image} from "antd";
import { List } from "antd";
import img1 from '../assets/image/IMG 2.4C.jpg'
import ProfileCard from "../components/profilecard";

const Blog = () => {
  const onSearch = (value) => console.log(value);

  const data = [];
  const keywords = [];
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
    keywords.push({
      id: i,
      keyword: `word ${String(i)}`,
    });
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="container-layout">
      <div>
      <Wordcloud data={keywords}></Wordcloud>
      </div>
      <div>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      </div>
      <Divider></Divider>
      <div style={{width:'80vw',border:'1px solid black'}}>
      <List
        
        itemLayout='vertical'
        
  
        grid={{
          column:1,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
              
      >  
      <div 
      style={{
          display:'flex',
          justifyContent:'flex-start',
          border:'1px solid black',
          flexWrap:'wrap',
          alignItems:'flex-start'
      }}>
          <div style={{display:'flex',flex:1,flexBasis:'300px',border:'1px solid black',justifyContent:'center',alignItems:'center'}}>
          <Image
              width='20vw'
              alt="logo"
              src="https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>

          </div>
          <div style={{display:'flex',flex:1,width:'40vw',border:'1px solid black',flexDirection:'column'}}>
            <Typography.Title level={4}>
              Quartz is no longer developing or supporting Atlas. 
              Thank you for your support over the last four years!
            </Typography.Title>
            <Typography.Text style={{fontSize:'1.2rem'}}>
              Typography is the art and technique of arranging type 
              to make written language legible, 
              readable and appealing when displayed. 
              The arrangement of type involves selecting typefaces, 
              point sizes, line lengths, line-spacing (leading), and letter-spacing (tracking), as well as adjusting the space between pairs of letters (kerning)
            </Typography.Text>
          </div>
          
            
            
        
      </div>
     
    
   
  
      
            {/* <ProfileCard name={item.name} avatar={img1}></ProfileCard> */}
          </List.Item>
        )}
      />
      </div>
    </div>
  );
};

export default Blog;
