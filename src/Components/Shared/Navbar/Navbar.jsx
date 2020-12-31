import React from "react";
import "./Navbar.scss";
import { menu } from "./Menu";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items">
        {menu.map((m, i) => {
          return (
            <NavItem key={i} to={m.to}>
              {m.name}
            </NavItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
