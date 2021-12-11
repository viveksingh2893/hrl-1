import {Menu,Layout,Button,Image, Typography} from 'antd'
import img2 from '../assets/image/img1.jpg'
import '../App.less';

const ConceptW=()=>{
    const {Title,Text} =Typography

    return(

        <div style={{display:'flex',flex:1,width:'100vw',margin:5,flexWrap:'wrap',display:'flex',backgroundColor:'#FFFFFF',flexDirection:'row',justifyContent:'space-around'}}>
            <div style={{display:'flex',flex:1,flexBasis:300,justifyContent:'center',alignItem:'center'}}>
           <Image
         
             src={img2}
           />
       </div> 
        <div style={{display:'flex',flex:1,flexShrink:1, flexBasis:300,justifyContent:'flex-start',alignItem:'center',flexDirection:'column',margin:20}}>  
           <Title level={3} style={{display:'flex',justifyContent:'center'}}>
             Mith.AI
           </Title>
           <Text style={{display:'flex',justifyContent:'center'}}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
           labore et dolore magna aliqua. Ut enim ad minim veniam,
           </Text>
           <Text style={{display:'flex',justifyContent:'center'}}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
           labore et dolore magna aliqua. Ut enim ad minim veniam,
           </Text>
           <Text style={{display:'flex',justifyContent:'center'}}>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
           labore et dolore magna aliqua. Ut enim ad minim veniam,
           </Text>
           <Button>Read More</Button>
        </div> 
        
      
        </div>
    )
}

export default ConceptW;