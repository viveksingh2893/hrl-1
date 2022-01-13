import { Card, Divider, Typography } from "antd";
import "../App.less";
import '../assets/css/style.css'

const Descard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "80vw",
        alignItems: "center",
        justifyContent: "flex-start",
       
        // paddingLeft:'5vw',
        // paddingRight:'5vw',
        
      }}
    >
      
    <Typography.Text  style={{fontWeight:'400',fontSize:'1.1rem',lineHeight:'1.5rem'}}>
      {props.txt}
    </Typography.Text>
      
    </div>
  );
};

export default Descard;