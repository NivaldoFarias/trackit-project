import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import UserContext from "../../hooks/UserContext";
import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import Login from "./Login";
import Habits from "./Habits";
import SignUp from "./Singup.jsx";

export default function Wrapper() {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", null);
  const [habitsData, setHabitsData] = useLocalStorage("habitsData", null);

  return (
    <ThemeProvider theme={theme}>
      <HabitsContext.Provider value={{ habitsData, setHabitsData }}>
        <TokenContext.Provider value={{ token, setToken }}>
          <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/habits" element={<Habits />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </TokenContext.Provider>
      </HabitsContext.Provider>
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
    btnShadowColor: "rgb(56, 42, 138)",
  },
  fonts: {
    primary: "Lexend Deca, sans-serif",
    logotype: "Playball, cursive",
  },
};
