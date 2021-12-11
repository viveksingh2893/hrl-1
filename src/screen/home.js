import {Menu,Layout,Button,Image, Typography} from 'antd'
import img2 from '../assets/image/img2.webp';
import ConceptW from '../components/conceptwhite';
import ConceptB from '../components/conceptblue';
const Home=()=>{
    const {Sider,Content,Header,Footer} = Layout
    const {Title} = Typography
    return(
        <Content style={{alignItems:'center', width:'100vw',justifyContent:'center', display:'flex',flexDirection:'column'}}>
        
<Image
width='100vw'
preview={false}
src={img2}
/>
<Title level={4} style={{flexWrap:'wrap',fontWeight:'normal',width:'50vw',textAlign:'center',padding:'1.5vw' ,fontSize:'2.5vw'}}>
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
</Title >
 
   <ConceptB/>
   <ConceptW/>
   <ConceptB/>
   <ConceptW/>
   <ConceptB/>
   <ConceptW/>

  

</Content>
    )
}
export default Home;