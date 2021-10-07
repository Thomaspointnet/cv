import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Coupé! Cette page n'existe pas. On la refait.</h3>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
