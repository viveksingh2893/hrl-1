import { Input, Space,Card,Button } from 'antd';
import {useState} from 'react'

const AddUser=()=>{
    const [email,setEmail]=useState('')
    const [passwrd,setPasswrd]=useState('')
    const [passwrd2,setPasswrd2]=useState('')
const sendData=()=>{
console.log(email,'email data',passwrd,'password')
}
const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePasswrd = (event) => {
    setPasswrd(event.target.value);
  };
  const updatePasswrd2 = (event) => {
    setPasswrd2(event.target.value);
  };
    return(
        <div> <Card style={{ alignSelf:'center'  ,backgroundColor: 'lightblue' }}>
        <Space direction="vertical" style={{marginRight:'10%'}}>
    <Input placeholder="Enter your Email" value={email} onChange={updateEmail}/>
    <Input.Password placeholder="input password" value={passwrd} onChange={updatePasswrd} />
    <Input.Password placeholder="input password again" value={passwrd2} onChange={updatePasswrd2} />
    <Button type="primary" block onClick={sendData}>
      AddUser
    </Button>
  </Space>

  </Card>
  <Card style={{ alignSelf:'center'  ,backgroundColor: 'lightblue' }}>
        <Space direction="vertical" style={{marginRight:'10%'}}>
    <Input placeholder="Enter your Email" value={email} onChange={updateEmail}/>
    <Input.Password placeholder="new password" value={passwrd} onChange={updatePasswrd} />
    <Input.Password placeholder="input password again" value={passwrd2} onChange={updatePasswrd2} />
    <Button type="primary" block onClick={sendData}>
      Change Password
    </Button>

  </Space>
  </Card>
  </div>
  
    )
}
export default AddUser;