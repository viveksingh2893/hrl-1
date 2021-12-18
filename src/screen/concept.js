import { useLocation } from "react-router-dom";
import {Image, Layout,Typography} from 'antd'
import conceptimg from '../assets/image/IMG00.2A.jpeg';
import '../App.less'

const Concept=()=>{
    const location=useLocation()
    const {Content}=Layout
    const {Title,Text}=Typography

    return (
       <Layout>
           <Content style={{display:'flex',justifyContent:'center',backgroundColor:'#DBEC1B',}}>
               
               <Image
               src={conceptimg}/>  
               
           </Content>
           <Title class="title">
           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
           </Title>
           <Title level={3}>
           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
           </Title>
           
       </Layout>
    )
}

export default Concept;