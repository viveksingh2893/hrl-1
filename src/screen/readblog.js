
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from "react";
import PreviewModal from '../components/previewmodal'
import Loader from '../components/spinner'
const ReadBlog=()=>{
    const incomingData=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
      },[]);
    if (incomingData.state){
        return(
            // <h1>Welcome to Blog</h1>
            <div style={{display:'flex',marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <PreviewModal 
            author={incomingData.state.author}
            date={new Date( Date.parse(incomingData.state.published_date) )}
            data={()=>{
                return (
                {title:incomingData.state.title,
                keywords:incomingData.state.keyword,
                url_source:incomingData.state.url_source,
                source_title:incomingData.state.source_title})}}
            body={incomingData.state.body}/>
            </div>
        )

    }else{
        return (
            <Loader/>
        )
    }
    
}
export default  ReadBlog