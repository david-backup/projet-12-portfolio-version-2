import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import data from "../data/navigation.json";

const Navigation = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <header>
      <nav className="navigation">
        <div className="navigation__container">
          <Link to={"/"} className="navigation__container__logo">
            <h1>Portfolio</h1>
          </Link>
        </div>
        <ul
          className={`navigation__container__menu ${
            toggleIcon ? "active" : ""
          }`}
        >
          {data.map((item, key) => (
            <li key={key} className="navigation__container__menu__item">
              <Link
                className="navigation__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navigation-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={40} /> : <FaBars size={40} />}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
