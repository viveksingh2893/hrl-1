import { Menu } from "antd";
import { useNavigate, useParams, NavLink } from "react-router-dom";
const NavMenu = (props) => {
  const { SubMenu } = Menu;
  const navigate = useNavigate();
  console.log("....................", window.scroll);

  const DEFAULTSTYLE = {
    fontSize: "calc(10px + 0.5vw)",
    fontWeight: "bolder",
    height: "80px",

    fontFamily: "Calibri",
    justifyContent: "flex-end",
    backgroundColor: "#666666",
  };
  const navstyle = props.style ? props.style : DEFAULTSTYLE;
  return (
    <Menu
      theme="dark"
      mode={props.viewPortWidth > 700 ? "horizontal" : "inline"}
      style={navstyle}
    >
      <SubMenu key="about" title="About">
        <Menu.Item key="detail" onClick={() => navigate("/detail")}>
          HRL Details
        </Menu.Item>
        <Menu.Item key="team" onClick={() => navigate(`/team`)}>
          Team
        </Menu.Item>
        <Menu.Item key="contact" onClick={() => navigate("/contact")}>
          Contact
        </Menu.Item>
      </SubMenu>
      <SubMenu key="concept" title="Concept">
        {props.concept
          ? props.concept.map((value, index) => {
              return (
                <Menu.Item
                  key={`${value.conceptname}`}

                  // onClick={() =>
                  //   navigate(`/concept/${value.conceptname}`,{state:value.conceptname})
                  // }
                >
                  {" "}
                  <NavLink to={`/concept/${value.conceptname}`}>
                    {value.conceptname}
                  </NavLink>
                </Menu.Item>
              );
            })
          : null}
      </SubMenu>
      <SubMenu key="resource" title="Resource">
        <Menu.Item key="blog">
          <NavLink to="/resource/blog">Blog</NavLink>
        </Menu.Item>
        <Menu.Item key="news">
          <NavLink to="/resource/news">News</NavLink>
        </Menu.Item>
        <Menu.Item key="gallery" onClick={() => navigate(`/gallery`)}>
          Gallery
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key={`login`}
        title="Login"
        onTitleClick={() => navigate(`/login`)}
      ></SubMenu>
    </Menu>
  );
};

export default NavMenu;
