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
        marginTop:5,
        marginBottom:5
       
        // paddingLeft:'5vw',
        // paddingRight:'5vw',
        
      }}
    >
      
    <Typography.Paragraph  style={{fontWeight:'400',fontSize:'1.1rem'}}>
      {props.txt}
    </Typography.Paragraph>
      
    </div>
  );
};

export default Descard;