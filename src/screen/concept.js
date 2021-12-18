import { useLocation } from "react-router-dom";
import { Image, Layout, Typography, Space, Card } from "antd";
import conceptimg from "../assets/image/IMG 2.1.png";
import "../App.less";
import Descard from "../components/descard";

const Concept = () => {
  const location = useLocation();
  const { Content } = Layout;
  const { Title, Text } = Typography;
  const what_data = `WHAT- ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`;

  return (
    <Layout>
      <Space direction="vertical">
        {/* <div
          style={{
            display: "flex",
            width: "100vw",
            height: "40vw",
            // background: `url("${conceptimg}")`,
            // backgroundSize: "cover",
            justifyContent: "center",
            // backgroundSize: "cover",
            backgroundColor: "white",
          }}
        >
          <Image
            src={conceptimg}
            style={{ width: "100vw", height: "40vw", objectFit: "cover" }}
          />
        </div> */}
        <Descard txt={what_data}></Descard>
        <div
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: "1vw",
          }}
        >
          <div
            style={{
              width: "80vw",
            }}
            class="video-container"
          >
            <iframe
              src="https://www.youtube.com/embed/ctJFwgh4yds"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Space>
    </Layout>
  );
};

export default Concept;
