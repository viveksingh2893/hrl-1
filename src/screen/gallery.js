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
import ipaddress from '../components/url';

const Gallery = () => {
  const [galleryData,setData]=useState()
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getData=async()=>{
    const data=await axios.get(`${ipaddress}api/gallery`
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
  const keywords = ['dna','hello','summary','hi there','hrlabs','science'];
  const searchdata = [];
  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();
  const paginationdata=async(page)=>{
    console.log(page);
    const data=await axios.get(`${ipaddress}api/gallery?page=${page}`).then(response=>response.data).catch(error=>console.log(error));
    setData(data);
  };
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
            paginationdata(page)
          },
          pageSize: 5,
          total:searchshow?searchdata.count:galleryData.count,
        }}
        dataSource={searchshow ? searchdata.results : galleryData.results}
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
