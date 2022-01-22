import { Typography,Image, Input, Button, Divider,Modal } from 'antd';
import { CloseCircleOutlined,DeleteFilled,DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import { useState } from 'react';
// import { useEffect} from 'react';
const { Paragraph } = Typography;
const BlogEdit = (props) => {
  const [visible0,setVisible0]=useState(true)
  const [vidurl,setVidurl]=useState()
    console.log(props,'props')
    const removeText=(val)=>{
        console.log(val,'textdata')
        props.delete(val)
    }
    const editText=(e)=>{
console.log(e,'e')
props.edit(props.data.id,e,props.data.type);
setVisible0(false)
    }
    const editTextvid=(e)=>{
      console.log(e,'e')
    if(e.includes('=')){let a=e.split('=');
      let vidurl='https://www.youtube.com/embed/'+a[1];
      props.edit(props.data.id,vidurl,props.data.type);
      setVisible0(false)
    setVidurl(vidurl)}
          }
 if (props.type=='text') {return (
   <div style={{display: 'flex' ,alignItems:'space-between'}}>
     <Input.TextArea placeholder='add paragraph' onChange={editText}/>
     
   <DeleteOutlined onClick={()=>removeText(props.data.id)} style={{color:'#666666',marginLeft:10}}/></div>
  );}else if(props.type=='image'){return (

    <div style={{display:'flex',flexDirection:'column'}}>

    <div style={{position:'relative'}}>
    
    
    <DeleteOutlined
    style={{display:'flex',flex:1,zIndex:1,fontSize:'24px',color:'#ff0000',
    justifyContent:'center',alignItems:'center',position:'absolute',right:0,margin:10}}
  
   onClick={()=>props.action(props.data.id)}/>
    <Image
    preview={false}
    style={{border:'1px solid blue'}}
    width='40vw'
    src={props.data.image}
  />
    
  </div>
  <Typography.Text mark>{props.data.caption}</Typography.Text>
    
  </div>
  );
}else if(props.type=='video'){return (
  <div style={{display: 'flex' ,border:'1px solid red',alignItems:'center',justifyContent:'space-around',flexDirection:'column',padding:2}}><div style={{display: 'flex' }}>
    {props.data.video?null:
    <Modal 
    centered={true}
    closable={false} 
    destroyOnClose={true} 
    visible={visible0} 
    cancelButtonProps={{ style: { display: 'none' } }} 
    onOk={()=>{if(vidurl.includes('=')){let a=vidurl.split('=');editText('https://www.youtube.com/embed/'+a[1]);setVidurl('https://www.youtube.com/embed/'+a[1]);}}}>
    <Input placeholder='Enter embed video URL' 
    onChange={e=>{setVidurl(e.target.value)}}/></Modal>}
    <Paragraph editable={{onChange:editTextvid}} mark={true} >{props.data.video?props.data.video:vidurl}</Paragraph>
   <DeleteOutlined onClick={()=>removeText(props.data.id)} style={{color:'red' ,marginLeft:10}}/></div>
   <iframe width='480' height='280' src={props.data.video?props.data.video:vidurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
   </div> 
)
}
};
export default BlogEdit;