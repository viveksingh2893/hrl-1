import { Form, Input, Button,Typography, Space,Upload, Divider, Col,
    Row, DatePicker,Spin} from "antd";
import { MinusCircleOutlined,LoadingOutlined,PlusOutlined} from "@ant-design/icons";
import React,{useState,useEffect} from "react";
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
import ipaddress from "./url";
import axios from "axios";


const config = {
    rules: [
      {
        type: 'object',
        required: false,
        message: 'Please select year!',
      },
    ],
  };
  const rangeConfig = {
    rules: [
      {
        type: 'array',
        required: false,
        message: 'Please select year!',
      },
    ],
  };
const BioForm = ({data,token,onBiochange}) => {

    // const [loading,setLoading]=useState(false)
    const [imgloaded,setimg]=useState('n')
    const [fileList, setFileList] = useState([])
    const [progress, setProgress] = useState(true)
    const {TextArea}=Input;
    const {RangePicker}=DatePicker;
    useEffect(()=>{
  window.scrollTo(0, 0);
    },[data])

  const onFinish = async(values) => {
    console.log(values); 
    const config = {
      headers: { 'content-type': 'application/json',Authorization: `Bearer ${token}` },
    }
    //multipart/form-data
    // var formdata = new FormData();

    // formdata.append("name",values.name);
    const data=await axios.post(`${ipaddress}api/member`,values,config
      ).then(response=>response.data).catch(error=>console.log(error))
    
    {data?alert("Successfully submitted..."):alert('Upload failed...')}
    {data?onBiochange(data):console.log('1')}
    
    // setProgress(false)
      };
    //values.education[0].year.get('year')
  function onChange(date, dateString) {
    console.log(date, dateString);
  };
  const eduInputs =data.education.map((item) => {
    return {
      degree: item.degree,
      university: item.university,
      year: moment(item.year,'YYYY')
    };
  });
  const projectInputs =data.project.map((item) => {
    return {
      title: item.title,
      description: item.description,
      year: moment(item.year,'YYYY')
    };
  });
  const previousInputs =data.preposition.map((item) => {
    return {
      designation: item.designation,
      year:[moment(item.start_year,'YYYY'), moment(item.end_year,'YYYY')]
    };
  });
  const patentInputs =data.patent.map((item) => {
    return {
      description: item.description,
      year: moment(item.year,'YYYY')
    };
  });
  const publicationInputs =data.publication.map((item) => {
    return {
      description: item.description,
      year: moment(item.year,'YYYY')
    };
  });
  const eventInputs =data.event.map((item) => {
    return {
      description: item.description,
      year: moment(item.year,'YYYY')
    };
  });
  const articleInputs =data.article.map((item) => {
    return {
      description: item.description,
      year: moment(item.year,'YYYY')
    };
  });
  const onChangeimg = ({ fileList: newFileList }) => {
    
    setFileList(newFileList);
    if (newFileList[0].response){
      setimg('y')
      console.log('y')
    }console.log('n',fileList,newFileList)
    // setimg('y')
  };
  if(progress){return (
    <div style={{display:'flex',width:'80vw',backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
      <Form onFinish={onFinish}>
          
          <Form.Item name="image_logo"  initialValue={data.image} style={{display:'flex',marginTop:'1vw',justifyContent:'center',alignItems:'center'}}>
          <ImgCrop>
                <Upload name="image" 
                 listType="picture-card"
                 fileList={fileList}
                 onChange={onChangeimg}
                 action={`${ipaddress}api/team/${data.id}`}
                maxCount={1}
                //  beforeUpload={()=>false}
                showUploadList={false} >
                {data.image&&imgloaded=='n' ?<img src={data.image} alt="avatar" style={{ width: '100%' }} />  :fileList.length==1&&fileList[0].response?<img src={fileList[0].response.image} alt="avatar" style={{ width: '100%' }} />: <PlusOutlined/>}
               
               
                </Upload>
                </ImgCrop>
        </Form.Item>
               
            <Form.Item name="name" initialValue={data.name}>
              
            <Input placeholder={data.name?data.name:'Enter your name'}style={{ width: "25vw" }} />
            
            </Form.Item>
            <Form.Item name="email" initialValue={data.email}>
              
              <Input placeholder={data.email?data.email:'Enter your email'} style={{ width: "25vw" }} />
              
              </Form.Item>
              <Form.Item name="designation" initialValue={data.designation}>
              
              <Input placeholder={data.designation?data.designation:'Enter your designation'}style={{ width: "25vw" }} />
              
              </Form.Item>
              <Form.Item name="Phone" >
              
              <Input.Group size="large">
                  
                        <Row gutter={8}>
                        <Form.Item name={["pnone",'code']} noStyle initialValue={'+91'}>
                            <Col span={5}>
                            <Input defaultValue="+91" />
                            </Col>
                            </Form.Item>
                            <Form.Item name={"contact"} noStyle initialValue={data.contact}>
                            <Col span={8}>
                            <Input placeholder={data.contact?data.contact:'Enter your contact number'} />
                            </Col></Form.Item>
                        </Row>
              </Input.Group>
              
              </Form.Item>
              <Form.Item name="bio_sketch" initialValue={data.bio_sketch}>
              
              <Input.TextArea placeholder='Enter you bio' autoSize/>
              
              </Form.Item>
              
          
          <Divider/>
        <Form.Item name="current_position" initialValue={data.current_position}>
          <Input style={{ width: "500px" }} placeholder="current position" />
        </Form.Item>
        <b>Education</b>
        <Form.List name="education" initialValue={eduInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "degree"]}
                    fieldKey={[field.fieldKey, "degree"]}
                  >
                    <Input placeholder="degree" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "university"]}
                    fieldKey={[field.fieldKey, "university"]}
                  >
                    <Input placeholder="university" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <DatePicker onChange={onChange} picker="year" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item >
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
<Divider/>
<b>Previous Positions</b>
<Form.List name="preposition" initialValue={previousInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "designation"]}
                    fieldKey={[field.fieldKey, "designation"]}
                  >
                    <Input placeholder="designation" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...rangeConfig}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <RangePicker picker="year" />
                   </Form.Item>
                  
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider/>
        <b>Projects</b>
        <Form.List name="project" initialValue={projectInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "title"]}
                    fieldKey={[field.fieldKey, "title"]}
                  >
                    <Input placeholder="title" />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                  >
                    <Input placeholder="description" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <DatePicker onChange={onChange} picker="year" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider/>
        <b>Patents</b>
        <Form.List name="patent" initialValue={patentInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  
                  <Form.Item
                    {...field}
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                  >
                    <Input placeholder="patenttitle" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                    <DatePicker onChange={onChange} picker="year" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider/>
        <b>Publications</b>
        <Form.List name="publication" initialValue={publicationInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                  >
                    <TextArea placeholder="Desciption" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <DatePicker  picker="year" />
                  </Form.Item>
                  
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider/>
        <b>Events</b>
        <Form.List name="event" initialValue={eventInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                  >
                    <TextArea placeholder="Desciption" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <DatePicker  picker="year" />
                  </Form.Item>
                  
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Divider/>
        <b>Articles</b>
        <Form.List name="article" initialValue={articleInputs}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "description"]}
                    fieldKey={[field.fieldKey, "description"]}
                  >
                    <TextArea placeholder="Desciption" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "year"]}
                    fieldKey={[field.fieldKey, "year"]}
                  >
                   <DatePicker  picker="year" />
                  </Form.Item>
                  
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item 
        
        >
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Button 
                size='large'
                type="primary"
                style={{
                border:'none',
                fontFamily:'Calibri',
                fontWeight:'600',
                alignItems:'center',
                backgroundColor:'#666666'
                }} htmlType="submit">
                <Typography.Text style={{color:'#ffffff'}}>
                    Save Change
                </Typography.Text>
        </Button>
        </div>
        </Form.Item>
      </Form>
    </div>
  );}else{return(<></>)}
};

export default BioForm;
