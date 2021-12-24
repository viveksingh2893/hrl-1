import { Card } from "antd";
import "../App.less";
import { useEffect, useState } from "react";

const Linkcard = (props) => {
  const { Meta } = Card;
  const [viewPortWidth, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e) => {
      console.log("size", e.target);
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <Card
        id={props.id}
        onClick={props.action}
        hoverable
        bodyStyle={{ fontSize: `${viewPortWidth > 840 ? "20px" : "14px"}` }}
        style={{
          width: `${viewPortWidth > 840 ? "20vw" : "38vw"}`,
          padding: 0,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
        }}
        cover={<img alt="unavailable" src={props.image} />}
      >
        <Meta title={props.title} description={props.description} />
      </Card>
    </div>
  );
};

export default Linkcard;
