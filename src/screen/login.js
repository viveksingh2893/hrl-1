import { Input, Space,Card,Button } from 'antd';
import {useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom";
import ipaddress from '../components/url';
import axios from 'axios';
const Login=()=>{
    const navigate = useNavigate();
    const [email,setEmail]=useState('')
    const [passwrd,setPasswrd]=useState('')
const sendData=async()=>{
// console.log(email,'email data',passwrd,'password')
const config = {
  headers: { 'content-type': 'application/json' }
}
const data=await axios.post(`${ipaddress}api/token/`,{'email':email,'password':passwrd},config
  ).then(response=>response.data).catch(error=>console.log(error,'error'))
  console.log(data,'data')
  if(data){
navigate(`/admin`,{state:{token:data.access}})}else{alert('Wrong Credentials...')}
}
useEffect(()=>{
  window.scrollTo(0,0)
},[])
const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      // console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);
const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  const updatePasswrd = (event) => {
    setPasswrd(event.target.value);
  };
    return(
        <div style={{display:'flex', width: viewPortWidth>576?"25vw":"80vw" ,
        height:viewPortWidth>576?"25vw":"60vw",
        borderRadius:'2vw',
        boxShadow:'1vw 1vw  #ffcc00 , -1vw -1vw #1f1f1f',
        alignSelf:'center',
        marginTop:'100px',

        backgroundColor:'#F1F0B1',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'}}>
        
          <h1 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>SignIn</h1>
   
    <Input  style={{width:280,margin:5,border:'2px solid #1f1f1f'}}placeholder="Email" value={email} onChange={updateEmail}/>
    <Input.Password style={{width:280,border:'2px solid #1f1f1f'}} placeholder="Password" value={passwrd} onChange={updatePasswrd} />
    <Button   onClick={sendData} style={{margin:5,color:'#ffffff',backgroundColor:'#1f1f1f'}}>
      Login
    </Button>
    <p style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'10px'}}>*Only for HiRapid Lab team member's</p>
  
  </div>
    );
}
export default Login;