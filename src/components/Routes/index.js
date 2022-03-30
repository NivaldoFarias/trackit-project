import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import UserContext from "./../../contexts/UserContext";
import TokenContext from "./../../contexts/TokenContext";
import Login from "./Login";
import SignUp from "./Singup.jsx";

export default function Wrapper() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </TokenContext.Provider>
    </ThemeProvider>
  );
}

const theme = {
  colors: {
    primary: "rgb(76, 30, 79)",
    secondary: "rgb(95, 72, 224)",
    altSecondary: "rgb(128, 142, 161)",
    tertiary: "rgb(250, 126, 97)",
    altTertiary: "rgb(253, 235, 220)",
    barPrimary: "rgb(82, 100, 174)",
  },
};
