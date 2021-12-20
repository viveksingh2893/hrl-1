import { Menu } from "antd";
import {useNavigate} from "react-router-dom";
const NavMenu=(props)=>{
    const { SubMenu } = Menu;
    const navigate = useNavigate();
    const data = [
        {
          title: "ABOUT",
          link: ["details", "team", "admin", "contact"],
          item: ["HRL DETAILS", "TEAM", "ADMIN", "CONTACT"],
        },
        {
          title: "CONCEPT",
          link: ["concept", "concept", "concept"],
          item: ["MITH.AI", "DHARA", "SKY BRIDGE"],
        },
        {
          title: "RESOURCE",
          link: ["blog", "gallery", "news"],
          item: ["BLOG", "GALLERY", "NEWS"],
        },
        { title: "LOGIN/REGISTER", link: [], item: [] },
      ];
    return (

        <Menu
          theme="dark"
          mode= {props.viewPortWidth>500?"horizontal":"inline"}
          style={{
            fontSize:'18px',
            fontWeight:'bolder',
            color:'#666666',
            fontFamily:'calibri',
            justifyContent: "flex-end",
            backgroundColor: "#ffcc00",
          }}
        >
          {data.map((val, ind) => {
            return (
              <SubMenu key={`${ind}`} title={val.title}>
                {val.item.map((newVal, index) => {
                  return (
                    <Menu.Item
                      onClick={() =>
                        navigate(`/${val.link[index]}`, { state: newVal })
                      }
                    >
                      {" "}
                      {newVal}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>

    )
}

export default NavMenu;