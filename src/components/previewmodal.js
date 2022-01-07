import { Card,Typography,List,Image,Divider} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';


const PreviewModal=(props)=>{
    const {Title,Text,Paragraph}=Typography;
const {title,keywords}=props.data()
const keylist=keywords.split(',')
console.log(props.body)
    const textData=(content)=>{
        return(
           
            <Paragraph style={{fontSize:'18px',color:'black'}} copyable={false}>{content}</Paragraph>
           
        )
    }
    const imgData=({image,caption})=>{
        return(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
            marginTop:'1vw', marginBottom:'1vw'}}>
            <Image src={image} width='60vw'/>
            <Text style={{textAlign:'start',fontFamily:'Calibri',fontSize:'14px',width:'60vw',fontWeight:'600'}}>{caption}</Text>
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
            <Text style={{textAlign:'left',fontFamily:'Calibri',fontWeight:'700',fontSize:'14px'}}>By Maharaja</Text>
            <Text style={{textAlign:'left',fontFamily:'Calibri',fontWeight:'600',fontSize:'12px'}}>January 03,2022</Text>
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
                            {imgData({image:val.image,caption:val.caption})}
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
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
             { keylist.map((value,index)=>{

                return(
                <div style={{display:'flex',border:'1px solid #666666',padding:'5px',justifyContent:"center",alignItems:'center'}}>
                    <Text>{value}</Text>
                </div>

                )
                })
                }       
                 
                 
                 
        </div>   
            

        </div>
    </div>
)
}

export default PreviewModal;