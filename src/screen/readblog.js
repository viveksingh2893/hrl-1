
import {useLocation,useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import PreviewModal from '../components/previewmodal'
import Loader from '../components/spinner'
import ipaddress from "../components/url";
import axios from 'axios'
const ReadBlog=()=>{
    const incomingData=useLocation()
    const [currentdata,setData]=useState()
    console.log(".............",incomingData)
    const {name,bID,blogID} =useParams()
    const getData= async ()=>{
        const data=await axios.get(`${ipaddress}api/${name}/${bID}/${blogID}`
          )
          .then(response=>response.data)
          .catch(error=>console.log(error))
          console.log("memberData.............",data)
          setData(data)
        }

        useEffect(()=>{
            console.log(name,bID,blogID,'####')
          if(name){
            getData();
            window.scrollTo(0,0)
          }
        },[name])
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
    if (incomingData.state){
        return(
            <div style={{display:'flex',marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <PreviewModal 
            author={incomingData.state.state.author}
            date={new Date( Date.parse(incomingData.state.state.published_date) )}
            data={()=>{
                return (
                {title:incomingData.state.state.title,
                keywords:incomingData.state.state.keyword,
                url_source:incomingData.state.state.url_source,
                source_title:incomingData.state.state.source_title})}}
            body={incomingData.state.state.body}/>
            </div>
        )
    }else if(currentdata){
        return(
            <div style={{display:'flex',marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <PreviewModal 
            author={currentdata.author}
            date={new Date( Date.parse(currentdata.published_date) )}
            data={()=>{
                return (
                {title:currentdata.title,
                keywords:currentdata.keyword,
                url_source:currentdata.url_source,
                source_title:currentdata.source_title})}}
            body={currentdata.body}/>
            </div>
        )
    }else{
        return (
            <Loader/>
        )
    }
    
}
export default  ReadBlog