import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
function Nav() {
  const [show, handleShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div>
      <div className={`nav__wrapper ${show && "nav__black"}`}>
        <div className="nav__item">
          <img
            className="netflix__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
            alt="netflix logo"
          />
        </div>
        <div className="nav__item">
          <img
            className="netflix__logo"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="netflix logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
