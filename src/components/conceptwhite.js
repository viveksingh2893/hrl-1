import {Menu,Layout,Button,Image, Typography,Col} from 'antd'

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
         width={props.width>576?"40vw":'80vw'}
           
         
             src={props.img}
           />
       {/* </div>  */}
        <div 
        style={{
          display: "flex",
          flex: props.flexsize,
          flexShrink: 1,
          flexBasis: 300,
          paddingLeft:'1vw',
          justifyContent: "flex-start",
          alignItem: "center",
          flexDirection: "column",
          
        }}>  
           <Title level={2} style={{display:'flex',justifyContent:'flex-start'}}>
            {props.title.toUpperCase()}
           </Title>
           <Text style={{display:'flex',justifyContent:'center'}}>
          {props.text}
           </Text>
        

           <Col style={{display:'flex',
           alignItems:'center',
           justifyContent:'center',
           flexDirection:'column'}}>
           <Button onClick={props.navigation} 
            
             size='large'
             style={{border:'none',
             
             fontWeight:'400',
             margin:2,
             hover:{
               color:'#ffcc00'
             }
          
            
             }}>
              <Typography.Title level={4}>{props.b1title}</Typography.Title>
          </Button>
          <Button onClick={props.navigation} 
             
             size='large'
             style={{border:'none',
             
             fontWeight:'400',
             margin:2,
            
             }}>
             <Typography.Title level={4}>{props.b2title}</Typography.Title>
          </Button>
           <Button onClick={props.navigation} 
             
             size='large'
             style={{border:'none',
            
             fontWeight:'400',margin:2,
             
             }}>
               <Typography.Title level={4}>{props.b3title}</Typography.Title>
             {/* {props.b3title} */}
          </Button>
          <Button onClick={props.navigation} 
             
             size='large'
             style={{border:'none',
            
             fontWeight:'400',margin:2,
             backgroundColor:'#666666',
             color:'#ffffff'
             
             }}>
             {props.b4title}
          </Button>
           </Col>
        </div> 
        </div>
        
      
      
    )
}

export default ConceptW;