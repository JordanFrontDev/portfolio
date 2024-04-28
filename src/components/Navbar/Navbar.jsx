import "./Navbar.css";
import logoj from "../../assets/logoj.svg";
import underline from "../../assets/nav_underline.svg";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }

  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className="navbar">
      <img src={logoj} alt="logo" />
      <img
        className="nav-mob-open"
        onClick={openMenu}
        src={menu_open}
        alt="Menu open icon"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          onClick={closeMenu}
          src={menu_close}
          alt="Menu close icon"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About me</p>
            {menu === "about" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
            {menu === "work" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} /> : <></>}
          </AnchorLink>
        </li>
      </ul>
      <AnchorLink className="anchor-link" href="#contact">
        <div className="nav-connect">Connect with me</div>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
