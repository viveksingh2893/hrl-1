import { Image, Layout, Typography, Space, Card } from "antd";
import conceptimg from "../assets/image/IMG 2.1.png";
import "../App.less";
import Descard from "../components/descard";
import Videobox from "../components/videobox";
import Linkcard from "../components/linkcard";
import { useNavigate } from "react-router-dom";

const Concept = () => {
  const data = {
    what: `WHAT- ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.`,
    imgloc: "dummy",
    video: "https://www.youtube.com/watch?v=ctJFwgh4yds",
    why: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    how: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    new: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    model: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
    where: [
      {
        id: "",
        photo:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        title: "First Card",
        description: "Random Description",
      },
    ],
  };

  const navigate = useNavigate();
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <Content
      style={{
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "12vh",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Space direction="vertical">
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "30vw",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            src={conceptimg}
            style={{ width: "90vw", height: "30vw", objectFit: "cover" }}
          />
        </div>
        <Descard txt={data.what}></Descard>
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

        <div
          style={{
            display: "flex",
            width: "100vw",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: "2vw",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
          <Linkcard
            action={() => {
              navigate("/");
            }}
            width="45vh"
            id={data.why[0].id}
            image={data.why[0].photo}
            title={data.why[0].title}
            description={data.why[0].description}
          />
        </div>
      </Space>
    </Content>

    // <Layout>

    //   <Layout>
    //       <Content style={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap',}}>

    //           <Card style={{display:'flex',flex: 1,justifyContent:'center',
    //       flexShrink: 1,
    //       flexBasis: 300}}>
    //           <Image preview={true} src={conceptimg} />
    //           </Card>
    //           <Card
    //         style={{display:'flex',flex: 1,justifyContent:'center',
    //             flexShrink: 1,
    //             flexBasis: 300}}>
    //           <Image preview={true} src={conceptimg} />
    //           </Card>
    //           <Card
    //           style={{display:'flex',flex: 1,justifyContent:'center',
    //                     flexShrink: 1,
    //                     flexBasis: 300}}>
    //           <Image preview={true} src={conceptimg} />
    //           </Card>
    //           <Title
    //     level={4}
    //     style={{
    //       flexWrap: "wrap",
    //       fontWeight: "normal",
    //       width: "50vw",
    //       textAlign: "center",
    //       padding: "1.5vw",
    //       fontSize: "2.5vw",
    //     }}
    //   >
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting
    //     industry. "
    //   </Title>
    //       </Content>
    //   </Layout>

    //     </Content>
    //   <Space direction="vertical">
    //     <div
    //       style={{
    //         display: "flex",
    //         width: "100vw",
    //         height: "30vw",
    //         justifyContent: "center",
    //         backgroundColor: "white",
    //         marginTop: "2vw",
    //       }}
    //     >
    //       <Image
    //         src={conceptimg}
    //         style={{ width: "90vw", height: "30vw", objectFit: "cover" }}
    //       />
    //     </div>
    //     <Descard txt={data.what}></Descard>
    //     <div
    //       style={{
    //         display: "flex",
    //         width: "100vw",
    //         alignItems: "flex-start",
    //         justifyContent: "center",
    //         marginTop: "1vw",
    //       }}
    //     >
    //       <Videobox width="80vw" link={data.video}></Videobox>
    //     </div>
    //     <div
    //       style={{
    //         display: "flex",
    //         width: "100vw",
    //         flexDirection: "row",
    //         marginTop: "2vw",
    //         justifyContent: "flex-start",
    //         alignItems: "center",
    //         padding: "5vw",
    //       }}
    //     >
    //       <Linkcard
    //         action={() => {
    //           navigate("/");
    //         }}
    //         width="30vw"
    //         marginRight="2vw"
    //         id={data.why[0].id}
    //         image={data.why[0].photo}
    //         title={data.why[0].title}
    //         description={data.why[0].description}
    //       />
    //     </div>
    //   </Space>
    // </Layout>
  );
};

export default Concept;
