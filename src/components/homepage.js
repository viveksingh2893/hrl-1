import { Form, Card, Button,Upload,Input,Divider } from 'antd';
import { UploadOutlined} from '@ant-design/icons';
import { useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 20,
  },
};
/* eslint-disable no-template-curly-in-string */
/* eslint-enable no-template-curly-in-string */

const HomePage = () => {
    const [img,setImg]=useState()
    const { TextArea } = Input;
  const onFinish = (values) => {
    console.log(values);
var formdata = new FormData();
// const fileInput = document.querySelector('#your-file-input') ;
console.log(img.length,'length of image list')
//formdata.append("posterimage",img[0].originFileObj);//use fileList prop in Form.Item component so that files will be stored locally in fileList.originFileObj
//formdata.append("posterimage2",img[1].originFileObj);
// console.log(img[0].originFileObj,'img')
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
    console.log('Upload event:', e);
  setImg(e.fileList)
    if (Array.isArray(e)) {

      return e;
    }
  
    return e && e.fileList;
  };
  return (
    <Card style={{ alignSelf:'center'  ,backgroundColor: 'lightblue' }}>
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name="upload"
        fileList={img}
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter image"
        beforeUpload={()=>false}
      >
        <Upload name="logo" maxCount={2} listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload (Max: 2)</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Description"
        name="what text"
      >
        <TextArea />
      </Form.Item>
      <Divider/>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></Card>
  );
};


// import { Input, Space,Card,Button } from 'antd';
// import {useState} from 'react'
// import {useNavigate} from "react-router-dom";
// const HomePage=()=>{
//     const navigate = useNavigate();
//     const [email,setEmail]=useState('')
//     const [passwrd,setPasswrd]=useState('')
// const sendData=()=>{
// console.log(email,'email data',passwrd,'password')
// navigate(`/admin`)
// }
// const updateEmail = (event) => {
//     setEmail(event.target.value);
//   };
//   const updatePasswrd = (event) => {
//     setPasswrd(event.target.value);
//   };
//     return(
//         <Card style={{ alignSelf:'center'}}>
//         <Space direction="vertical">
//     <Input placeholder="Enter Page name" value={email} onChange={updateEmail}/>
//     <Input.Password placeholder="input password" value={passwrd} onChange={updatePasswrd} />
//     <Button type="primary" block onClick={sendData}>
//       HomePage
//     </Button>
//   </Space>
//   </Card>
//     )
// }
export default HomePage;