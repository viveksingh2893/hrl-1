import { Card, Divider, Typography } from "antd";
import "../App.less";
import '../assets/css/style.css'

const Descard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "60vw",
        alignItems: "center",
        justifyContent: "center",
       
        // paddingLeft:'5vw',
        // paddingRight:'5vw',
        
      }}
    >
      
    <Typography.Title level={4} style={{fontWeight:'400',textAlign:'center'}}>
      {props.txt}
    </Typography.Title>
      
    </div>
  );
};

export default Descard;