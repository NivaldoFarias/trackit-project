import React, { useContext } from "react";
import Header from "./../Layout/Header";

import UserContext from "./../../contexts/UserContext";

export function StyledHeader() {
  const {
    user: { image },
  } = useContext(UserContext);

  return (
    <Header>
      <h1>Trackit</h1>
      <img src={image} alt="user avatar miniature" />
    </Header>
  );
}
