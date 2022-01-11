import { Menu } from "antd";
import {useNavigate} from "react-router-dom";
const NavMenu=(props)=>{
    const { SubMenu } = Menu;
    const navigate = useNavigate();
    const DEFAULTSTYLE={
      fontSize:'calc(10px + 0.5vw)',
      fontWeight:'bolder',
      height:'80px',
      
      fontFamily:'Calibri',
      justifyContent: "flex-end",
      backgroundColor: "#666666",
    }
    const navstyle= props.style?props.style:DEFAULTSTYLE
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
        // { title: "LOGIN/REGISTER", link: ['login'], item: ['LOGIN'] },
      ];
    return (

        <Menu
        theme="dark"
          
          mode= {props.viewPortWidth>700?"horizontal":"inline"}
          style={navstyle}
        >
          {data.map((val, ind) => {
            return (
              <SubMenu  key={`${ind}`} title={val.title}>
                {val.item.map((newVal, index) => {
                  return (
                    <Menu.Item key={`${newVal+index}`}
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
          <SubMenu key={`login`} title='LOGIN'
                onTitleClick={() =>
                  navigate(`/login`)
                }
              ></SubMenu>
        </Menu>

    )
}

export default NavMenu;