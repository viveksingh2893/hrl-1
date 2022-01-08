import {Menu,Layout,Button,Image, Typography} from 'antd'

import '../App.less';
import '../assets/css/style.css'

const ConceptW=(props)=>{
    const {Title,Text} =Typography
    

    return(

     
            <div 
            style=
            {{display:'flex',
            flex:1,
            flexWrap:'wrap',
            justifyContent:'space-around',
            

           
            width:'80vw'}}>
            
            {/* <div style={{display:'flex',flex:1,
            flexBasis:200,
            justifyContent:'center',
            alignItems:'flex-end',
            border:'1px solid green'}}> */}
           <Image
         width={props.width>700?"30vw":'80vw'}
           
         
             src={props.img}
           />
       {/* </div>  */}
        <div 
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          padding:'2vw',
          justifyContent: "flex-start",
          alignItem: "center",
          flexDirection: "column",
          
        }}>  
           <Title level={2} style={{display:'flex',justifyContent:'flex-start'}}>
            {props.title}
           </Title>
           <Text style={{display:'flex',justifyContent:'center'}}>
          {props.text}
           </Text>
        

           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
           <Button onClick={props.navigation} 
             type="primary"
             size='large'
             style={{border:'none',
             fontFamily:'Calibri',
             fontWeight:'600',
             backgroundColor:'#666666'
             }}>
             {props.btitle.toUpperCase()}
          </Button>
           </div>
        </div> 
        </div>
        
      
      
    )
}

export default ConceptW;