import { Form, Card, Button,Upload ,Input,Divider,Modal, Typography} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState} from 'react';
import React from 'react';
import uuid from 'react-uuid';
import BlogEdit from "../components/blogedit";
import PreviewModal from './previewmodal';
import axios from 'axios';
import ImgCrop from 'antd-img-crop';
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 10,
  },
};
/* eslint-disable no-template-curly-in-string */
/* eslint-enable no-template-curly-in-string */
const BlogPage = (props) => {
  

    const [img,setImg]=useState([])
    const [imglen,setImglen]=useState(0)
    const [textBlock,setTextBlock]=useState([])
    const [caption,setCaption]=useState()
    const [visible0,setVisible0]=useState(false)
    const [visible1,setVisible1]=useState(false)
// useEffect(()=>{
//     // if (img!=undefined){
//     //   console.log('image added',img[img.length-1].thumbUrl,img.length)
//     // addText('image',img[img.length-1].thumbUrl)
//     // }
//     console.log('1')
// },[textBlock]);
const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values,'vahhh');
    console.log(textBlock,'body data');
var formdata = new FormData();
console.log(img.length,'length of image list')
for (let i = 0; i < img.length; i++) {
  formdata.append("posterimage"+i,img[i].originFileObj);
} 
var requestOptions = {
mode: 'no-cors',
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:8000/homepage", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  };
  const normFile = (e) => {
    console.log('Upload event:', e.fileList);
    if (Array.isArray(e)) {
        console.log('Upload event1111:', e);
      return e;
    }
  
    return e && e.fileList;
  };

  const addText=(val,e,uid)=>{
      if(val=='text'){
setTextBlock([...textBlock,{
type:val,content:'',id:uuid()
}])}else if(val=='image'){
    // console.log(img[0].originFileObj.name,'image name')
    // console.log('data3333',e)
    setTextBlock([...textBlock,{
        type:val,image:e.image,id:uid,caption:e.caption
        }])
}else if(val=='video'){
  // console.log(img[0].originFileObj.name,'image name')
  console.log('video link')
  setTextBlock([...textBlock,{
      type:val,video:'',id:uuid()
      }])
}
  }
const editBox=(id,content,type)=>{
    const index = textBlock.findIndex((el) => el.id == id);
    {type=='text'?textBlock[index] = {
        id:id,
        content: content.target.value,
        type:type
    }:textBlock[index] = {
      id:id,
      video: content,
      type:type
  }}
    setTextBlock(textBlock)
}
  const deleteBox=(id)=>{
     const textArr= textBlock.filter(item=>item.id!=id)
     console.log('after delete',textArr)
     setTextBlock(textArr)
  }
  // function getBase64(file) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
      
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }
  const postData= async (body)=>{
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
  }

    const data=await axios.post('http://192.168.29.198:8000/imgupload',body,config
      ).then(response=>response.data).catch(error=>console.log(error))
  
      console.log(data)
      addText('image',{image:data.image,caption:data.caption},data.uid)
    
    }
  const Demo=()=>{
    console.log(img,'image',caption)
    // const data = new FormData();
    // data.append("posterimage0", img[img.length-1].originFileObj);
    console.log(caption,'before send')
    if (caption!=undefined){setVisible0(false);
      const data = new FormData();
    data.append("image", img[img.length-1].originFileObj);
    data.append("uid",img[img.length-1].uid);
    data.append("caption",caption)
   postData(data)
      setCaption()}
  }
 const handleUpload = async({ fileList }) => {
    setImg(fileList)
    console.log(fileList,'ind upload',fileList.length,imglen)
    if(fileList.length>imglen){
    setVisible0(true)}
    setImglen(fileList.length)

    
  
  };
  const handleRemove = (uid) => {
    const textArr= textBlock.filter(item=>item.id!=uid)
     setTextBlock(textArr)
  };

  return (
    <Card style={{ alignSelf:'center'  ,backgroundColor: props.color,display:'flex',justifyContent:'center',alignItems:'center' }}>
      <Modal centered={true} closable={false} destroyOnClose={true} visible={visible0} cancelButtonProps={{ style: { display: 'none' } }} onOk={Demo}><Input placeholder='Enter image caption' onChange={e=>{setCaption(e.target.value)}}/></Modal>
      <Modal width='80vw' style={{display:'flex',justifyContent:'center',alignItems:'center'}} visible={visible1} closable={false} cancelButtonProps={{ style: { display: 'none' } }} onOk={()=>setVisible1(false)}><PreviewModal data={()=>{const values = form.getFieldsValue(['title','keywords']);return values;}} body={textBlock}/></Modal>
    <Form form={form}  style={{justifyContent:'center',alignItems:'center'}} name="nest-messages" onFinish={onFinish}>
    <Form.Item
        // label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
      >
        <Input style={{height:'10vh',fontFamily:'Calibri',fontSize:'20px'}} placeholder='Give title to your Blog' />
      </Form.Item>
      <Divider></Divider>
      <Form.Item
        name="keywords"
        rules={[
          {
            required: true,
            message: 'Please input your keywords!',
          },
        ]}
      >
        <Input.TextArea multiple={true} style={{height:'10vh',fontFamily:'Calibri',fontSize:'14px'}} placeholder='Write keyword here'/>
        
      </Form.Item>
      <Typography.Text style={{fontSize:'11px',fontWeight:'bold'}}>*please use COMMA(,) to seperate keywords </Typography.Text>
      <Divider/>
    {textBlock.length>0? textBlock.map((e,index)=><div><Divider></Divider><BlogEdit
  key={index}
  data={e}
  delete={deleteBox}
  edit={editBox}
  action={handleRemove}
  type={e.type}
 /></div>):null}
  <Divider />
      <Form.Item wrapperCol={{ ...layout.wrapperCol}} 
      style={{display:'flex',
      alignItems:'center',
      justifyContent:'flex-start'}}
       name="upload"
       fileList={img}
      
       valuePropName="fileList"
       getValueFromEvent={normFile}
      
      >
        <div 
          style={{display:'flex',
          width:'25vw',
          justifyContent:'space-around',
          }}>
        <Button type="outlined" onClick={()=>addText('text')}>
          Add Text
        </Button>
        <Button type="link"  onClick={()=>addText('video')}>
          Add Youtube Link
        </Button>
       <ImgCrop aspect={16/9}>
        <Upload name="logo" maxCount={20} listType="picture" beforeUpload={()=>false} onChange={handleUpload} onRemove={handleRemove}
        showUploadList={false} >
          <Button icon={<CloudUploadOutlined />} >Upload Image</Button>
        </Upload>
        </ImgCrop>
        </div>

        </Form.Item>
        <Divider></Divider>
        <Form.Item 
        style={{display:'flex',
        width:'40vw',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        }} >
          <div style={{display:'flex',
          flexDirection:'row',
          width:'20vw',
         
          justifyContent:'space-between',
          alignItems:'center'}}>
        <Button 
        onClick={()=>{setVisible1(true)}}
                type="primary"
                size='large'
                style={{border:'none',
                fontFamily:'Calibri',
                fontWeight:'600',
                backgroundColor:'#666666'
                }}>
                <Typography.Text style={{color:'#ffffff'}}>PREVIEW</Typography.Text>
        </Button>

        <Button type="primary" 
        style={{
              border:'none',
              fontFamily:'Calibri',
              fontWeight:'600',
              backgroundColor:'#666666'}} 
          size="large" htmlType="submit">
         <Typography.Text style={{color:'#ffffff'}}>SUBMIT</Typography.Text>
        </Button>
        </div>
        </Form.Item>
      
       
       
    </Form>
    </Card>
  );
};
export default React.memo(BlogPage);