import { Form, Card, Button,Upload ,Input,Divider,Modal, Typography,Popconfirm, message} from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import { useState} from 'react';
import React from 'react';
import uuid from 'react-uuid';
import BlogEdit from "../components/blogedit";
import PreviewModal from './previewmodal';
import axios from 'axios';
import ImgCrop from 'antd-img-crop';
import ipaddress from './url';
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
    const [description,setdescription]=useState()
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
  const onFinish = async (values) => {
var formdata = new FormData();
formdata.append("title",values.title);
formdata.append("keyword",values.keywords);
formdata.append("body",JSON.stringify(textBlock));

const config = {
  headers: { 'content-type': 'multipart/form-data',Authorization: `Bearer ${props.token}` }
}

const data=await axios.post(`${ipaddress}user/${props.url}`,formdata,config
  ).then(response=>response.data).catch(error=>console.log(error))
  {data?message.success("Successfully submitted..."):message.error('Upload failed...')}
  // console.log(data)
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
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
        type:val,image:e.image,id:uid,description:e.description
        }])
}else if(val=='video'){
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
      headers: { 'content-type': 'multipart/form-data',Authorization: `Bearer ${props.token}` }
  }

    const data=await axios.post(`${ipaddress}imgupload`,body,config
      ).then(response=>response.data).catch(error=>console.log(error))
      addText('image',{image:data.image,description:data.description},data.uid)
      {data?message.success("Successfully updated image."):message.error('Upload failed...')}
    
    }
  const Demo=()=>{
    console.log(img,'image',description)
    // const data = new FormData();
    // data.append("posterimage0", img[img.length-1].originFileObj);
    console.log(description,'before send')
    if (description!=undefined){setVisible0(false);
      const data = new FormData();
    data.append("image", img[img.length-1].originFileObj);
    data.append("uid",img[img.length-1].uid);
    data.append("description",description)
   postData(data)
      setdescription()}
  }
 const handleUpload = async({ fileList: newFileList   }) => {
    setImg(newFileList )
    console.log(newFileList,'ind upload',newFileList.length,imglen)
    if(newFileList.length>imglen){
    setVisible0(true)}
    setImglen(newFileList.length)
  };
  const handleRemove = (uid) => {
    const textArr= textBlock.filter(item=>item.id!=uid)
     setTextBlock(textArr)
  };
  function confirm(e) {
    message.success('Click on Yes');
    form.submit()
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  return (
    <Card 
        style={{ alignSelf:'center',
        backgroundColor: props.color,
        display:'flex',
        justifyContent:'center',
        alignItems:'center' }}>
      <Modal 
          centered={true} 
          closable={false} 
          destroyOnClose={true} 
          visible={visible0} 
          cancelButtonProps={{ style: { display: 'none' } }} 
          onOk={Demo}>
          <Input 
              placeholder='Enter image description' 
              onChange={e=>{setdescription(e.target.value)}}/>
        </Modal>
        <Modal width='80vw' style={{display:'flex',justifyContent:'center',alignItems:'center'}} visible={visible1} closable={false} cancelButtonProps={{ style: { display: 'none' } }} onOk={()=>setVisible1(false)}>
        <PreviewModal 
          data={()=>{
          const values = form.getFieldsValue(['title','keywords','url_source','source_title']);
          return values;}} body={textBlock} author={props.author}/>
        </Modal>
    <Form 
      name='userForm'
      form={form}  
      style={{justifyContent:'center',
      alignItems:'center'}} 
      name="nest-messages" 
      onFinish={onFinish}>
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
      <Form.Item
        name="source_title"
      >
        <Input.TextArea multiple={true} style={{height:'5vh',fontFamily:'Calibri',fontSize:'14px'}} placeholder='source text here'/>
        
      </Form.Item>
      <Form.Item
        name="url_source"
      >
        <Input.TextArea multiple={true} style={{height:'5vh',fontFamily:'Calibri',fontSize:'14px'}} placeholder=' source url here'/>
        
      </Form.Item>
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
        <Upload name="logo" maxCount={20} listType="picture"  onChange={handleUpload} onRemove={handleRemove}
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
        onClick={()=>{const values = form.getFieldsValue(['title','keywords']);
        const {title,keywords}=values;if(title&&keywords){setVisible1(true)}else{
          message.error('Enter title,keywords and body.')
        }}}
                type="primary"
                size='large'
                style={{border:'none',
                fontFamily:'Calibri',
                fontWeight:'600',
                backgroundColor:'#666666'
                }}>
                <Typography.Text style={{color:'#ffffff'}}>PREVIEW</Typography.Text>
        </Button>
        <Popconfirm
    title={`Are you sure to submit this ${props.url.substring(0,4)}?`}
    onConfirm={confirm}
    
    
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
        <Button type="primary" 
        ht
        style={{
              border:'none',
              fontFamily:'Calibri',
              fontWeight:'600',
              backgroundColor:'#666666'}} 
          size="large" >
         <Typography.Text style={{color:'#ffffff'}}>SUBMIT</Typography.Text>
        </Button></Popconfirm>
        </div>
        </Form.Item>
      
       
       
    </Form>
    </Card>
  );
};
export default React.memo(BlogPage);