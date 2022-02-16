import React, { Component } from "react";
import "../App.less";
import { useEffect, useState } from "react";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import Mapbox from "../components/Mapbox";
import { Typography, Divider, List, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileCard from "../components/profilecard";
import ipaddress from "../components/url";
import Loader from "../components/spinner";

const Gallery = () => {
  const [galleryData, setData] = useState();
  const [srchres, setSrchres] = useState("none");
  const [searchdata, setSearch] = useState();
  const [mapData, setMap] = useState([
    { image: "", latitude: 22.15, longitude: 81 },
  ]);
  const [keywords, setKey] = useState([
    "Science",
    "Technology",
    "Healthcare",
    "Medicals",
    "Information System",
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const getData = async () => {
    const key = await axios
      .get(`${ipaddress}api/keyword`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    {
      key ? setKey(key.gallery.split(",")) : console.log("keywords error");
    }
    const map = await axios
      .get(`${ipaddress}api/map`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(map, "mapfetch");
    {
      map ? setMap(map.slice(0,10)) : console.log("keywords error");
    }
    const data = await axios
      .get(`${ipaddress}api/gallery`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(galleryData, "Gallery Data...............");
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  const onSearch = async (value) => {
    const data = await axios
      .get(`${ipaddress}api/gallery/search/?search=${value}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    setSrchres(value);
    setSearch(data);
    setSearchShow(true);
  };
  const clearSearch = () => {
    setSearchShow(false);
    setSrchres();
  };
  const [searchshow, setSearchShow] = useState(false);
  const navigate = useNavigate();

  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();
  const paginationdata = async (page) => {
    console.log(page);
    const data = await axios
      .get(`${ipaddress}api/gallery?page=${page}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    setData(data);
  };
  if (galleryData == undefined) {
    return <Loader />;
  } else {
    return (
      <div className="container-layout">
        <div className='child-container'>
        <Wordcloud data={keywords} searchfor={onSearch}></Wordcloud>

        {!searchshow ? <Mapbox data={mapData}></Mapbox> : null}
        <Divider />
        <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
        {searchshow ? (
          <div
            style={{
              width: "70vw",
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
            >{`${searchdata.count} SEARCH RESULTS FOR "${srchres}"`}</Typography.Title>
            <Button
              onClick={clearSearch}
              type="primary"
              size="large"
              style={{
                border: "none",
                fontFamily: "Calibri",
                fontWeight: "600",
                backgroundColor: "#666666",
              }}
            >
              Clear Results
            </Button>
          </div>
        ) : null}
        <Divider></Divider>
        <div className="conceptcls">
        <div
         className="sectionR"
        > <Typography.Title >Gallery</Typography.Title>
          {galleryData ? (
            <List
           
              grid={{
                gutter: 16,
                xs: 2,
                sm: 5,
              
              }}
              pagination={{
                onChange: (page) => {
                  paginationdata(page);
                },
                pageSize: 20,
                total: searchshow ? searchdata.count : galleryData.count,
              }}
              dataSource={searchshow ? searchdata.results : galleryData.results}
              renderItem={(item, index) => (
                <List.Item>
                  <ProfileCard
                    name={item.description}
                    avatar={item.image}
                    viewPortWidth={viewPortWidth}
                    action={() => {
                      navigate("/picpage", {
                        state: {
                          results: galleryData.results,
                          index: index,
                          item: item,
                        },
                      });
                    }}
                  ></ProfileCard>
                </List.Item>
              )}
            />
          ) : null}
        </div>
      </div>
      </div>
      </div>
    );
  }
};

export default Gallery;
