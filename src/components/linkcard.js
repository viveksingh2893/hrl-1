import { Card } from "antd";
import "../App.less";

const Linkcard = (props) => {
  const { Meta } = Card;

  return (
    <div>
      <Card
        id={props.id}
        onClick={props.action}
        hoverable
        style={{
          width: props.width,
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
