import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import Mapbox from "../components/Mapbox";
import { Typography, Divider, List, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ProfileCard from "../components/profilecard";

const Gallery = () => {
  const [galleryData,setData]=useState()
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getData=async()=>{
    const data=await axios.get('http://65.1.254.51:6004/api/gallery'
    ).then(response=>response.data).catch(error=>console.log(error))
    setData(data)
  }
  useEffect(()=>{
    getData();


  },[])

  console.log(galleryData,'Gallery Data...............')
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
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
  const navigate = useNavigate();
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
      id:i,
      name: `ant design part ${i}`,
      image: `https://picsum.photos/id/${i}/300/200`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
     });
    keywords.push({
      id: i,
      keyword: `word ${String(i)}`,
    });
    searchdata.push({
      id:{i},
      name: `ant design part ${i}`,
      image: `https://picsum.photos/id/${i + 100}/300/200`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      });
  }

  return (
    <div className="container-layout">
      <Wordcloud data={keywords}></Wordcloud>

      <Mapbox></Mapbox>
      <Divider/>
      <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
      {searchshow ? (
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
          <Typography.Title
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
          </Button>
        </div>
      ) :null}
      <Divider></Divider>
      <div  style={{display:'flex',justifyContent:'center',alignItems:'center',width:'80vw'}}>
      {galleryData?<List
 
        grid={{
          gutter:10,
          xs:1,
          sm:4
         }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={searchshow ? searchdata : galleryData.results}
        renderItem={(item,index) => (
          <List.Item>
            <ProfileCard
              name={item.description}
              avatar={item.image}
              viewPortWidth={viewPortWidth}
              action={() => {
                navigate("/picpage",{ state:{results:galleryData.results,index:index,item:item}});
              }}
            ></ProfileCard>
          </List.Item>
        )}
      />:null}
      </div>
    </div>
  );
};

export default Gallery;
