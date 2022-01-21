import "../App.less";
import Wordcloud from "../components/wordcloud";
import Searchbar from "../components/searchbar";
import { useEffect, useState } from "react";
import { Typography, Divider, Image, Button} from "antd";
import { List } from "antd";
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import Loader from "../components/spinner";

const Blog = () => {
  const [viewPortWidth, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [valuedata, setValue] = useState();
  const [searchdata, setSearch] = useState();
  const [searchString, setsearchString] = useState();
  const [searchshow, setSearchShow] = useState(false);
  const navigate=useNavigate()
  const {rname}=useParams()
  const getData=async()=>{
    const data=await axios.get(`http://65.1.254.51:6004/user/get${rname}`
    ).then(response=>response.data).catch(error=>console.log(error))
    setValue(data)
  }
  useEffect(()=>{
    getData();
setSearch()
setSearchShow(false)
setsearchString('')
  },[rname])


  useEffect(() => {
 
 
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    });
  }, []);
  
  const onSearch = async(value) => {
    console.log(value)
    const data=await axios.get(`http://65.1.254.51:6004/api/${rname}/search/?search=${value}`
    ).then(response=>response.data).catch(error=>console.log(error))
    console.log(data,'////////')
    setSearch(data)
    setsearchString(value);
    setSearchShow(true);
  };
  const clearSearch = () => {
    setSearchShow(false);
    setsearchString()
  };
  const { Title, Text } = Typography;
  
  const keywords = [];
  
  function txtlvl() {
    if (viewPortWidth > 600) {
      return 3;
    } else {
      return 5;
    }
  }

  let tlvl = txtlvl();

  const getRightData=(item)=>{
      console.log(item,typeof(item),'---------------------------------')
     
      const text=item.filter(ele=>ele.type=='text')
      const image=item.filter(ele=>ele.type=='image')
      console.log('text...','image....',text,image)

      return(
        {image:image[0].image,content:text[0].content}
      )
      
   
      
    
    // console.log('getRightData',data)
   
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if(valuedata==undefined){
    return(
      <Loader/>
    )

  }else{

    return(
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
          >{`${searchdata.results.length} SEARCH RESULTS FOR "${searchString}"`}</Typography.Title>
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
        dataSource={searchshow?searchdata.results:valuedata.results}
        renderItem={(item) => {
        

          return(

     
          
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
              
             
              // alt={()=>Parsedata(item.body)}
              src={getRightData(item.body).image}/>
          </div>
          <div style={{display:'flex',width:viewPortWidth>500?'30vw':'80vw',paddingLeft:'1vw',flexDirection:'column'}}>
            <Typography.Title onClick={()=>{navigate('/readblog',{state:item})}}level={4}>
             {item.title}
            </Typography.Title>
            <Typography.Text style={{fontSize:'1.1rem'}}>
           {getRightData(item.body).content.slice(0,200)+'...'}<Button size='medium'style={{border:'none'}}>
             read more
           </Button>
            </Typography.Text>
          </div>
      </div>
      </List.Item>
        )}}
      />
      </div>
        </div>
      
    </div>
  );
}};

export default Blog;
