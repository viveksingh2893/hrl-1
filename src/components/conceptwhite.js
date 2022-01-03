import {Menu,Layout,Button,Image, Typography} from 'antd'

import '../App.less';
import '../assets/css/style.css'

const ConceptW=(props)=>{
    const {Title,Text} =Typography
    

    return(

        <Layout.Content >
            <div style=
            {{display:'flex',flex:1,flexWrap:'wrap',display:'flex',padding:'2vw',justifyContent:'space-around',
            backgroundColor:'#ffd633',width:'100vw'}}>
            
            <div style={{display:'flex',flex:1,flexBasis:200,justifyContent:'center',alignItems:'center'}}>
           <Image
           height="40vh"
           
         
             src={props.img}
           />
       </div> 
        <div 
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          
        }}>  
           <Title level={2} style={{display:'flex',justifyContent:'center'}}>
            {props.title}
           </Title>
           <Text style={{display:'flex',justifyContent:'center',fontSize:'calc(11px + 0.5vw)',fontFamily:'Calibri'}}>
          {props.text}
           </Text>
        

           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Button onClick={props.navigation} style={{width:'calc(100px + 1vw)',margin:'0.5vw',fontFamily:'Calibri',fontWeight:'600',backgroundColor:'#666666',color:'#ffcc00'}}>{props.btitle}</Button>
           </div>
        </div> 
        </div>
        
      
        </Layout.Content>
    )
}

export default ConceptW;