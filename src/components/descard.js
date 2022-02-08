import { Card, Divider, Typography } from "antd";
import "../App.less";
import '../assets/css/style.css'

const Descard = (props) => {
  return (
    <div
      className="descard"
    >
      
    <Typography.Paragraph  style={{fontWeight:'400', textAlign:'justify'}}>
      {props.txt}
    </Typography.Paragraph>
      
    </div>
  );
};

export default Descard;