import React, { useContext } from "react";
import StyledHeader from "../Layout/Header";
import UserContext from "./../../hooks/UserContext";
import logo from "./../../assets/images/logo.png";

function Header() {
  const {
    user: { image },
  } = useContext(UserContext);

  return (
    <StyledHeader>
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1>Trackit</h1>
      </div>
      <img src={image} alt="user avatar miniature" />
    </StyledHeader>
  );
}

export default Header;
