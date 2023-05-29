import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuLink } from "./MenuLink";
import { useSelector } from 'react-redux';



export function ResponsiveAppBar({ children }) {
  const pages = React.Children.toArray(children);
  let navigate = useNavigate();
  let current = useSelector(st => st.user.user)
  let rol = useSelector(st => st.user.role)
  let name = useSelector(st => st.user.user?.name)
  const [currentUserName, setCurrentUserName] = useState(useSelector(st => st.user.user === "undefined" ? "Guess" : name))

  return (
    <>
      <nav id="navBar">
        <div id="navDiv">
          <p id="currentP">{currentUserName}</p>
          <div id="menu">
          <MenuLink txt="בית" url="home" />
          </div>
          {pages}
          <img id="logo" onClick={() => { navigate('/') }} src="https://שירות-לקוחות.org.il/wp-content/uploads/2019/12/MAC-%D7%9E%D7%90%D7%A7-%D7%9C%D7%95%D7%92%D7%95.jpg" />
        </div>
      </nav>
      {/* <Home/> */}
    </>
  );
}