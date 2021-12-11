import { useLocation } from "react-router-dom";
import {Image, Layout,Typography} from 'antd'
import conceptimg from '../assets/image/img2.webp';
import '../App.less'

const Concept=()=>{
    const location=useLocation()
    const {Content}=Layout
    const {Title,Text}=Typography

    return (
       <Layout>
           <Content>
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