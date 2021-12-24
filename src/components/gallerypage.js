import { Form, Card, Button,Upload, Input, List, Space, Divider} from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import React from 'react';
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 30,
  },
};
/* eslint-disable no-template-curly-in-string */
/* eslint-enable no-template-curly-in-string */

const GalleryPage1 = () => {
  const { Meta } = Card;
    const [img,setImg]=useState([])
    const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `Keyword${i} Keyword${i+1}`,
    description:
      'location',
    content:
      'Image description',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
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
     <div style={{display:'flex', justifyContent:'center'}}> 
     <div><Form.Item
        name="upload"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter image"
        rules={[
          {
            required: true,
            message: 'Please select your image!!',
          },
        ]}
      >
        <Upload name="logo" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
      </Form.Item></div>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
      <Form.Item
        label="Keywords"
        name="keywords"
        rules={[
          {
            required: true,
            message: 'Please input your keywords!!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Location"
        name="location"
        rules={[
          {
            required: true,
            message: 'Please input your Location!!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Details"
        name="details"
        rules={[
          {
            required: true,
            message: 'Please input your Details!!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item></div></div>
    </Form>
    <Divider/>
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    itemLayout="vertical"
    size="default"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}

    renderItem={item => (
      <Card
    style={{ width: 240 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <DeleteTwoTone twoToneColor="red" onClick={()=>alert("Sure to delete it??")} />,

    ]}
  >
    <Meta
      title={item.title}
      description={item.description}
    />
    <Divider dashed/>
    <i>{item.content}</i>
  </Card>
    )}
  /></Card>
    
  );
};
export default GalleryPage1;