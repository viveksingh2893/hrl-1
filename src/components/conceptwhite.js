import {
  Menu,
  Layout,
  Button,
  Image,
  Form,
  Typography,
  Col,
  Input,
  Alert,
} from "antd";
import axios from "axios";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../App.less";
import "../assets/css/style.css";
import ipaddress from "./url";

const ConceptW = (props) => {
  const { Title, Text } = Typography;
  const [visible, setVisible] = useState(false);
  const handleClose = () => {
    setVisible(!visible);
  };

  const onFinish = async (values) => {
    const ip = ipaddress;
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    await axios.post(`${ip}api/contactus`, values, config).then((response) => {
      if (response.status == 200) {
        setVisible(!visible);
        console.log(".....................");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",

        width: "79vw",
      }}
    >
      {props.img ? (
        <div
          style={{
            width: props.width > 576 ? "39vw" : "80vw",
            height: props.width > 576 ? "26vw" : "54vw",
          }}
        >
          <Image src={props.img} preview={false} />
        </div>
      ) : null}

      {props.conceptname ? (
        <div
          style={{
            position: "relative",
            cursor: "pointer",
            width: props.width > 576 ? "39vw" : "80vw",
            height: props.width > 576 ? "26vw" : "54vw",
          }}
        >
          <NavLink to={`${props.conceptname}`}>
            <Image
              preview={false}
              style={{ objectFit: "cover" }}
              src={props.img2}
            />
            <Button className="homebtn" block type="primary" size="large">
              <NavLink to={`${props.conceptname}`}>
                <Title level={5}>{props.b4title}</Title>
              </NavLink>
            </Button>
          </NavLink>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            width: props.width > 576 ? "39vw" : "80vw",
            height: props.width > 576 ? "26vw" : "auto",
          }}
        >
          {props.title === "Contact Us" ? (
            <div
              style={{
                position: "relative",
                cursor: "pointer",
                width: props.width > 576 ? "39vw" : "80vw",
                height: props.width > 576 ? "26vw" : "54vw",
              }}
            >
              <NavLink to={`${props.conceptname}`}>
                <Image
                  preview={false}
                  style={{ objectFit: "cover" }}
                  src={props.img2}
                />
                <Button className="homebtn" block type="primary" size="large">
                  <NavLink to={`${props.conceptname}`}>
                    <Title level={5}>{props.b4title}</Title>
                  </NavLink>
                </Button>
              </NavLink>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ConceptW;
