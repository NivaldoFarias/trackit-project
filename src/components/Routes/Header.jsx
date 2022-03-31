import React, { useContext } from "react";
import StyledHeader from "../Layout/Header";

import UserContext from "./../../hooks/UserContext";

function Header() {
  const {
    user: { image },
  } = useContext(UserContext);

  return (
    <StyledHeader>
      <h1>Trackit</h1>
      <img src={image} alt="user avatar miniature" />
    </StyledHeader>
  );
}

export default Header;
