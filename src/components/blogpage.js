import { Form, Card, Button,Upload ,Input,Divider} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState} from 'react';
import React from 'react';
import uuid from 'react-uuid';
import BlogEdit from "../components/blogedit";
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

    const [img,setImg]=useState()
    const [imglen,setImglen]=useState(0)
    const [textBlock,setTextBlock]=useState([])
// useEffect(()=>{
//     // if (img!=undefined){
//     //   console.log('image added',img[img.length-1].thumbUrl,img.length)
//     // addText('image',img[img.length-1].thumbUrl)
//     // }
//     console.log('1')
// },[textBlock]);
  const onFinish = (values) => {
    console.log(values);
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
    console.log('data3333',e)
    setTextBlock([...textBlock,{
        type:val,image:e,id:uid
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
        content: content,
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
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
 const handleUpload = async({ fileList }) => {
    setImg(fileList)
    if(fileList.length>imglen){
     const preview = await getBase64(fileList[imglen].originFileObj);
    addText('image',preview,fileList[imglen].uid)}
    setImglen(fileList.length)
  };
  const handleRemove = (e) => {
    const textArr= textBlock.filter(item=>item.id!=e.uid)
     setTextBlock(textArr)
  };
  return (
    <Card style={{ alignSelf:'center'  ,backgroundColor: props.color }}>
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
    <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Keywords"
        name="keywords"
        rules={[
          {
            required: true,
            message: 'Please input your keywords!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    {textBlock.length>0? textBlock.map((e,index)=><BlogEdit
  key={index}
  data={e}
  delete={deleteBox}
  edit={editBox}
  type={e.type}
 />):null}
  <Divider />
      <Form.Item wrapperCol={{ ...layout.wrapperCol,offset:5}}  >
      <Button type="outlined" onClick={()=>addText('text')}>
          Add Text
        </Button><Button type="link" onClick={()=>addText('video')}>
          Add Youtube Link
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button></Form.Item>
        <Divider />
        <Form.Item wrapperCol={{ ...layout.wrapperCol,offset:5}}  >
        <Form.Item
        name="upload"
        fileList={img}
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter image"
      >
        <Upload name="logo" maxCount={10} listType="picture" beforeUpload={()=>false} onChange={handleUpload} onRemove={handleRemove} >
          <Button icon={<CloudUploadOutlined />} >Click to upload images (Max: 10)</Button>
        </Upload>
      </Form.Item>
      </Form.Item>
    </Form>
    </Card>
  );
};
export default React.memo(BlogPage);