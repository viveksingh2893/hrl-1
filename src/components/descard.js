import { Card } from "antd";
import "../App.less";

const Descard = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1vw",
      }}
    >
      <Card
        style={{
          width: "80vw",
          borderRadius: "1vh",
          boxShadow: "0.5vh 0.8vh 2.40vh 0.5vh rgba(208, 216, 243, 0.6)",
        }}
      >
        <h2>{props.txt}</h2>
      </Card>
    </div>
  );
};

export default Descard;