import { Form, Card, Button,Upload, Input, List, Space, Divider} from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import React from 'react';
const layout = {
  labelCol: {
    span: 30,
  },
  wrapperCol: {
    span: 25,
  },
};
/* eslint-disable no-template-curly-in-string */
/* eslint-enable no-template-curly-in-string */

const ProductPage = (props) => {
  const { TextArea } = Input;
    const [img,setImg]=useState([])
    const [vidurl,setUrl]=useState()
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
    <Card style={{ alignSelf:'center'  ,backgroundColor: props.color }}>
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
     <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'normal'}}> 
     <Form.Item
        label="Product Page"
        name="product page"
        rules={[
          {
            required: true,
            message: 'Please input your Product Page!!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Divider/><Form.Item
        name="upload"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter Poster image"
      >
        <Upload name="logo" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
      </Form.Item><Divider/>
      <b>What Section</b>
      <Form.Item
        label="Text"
        name="what text"
      >
        <TextArea />
      </Form.Item>
      <Divider/>
      <b>Video Section</b>
      <Form.Item
        label="Video Url"
        name="video url"
      >
        <Input onChange={(e)=>{setUrl(e.target.value);console.log(e.target.value)}}/>
       {vidurl? <iframe width="400" height="240" src={vidurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
:null}
</Form.Item>
      <Divider/>
      <b>Why Section</b>
      <div  style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'space-between'}}>
        <Card>
        <Form.Item
        label="Text 1"
        name="how text 1"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how1" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
    
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 2"
        name="how text 2"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how2" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 3"
        name="how text 3"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"
      >
        <Upload name="how3" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
       </div><Divider/>
      <b>How Section</b>
      <div  style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'space-between'}}>
        <Card>
        <Form.Item
        label="Text 1"
        name="how text 1"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how1" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
    
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 2"
        name="how text 2"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how2" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 3"
        name="how text 3"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"
      >
        <Upload name="how3" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
       </div>
       <Divider/>
      <b>New Section</b>
      <div  style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'space-between'}}>
        <Card>
        <Form.Item
        label="Text 1"
        name="how text 1"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how1" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
    
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 2"
        name="how text 2"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how2" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 3"
        name="how text 3"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"
      >
        <Upload name="how3" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
       </div>
      <Divider/>
      <b>Modal Section</b>
      <div  style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'space-between'}}>
        <Card>
        <Form.Item
        label="Text 1"
        name="how text 1"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how1" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
    
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 2"
        name="how text 2"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how2" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 3"
        name="how text 3"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"
      >
        <Upload name="how3" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
       </div>
      <Divider/>
      <b>Where Section</b>
      <div  style={{display:'flex',flexDirection:'row',flexWrap: "wrap",justifyContent:'space-between'}}>
        <Card>
        <Form.Item
        label="Text 1"
        name="how text 1"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how1" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
    
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 2"
        name="how text 2"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"

      >
        <Upload name="how2" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
        <Card>
        <Form.Item
        label="Text 3"
        name="how text 3"
      >
        <TextArea />
        </Form.Item>
        <Form.Item
        name="why image"
        fileList={img}
        label='Upload'
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Enter 1 images"
      >
        <Upload name="how3" maxCount={1} listType="picture-card" beforeUpload={()=>false}>
        {img.length < 1 && '+ Upload'}
        </Upload>
     
      </Form.Item>
        </Card>
       </div>
      </div>
      <Divider/>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Card>
    
  );
};
export default ProductPage;