import {Menu,Layout,Button,Image, Typography} from 'antd'
import img2 from '../assets/image/IMG 0.4.png'
import '../App.less';

const ConceptW=()=>{
    const {Title,Text} =Typography
    

    return(

        <Layout.Content >
            <div style={{display:'flex',flex:1,flexWrap:'wrap',display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:'#ffd633',width:'80vw'}}>
            
            <div style={{display:'flex',flexBasis:300,justifyContent:'center',alignItems:'center',padding:5}}>
           <Image
           height="40vh"
           
         
             src={img2}
           />
       </div> 
        <div style={{display:'flex',flexShrink:1, flexBasis:300,justifyContent:'flex-start',alignItem:'center',flexDirection:'column'}}>  
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
        
      
        </Layout.Content>
    )
}

export default ConceptW;