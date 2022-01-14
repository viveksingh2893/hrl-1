import { Form, Input, Button,Typography, Space,Upload, Divider, Col,
    Row, DatePicker} from "antd";
import { MinusCircleOutlined,LoadingOutlined,PlusOutlined} from "@ant-design/icons";
import React,{useState} from "react";
import ImgCrop from 'antd-img-crop';
import moment from 'moment';
const order = {
items:[{'degree':'be','university':'iit','eduyear':2020}]
};
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
        message: 'Please select time!',
      },
    ],
  };
const BioForm = () => {

    const [loading,setLoading]=useState(false)
    const [imgurl,setUrl]=useState()
    const {TextArea}=Input;
    const {RangePicker}=DatePicker;
  const onFinish = (values) => {
    console.log(values);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const eduInputs = order.items.map((item) => {
    return {
      degree: item.degree,
      university: item.university,
      eduyear: moment(item.eduyear,'YYYY')
    };
  });
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div style={{display:'flex',width:'80vw',backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>
      <Form onFinish={onFinish}
     >
          
          <Form.Item name="img"  initialValue={order.carrier} style={{display:'flex',marginTop:'1vw',justifyContent:'center',alignItems:'center'}}>
          <ImgCrop>
                <Upload name="logo" 
                 listType="picture-card"
                maxCount={1} beforeUpload={()=>false}
                showUploadList={false} >

                {imgurl==undefined ? <img src={imgurl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
               
                </Upload>
                </ImgCrop>
        </Form.Item>
              
            <Form.Item name="Name" initialValue='Enter your name'>
              
            <Input placeholder='Name'style={{ width: "25vw" }} />
            
            </Form.Item>
            <Form.Item name="Email" initialValue='Enter your email'>
              
              <Input placeholder='Email' style={{ width: "25vw" }} />
              
              </Form.Item>
              <Form.Item name="designation" initialValue='Enter your designation'>
              
              <Input placeholder='Designation'style={{ width: "25vw" }} />
              
              </Form.Item>
              <Form.Item name="Phone" >
              
              <Input.Group size="large">
                  
                        <Row gutter={8}>
                        <Form.Item name={["phone",'code']} noStyle initialValue={'+91'}>
                            <Col span={5}>
                            <Input defaultValue="+91" />
                            </Col>
                            </Form.Item>
                            <Form.Item name={["phone","num"]} noStyle initialValue={'9999999999'}>
                            <Col span={8}>
                            <Input placeholder="Phone number" />
                            </Col></Form.Item>
                        </Row>
              </Input.Group>
              
              </Form.Item>
              <Form.Item name="Bio-sketch" initialValue='BioSketch'>
              
              <Input.TextArea placeholder='Enter you bio' style={{ width: "25vw" }} />
              
              </Form.Item>
              
          
          <Divider/>
        <Form.Item name="curpos" initialValue={'current pos'}>
          <Input style={{ width: "500px" }} placeholder="current pos" />
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
                    name={[field.name, "eduyear"]}
                    // fieldKey={[field.fieldKey, "eduyear"]}
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
<Form.List name="prepos" initialValue={''}>
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
                    name={[field.name, "prepos"]}
                    fieldKey={[field.fieldKey, "prepos"]}
                  >
                    <Input placeholder="prepos" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...rangeConfig}
                    name={[field.name, "preyearrange"]}
                    fieldKey={[field.fieldKey, "preyearrange"]}
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
        <Form.List name="project" initialValue={eduInputs}>
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
                    name={[field.name, "projectyear"]}
                    fieldKey={[field.fieldKey, "projectyear"]}
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
        <Form.List name="patent" initialValue={eduInputs}>
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
                    name={[field.name, "patenttitle"]}
                    fieldKey={[field.fieldKey, "patenttitle"]}
                  >
                    <Input placeholder="patenttitle" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "patentyear"]}
                    fieldKey={[field.fieldKey, "patentyear"]}
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
        <Form.List name="publication" initialValue={eduInputs}>
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
                    name={[field.name, "pubtitle"]}
                    fieldKey={[field.fieldKey, "pubtitle"]}
                  >
                    <TextArea placeholder="Desciption" />
                  </Form.Item>
                  <Form.Item
                    {...field}{...config}
                    name={[field.name, "pubyear"]}
                    fieldKey={[field.fieldKey, "pubyear"]}
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
  );
};

export default BioForm;
