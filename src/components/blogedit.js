import { Typography,Image } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react';
// import { useEffect} from 'react';
const { Paragraph } = Typography;
const BlogEdit = (props) => {
    console.log(props,'props')
    const removeText=(val)=>{
        console.log(val,'textdata')
        props.delete(val)
    }
    const editText=(e)=>{
console.log(e,'e')
props.edit(props.data.id,e,props.data.type)
    }
 if (props.type=='text') {return (
   <div style={{display: 'flex' ,alignItems:'space-between'}}><Paragraph keyboard={true}editable={{onChange:editText}} >{props.data.content?props.data.content:'write here'}</Paragraph>
   <CloseCircleOutlined onClick={()=>removeText(props.data.id)} style={{color:'red',marginLeft:10}}/></div>
  );}else if(props.type=='image'){return (
    <Image
    height={100}
    width={100}
    src={props.data.image}
  />
  );
}else if(props.type=='video'){return (
  <div style={{display: 'flex' ,alignItems:'flex-start',flexDirection:'column',padding:10}}><div style={{display: 'flex' }}><Paragraph editable={{onChange:editText}} mark={true} >{props.data.video?props.data.video:'video link'}</Paragraph>
   <CloseCircleOutlined onClick={()=>removeText(props.data.id)} style={{color:'red' ,marginLeft:10}}/></div>
   <iframe width="400" height="240" src={props.data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
   </div>
)
}
};
export default React.memo(BlogEdit);