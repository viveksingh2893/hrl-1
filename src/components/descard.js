import { Card } from "antd";
import "../App.less";
import '../assets/css/style.css'

const Descard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "80vw",padding:"calc(5px + 1vw)",
        alignItems: "center",
        justifyContent: "center",
        background:'#ffd633',
        // paddingLeft:'5vw',
        // paddingRight:'5vw',
        marginTop: "1vw", 
      }}
    >
        <h2 className='Ch1'>{props.txt}</h2>
        <p>
          {props.para}
        </p>
      {/* <Card
        style={{
          width: "100vw",
          background:'#ffd633',
          padding:0,
        
         
          // boxShadow: "0.5vh 0.8vh 2.40vh 0.5vh rgba(208, 216, 243, 0.6)",
        }}
      >
      
      </Card> */}
    </div>
  );
};

export default Descard;
