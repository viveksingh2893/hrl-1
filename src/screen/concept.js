import { useLocation } from "react-router-dom";
import { Image, Layout, Typography, Space, Card } from "antd";
import conceptimg from "../assets/image/IMG 2.1.png";
import "../App.less";
import Descard from "../components/descard";
import Videobox from "../components/videobox";

const Concept = () => {
  const data = {
    what_data: `WHAT- ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
    imgloc: "dummy",
    video: "https://www.youtube.com/watch?v=ctJFwgh4yds",
  };

  return (
    <Layout>
      <Space direction="vertical">
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "40vw",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            src={conceptimg}
            style={{ width: "100vw", height: "40vw", objectFit: "cover" }}
          />
        </div>
        <Descard txt={data.what_data}></Descard>
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "1vw",
          }}
        >
          <Videobox width="80vw" link={data.video}></Videobox>
        </div>
      </Space>
    </Layout>
  );
};

export default Concept;
