import React, { useState } from "react";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuopen, setMenuOpen] = useState(false);

  const getMenuStyles = (menuopen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuopen && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./img/logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className=" flexCenter h-menu" style={getMenuStyles(menuopen)}>
            <a href="">Residencies</a>
            <a href="">Our Values</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuopen)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;