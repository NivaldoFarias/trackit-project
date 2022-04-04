import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import UserContext from "../../hooks/UserContext";
import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";
import TodayHabitsContext from "../../hooks/TodayHabitsContext";
import ProgressContext from "../../hooks/ProgressContext";

import Login from "./Login";
import SignUp from "./Singup";
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";

export default function Wrapper() {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("user", null);
  const [habitsData, setHabitsData] = useLocalStorage("habitsData", null);
  const [todayHabitsData, setTodayHabitsData] = useLocalStorage(
    "todayHabitsData",
    null
  );
  const [progress, setProgress] = useLocalStorage("progress", 0);

  return (
    <ThemeProvider theme={theme}>
      <ProgressContext.Provider value={{ progress, setProgress }}>
        <TodayHabitsContext.Provider
          value={{ todayHabitsData, setTodayHabitsData }}
        >
          <HabitsContext.Provider value={{ habitsData, setHabitsData }}>
            <TokenContext.Provider value={{ token, setToken }}>
              <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/habits" element={<Habits />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/history" element={<History />} />
                  </Routes>
                </BrowserRouter>
              </UserContext.Provider>
            </TokenContext.Provider>
          </HabitsContext.Provider>
        </TodayHabitsContext.Provider>
      </ProgressContext.Provider>
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
    darkGreen: "rgb(163,216,150)",
    regularGreen: "rgb(193,226,190)",
    lightGreen: "rgb(214,235,195)",
    lighterGreen: "rgb(230,248,209)",
    btnGreen: "rgb(118,185,71)",
    btnShadowGreen: "rgb(77,152,51)",
    success: "rgb(118,185,71)",
    danger: "rgb(255,0,0)",
  },
  fonts: {
    primary: "Lexend Deca, sans-serif",
    logotype: "Playball, cursive",
  },
};
