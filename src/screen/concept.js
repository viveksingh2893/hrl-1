import React, { useEffect,useState } from "react";
import conceptimg from "../assets/image/IMG 2.1.jpg";
import axios from 'axios'
import {MailOutlined} from '@ant-design/icons'
import "../App.less";
import '../assets/css/style.css'
import { Image,List, Typography, Divider, Menu } from "antd";
import ProfileCard from "../components/profilecard";



import Descard from "../components/descard";
import Videobox from "../components/videobox";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/spinner";
import ipaddress from '../components/url';


const Concept = () => {
  const [conceptData,setData]=useState()
  const [viewPortWidth, setWidth] = useState(0);
  const conceptname=useLocation()
  const {name}=useParams()
  const navigate=useNavigate()
  console.log('concept name.....',conceptname.state)
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  const {Title,Text}=Typography
  const getData= async ()=>{
    const data=await axios.get(`${ipaddress}concept/${name}/`
      ).then(response=>response.data).catch(error=>console.log(error))
  
      console.log("...........data",data)
      setData(data)
    
    }
  
    useEffect(()=>{
  
      getData();
      window.scrollTo(0,0)
    },[name])

  

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  console.log('data',conceptData)
  
  // useEffect(()=>{
  //   window.scrollTo(0,0)
    
  // },[])

  
  if (conceptData==undefined){
    return (
      <Loader/>
    )

  }else{
  return (

    <div style={{
      
       
        justifyContent: "center",
        
      
        background:'#fffbeb',
        display: "flex",
        flex:1,
        marginTop:80,
        alignItems:'center',
        flexDirection: "column",}}>
          <div 
          style={{display:'flex',position:'fixed',
          zIndex:'2',
          top:80,
          right:'0vw',
          }}>
           <Menu 
           mode='inline'
           >

             <Menu.SubMenu
             key="sub1"
             >
             <Menu.Item 
             onClick={()=>{
               window.location='#what'
             }}>
              What

             </Menu.Item>
             <Menu.Item
             onClick={()=>{
              window.location='#demo'
            }}>
             Demo

             </Menu.Item>

             <Menu.Item
             onClick={()=>{
              window.location='#why'
            }}>
               Why 

             </Menu.Item>

             <Menu.Item
              onClick={()=>{
              window.location='#how'}}
              >
               How 

             </Menu.Item>
             <Menu.Item
              onClick={()=>{
              window.location='#new'}}>
              New  

             </Menu.Item>
             <Menu.Item
                onClick={()=>{
                window.location='#model'}}
             >
              Model 

             </Menu.Item>
             <Menu.Item
                onClick={()=>{
                window.location='#where'}}
             >
              Where 

             </Menu.Item>
             </Menu.SubMenu>
             
           </Menu>
          </div>
         
    
        <Image width="100vw" style={{marginBottom:10}} preview={false} src={conceptimg} />
        <div id='what' className='conceptcls'>
          <div className='sectiontext'>
            <Title>What</Title>

            <Descard level={3} txt={conceptData.what} /> 
            </div>

        </div>
        <Divider ></Divider>   
        <div  
        id='demo'
        className='conceptcls'
        > 
        <div className='sectiontext'>
            
          <Title >Demo</Title>
          <Videobox width="60vw"  link={conceptData.video_url}></Videobox>
         
        </div>
        </div>
        <Divider></Divider>
        <div id='why'
        className='conceptcls'
        >
          <div className='sectiontext'>

         
          <Title>Why?</Title>
          
        <div className="concept-three-section">
          
         
          {conceptData.why.map((item,indx)=>{
            return(
              <div>
                <Image className='concept-three-image'src={item.image}/>
              </div>

            )
          })}
           </div>
        
        </div>
        </div>
        <Divider></Divider>
        <div className='conceptcls' id='how'>
        <div className="sectionR">
        <Title>How?</Title>
        {conceptData.how.map((item,indx)=>{

          return(
            <div>
               <Descard txt={item.description}></Descard>
                <Image
                  src={item.image}
                  preview={false}
                  className='conceptimage'
                />
            </div>
          )
        })}
       
       </div>
        </div>
        <Divider></Divider>
        <div 
         className='conceptcls' id='new'
        > 
          <div className="sectionR">
          <Title >New</Title>
      
        
        <div className="concept-three-section">
          {conceptData.new.map((item,indx)=>{
            return(
              <div>
                <Image className='concept-three-image'src={item.image}/>
              </div>

            )
          })}
          </div>
        </div>
        </div>
          <Divider></Divider>
          <div id='model'
          className="conceptcls"

        >
            <div className="sectionR">

      
       
        <Title >Model</Title>
        {conceptData.model.map((item,index)=>{
          return(
            <div>
              <Descard txt={item.description}></Descard>
              <Image
                src={item.image}
                preview={false}
                className='conceptimage'
              />
              </div>
          )
        })}
       </div>
        </div>
        <Divider></Divider>
        <div id='where'
          className="conceptcls"
        >
           <div className="sectionR">

        

        <Title  >Where?</Title>
        {conceptData.where.map((item,index)=>{
          return(
            <div>
              <Descard txt={item.description}></Descard>
              <Image
                className='conceptimage'
                src={item.image}
                preview={false}
                
              />
              </div>
          )
        })}
        </div>
        </div>
        <Divider></Divider>
       
       
        
        <div
         className='conceptcls'
        >
           <div className="sectionR">

          <Title style={{border:'1px solid black'}}>Gallery</Title>
          <Descard level={3} txt={conceptData.gallerytext} /> 
      {conceptData.gallery.length!=0?<List
 
      grid={{
        gutter:16,
        xs:2,
      sm:4,
     
    }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 16,
      }}
      dataSource={conceptData.gallery}
      renderItem={(item) => (
        <List.Item>
         
          <ProfileCard
            name={item.name}
            avatar={item.image}
            viewPortWidth={viewPortWidth}
            action={() => {
              navigate("/picpage",{state:{id:item.id}});
            }}
     ></ProfileCard>
     
   </List.Item>
 )}
/>:null}

         </div>
         </div>
        
       
      </div>)}
  
};

export default Concept;
