import { Card,Typography,Button,Image,Divider,Row} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import React, { useEffect,useState } from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PreviewModal=(props)=>{
    const {Title,Text,Paragraph}=Typography;
        let TDate=new Date()
        // let date = new Date( Date.parse(props.date) );

// console.log('aa',TDate,date)
    
const {title,keywords}=props.data()
const keylist=keywords.split(',')
console.log(TDate)
    const textData=(content)=>{
        return(
           
            <Paragraph 
            style={{fontSize:'1.2rem',color:'black'}} 
            copyable={false}>{content}
            </Paragraph>
           
        )
    }
    const imgData=({image,caption})=>{
        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
            marginTop:'1vw', marginBottom:'1vw'}}>
            <Image src={image} width='60vw'/>
            <Text style={{textAlign:'start',width:'60vw',fontWeight:'400'}}>{caption}</Text>
            </div>
        )
    }
    const vidData=(content)=>{
        return(
            <div style={{ position: "relative",
                width: '100%',
                overFlow: "hidden",
                paddingTop: '56.25%',
                marginTop:'1vw', marginBottom:'1vw'}}>
            <iframe src={content} style={{
                 position: 'absolute',
                 top: 0,
                 left: 0,
                 bottom: 0,
                 right: 0,
                 width: "100%",
                 height: "100%",
                 border: "none",
            }}/>
            </div>
        )
    }
return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center' ,alignItems:'center',width:'60vw'}}>
        <div style={{display:'flex',flexDirection:'column',width:'60vw'}}>
            <Title style={{textAlign:'left'}}>{title}</Title>
            <Text style={{textAlign:'left',fontFamily:'Calibri',fontWeight:'700',fontSize:'14px'}}>By {props.author}</Text>
            <Text style={{textAlign:'left',fontFamily:'Calibri',fontWeight:'600',fontSize:'12px'}}>
                {props.date?`${months[props.date.getMonth()]} ${props.date.getDate()} ${props.date.getFullYear()}`:`${months[TDate.getMonth()]} ${TDate.getDate()} ${TDate.getFullYear()}`}
                </Text>
            <Divider></Divider>
            {props.body.map((val,index)=>{
                if(val.type=='text'){
                    console.log(val,'values')
                    return(
                        <div>
                            {textData(val.content)}
                        </div>
                     )
                }else if(val.type=='image'){
                    return(
                        <div>
                            {imgData({image:val.image,caption:val.description})}
                        </div>
                     )
                }else if(val.type=='video'){
                    return(
                        <div>
                            {vidData(val.video)}
                        </div>
                     )
                }
                
            })}
           <Divider>
           </Divider>
            <Row>
             { keylist.map((value,index)=>{

                return(
                    <Button  size='middle'
                    style={{
                    fontFamily:'Calibri',
                    fontWeight:'600',
                    border:'2px solid #666666',
                    margin:'0.2vw'
                    }}>
                    {value.toUpperCase()}
                    </Button>
                   
                

                )
                })
                }       
                 
                 
                 
        </Row>   
            

        </div>
    </div>
)
}

export default PreviewModal;