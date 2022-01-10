import React, { Component } from "react";
import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography, Divider, Image, Button } from "antd";
import { List } from "antd";
import img1 from "../assets/image/IMG 2.4C.jpg";
import ProfileCard from "../components/profilecard";

const Blog = () => {
  const [viewPortWidth, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    });
  }, []);
  const [srchres, setSrchres] = useState("none");
  const onSearch = (value) => {
    setSrchres(value);
    setSearchShow(true);
  };
  const clearSearch = () => {
    setSearchShow(false);
  };
  const { Title, Text } = Typography;
  const [searchshow, setSearchShow] = useState(false);
  const data = [];
  const keywords = [];
  const searchdata = [];
  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();

  for (let i = 0; i < 21; i++) {
    data.push({
      title: `ant design part ${i}`,
      image: {url:`https://images.pexels.com/photos/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,caption:'caption of image'},
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      });
    keywords.push({
      id: i,
      keyword: `word ${String(i)}`,
    });
    searchdata.push({
      title: `ant design search data ${i}`,
      image: {url:`https://images.pexels.com/355935/pexels-photo-355935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,caption:'caption of image'},
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-layout">
      <div>
        <Wordcloud data={keywords}></Wordcloud>
      </div>
      <div>
        <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      </div>
      <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
            flexDirection: "column",
          }}
        >
          <div style={{width:'80vw'}}>
      {searchshow ? (
        
            
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <Typography.Title
            // style={{ marginLeft: "10vw" }}
            level={tlvl}
            style={{ fontFamily: "calibri" }}
          >{`${searchdata.length} SEARCH RESULTS FOR "${srchres}"`}</Typography.Title>
          <Button onClick={clearSearch} 
             type="primary"
             size='large'
             style={{border:'none',
             fontFamily:'Calibri',
             fontWeight:'600',
             backgroundColor:'#666666'
             }}>
            Clear Results
          </Button></div>):null}
        
      <List
        itemLayout='vertical'
        grid={{
          column:1,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={searchshow?searchdata:data}
        renderItem={(item) => (
          
          <List.Item>  
      <Divider></Divider>
      
      <div 
      style={{
          display:'flex',
          justifyContent:'flex-start',
          flexWrap:'wrap',
          alignItems:'flex-start'
      }}>
          <div style={{display:'flex',flexBasis:'300px',justifyContent:'center',alignItems:'center'}}>
          <Image
              width={viewPortWidth>500?'20vw':'80vw'}
              alt={item.image.caption}
              src={item.image.url}/>
          </div>
          <div style={{display:'flex',width:viewPortWidth>500?'30vw':'80vw',paddingLeft:'1vw',flexDirection:'column'}}>
            <Typography.Title level={4}>
             {item.title}
            </Typography.Title>
            <Typography.Text style={{fontSize:'1.1rem'}}>
              {item.description}
            </Typography.Text>
          </div>
      </div>
      </List.Item>
        )}
      />
      </div>
        </div>
      
    </div>
  );
};

export default Blog;
