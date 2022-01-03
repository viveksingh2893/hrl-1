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
        <div style={{display:'flex', width: "25vw" ,
        height:"25vw",
        boxShadow:'1vw 1vw  #ffcc00 , -1vw -1vw #1f1f1f',
        alignSelf:'center',
        margin:'10vw',
        // backgroundColor:'#e0e0e0',
        justifyContent:'center',
        alignItems:'center'}}>
        <Space direction="vertical">
   
    <Input  style={{fontFamily:'Calibri',fontSize:16,width:'20vw',border:'2px solid #000000'}}placeholder="Email" value={email} onChange={updateEmail}/>
    <Input.Password style={{fontFamily:'Calibri',fontSize:16,width:'20vw',border:'2px solid #000000'}} placeholder="Password" value={passwrd} onChange={updatePasswrd} />
    <Button  block onClick={sendData} style={{color:'yellow',backgroundColor:'#1f1f1f',fontFamily:'Calibri',fontSize:16,fontWeight:'bold'}}>
      Login
    </Button>
  </Space>
  </div>
    )
}
export default Login;