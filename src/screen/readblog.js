import { cloneElement } from 'react'
import {useLocation} from 'react-router-dom'
import PreviewModal from '../components/previewmodal'
const ReadBlog=()=>{
    const incomingData=useLocation()
    console.log("item value",incomingData.state)
    if (incomingData.state){
        return(
            // <h1>Welcome to Blog</h1>
            <div style={{display:'flex',marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <PreviewModal 
            data={()=>{
                return (
                {title:incomingData.state.title,
                keywords:incomingData.state.keyword})}}
            body={incomingData.state.bodyjson}/>
            </div>
        )

    }else{
        return (
            <h1>Hello</h1>
        )
    }
    
}
export default  ReadBlog