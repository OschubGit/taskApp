import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/inicio" activeClassName="active">
          <Button name="Inicio" color="primary large" />
        </NavLink>
        <NavLink to="/logout" activeClassName="active">
          <Button name="Cerrar sesión" color="secondary large" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
