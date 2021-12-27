import { Input, Space,Card,Button } from 'antd';
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
const Login=()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [passwrd,setPasswrd]=useState('')
const sendData=()=>{
console.log(email,'email data',passwrd,'password')
navigate(`/admin`)
}
const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePasswrd = (event) => {
    setPasswrd(event.target.value);
  };
    return(
        <Card style={{ width: 250 ,alignSelf:'center',margin:'15%',backgroundColor:'#ffcc00'}}>
        <Space direction="vertical">
    <Input placeholder="Enter your Email" value={email} onChange={updateEmail}/>
    <Input.Password placeholder="input password" value={passwrd} onChange={updatePasswrd} />
    <Button type="primary" block onClick={sendData}>
      Login
    </Button>
  </Space>
  </Card>
    )
}
export default Login;