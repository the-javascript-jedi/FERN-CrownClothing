import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
// because it is not a jsx we set the name as logo
import { ReactComponent as Logo } from "../../assets/crown.svg";
function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
