import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
  return (
   
    <div className="header">
    <nav>
      <image alt="icon" src="icon.jpg"/>
      <div className="Sub">
      <NavLink exact activeClassName="active" to="/">
          Home |
      </NavLink>
      <NavLink activeClassName="active" to="/login">
            Login |
      </NavLink>
      <NavLink activeClassName="active" to="/register">
            RegisterPage 
      </NavLink>
      </div>
    </nav>
    </div>
  );
}
export default Header;