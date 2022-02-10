import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography, Divider, Image, Button } from "antd";
import { List } from "antd";
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Loader from "../components/spinner";
import ipaddress from "../components/url";
const Blog = () => {
  const [viewPortWidth, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [valuedata, setValue] = useState();
  const [keywords, setKey] = useState([
    "Science",
    "Technology",
    "Healthcare",
    "Medicals",
    "Information System",
  ]);
  const [searchdata, setSearch] = useState();
  const [searchString, setsearchString] = useState();
  const [searchshow, setSearchShow] = useState(false);
  const navigate = useNavigate();
  const { rname } = useParams();
  const getData = async () => {
    const key = await axios
      .get(`${ipaddress}api/keyword`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    {
      key ? setKey(key[`${rname}`].split(",")) : console.log("keywords error");
    }
    const data = await axios
      .get(`${ipaddress}user/get${rname}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    setValue(data);
  };
  useEffect(() => {
    getData();
    setSearch();
    setSearchShow(false);
    setsearchString("");
    window.scrollTo(0, 0);
  }, [rname]);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  const onSearch = async (value) => {
    console.log(value);
    const data = await axios
      .get(`${ipaddress}api/${rname}/search/?search=${value}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    console.log(data, "////////");
    setSearch(data);
    setsearchString(value);
    setSearchShow(true);
  };
  const clearSearch = () => {
    setSearchShow(false);
    setsearchString();
  };
  const { Title, Text } = Typography; 

  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();

  const getRightData = (item) => {
    console.log(item, typeof item, "---------------------------------");

    const text = item.filter((ele) => ele.type == "text");
    const image = item.filter((ele) => ele.type == "image");
    console.log("text...", "image....", text, image);

    return { image: image.length==0?null:image[0].image, content: text[0].content };
    // console.log('getRightData',data)
  };
  const paginationdata = async (page) => {
    console.log(page);
    const data = await axios
      .get(`${ipaddress}user/get${rname}?page=${page}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
    setValue(data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (valuedata == undefined) {
    return <Loader />;
  } else {
    return (
      <div className="container-layout">
        <div className="child-container">
        <div>
          <Wordcloud data={keywords} searchfor={onSearch}></Wordcloud>
        </div>
       
          <Searchbar width="40vw" onSearch={onSearch}></Searchbar>
        
        
          <div className="child-bloglist-container">
            {searchshow ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography.Title
                  level={tlvl}
                  style={{ fontFamily: "calibri" }}
                >{`${searchdata.results.length} SEARCH RESULTS FOR "${searchString}"`}</Typography.Title>
                <Button
                  onClick={clearSearch}
                  type="primary"
                  size="large"
                  style={{
                    border: "none",
                    
                    fontWeight: "600",
                    backgroundColor: "#666666",
                  }}
                >
                  Clear Results
                </Button>
              </div>
            ) : null}

            <List
              itemLayout="vertical"
              grid={{
                column: 1,
              }}
              pagination={{
                onChange: (page) => {
                  paginationdata(page);
                },
                pageSize: 10,
                total: searchshow ? searchdata.count : valuedata.count,
              }}
              dataSource={searchshow ? searchdata.results : valuedata.results}
              renderItem={(item) => {
                return (
                  <List.Item  >
                    <Divider></Divider>
                    <NavLink to={`/read/${rname}/${item.id}/${item.title}`}
                    state={{state:item}}
                    >
                    <div
                    style={{
                      display:'flex',
                  
                  flexBasis:'300px',
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
                     
                    >
                      <div
                        style={{
                          display: "flex",
                          
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                    
                      >
                        <Image
                          width={viewPortWidth > 500 ? "20vw" : "80vw"}
                          preview={false}
                          src={getRightData(item.body).image}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: viewPortWidth > 500 ? "25vw" : "80vw",
                          paddingLeft: "1vw",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                   
                      >
                        <Typography.Title
                        
                          level={4}
                        >
                          {item.title}
                        </Typography.Title>
                        <Typography.Text
                          style={{ fontSize: "1.1rem", textAlign: "justify"}}
                        >
                          {getRightData(item.body).content.slice(0, 200) +
                            "..."}
                          <Typography.Text
                            style={{ fontWeight: "bolder" }}
                          >
                            Read more
                          </Typography.Text>
                        </Typography.Text>
                      </div>
                    </div>
                    </NavLink>
                  </List.Item>
                );
              }}
            />
          </div>
        </div>
        </div>
   
    );
  }
};

export default Blog;
