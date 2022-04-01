import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

import Main from "./../Layout/Main.js";
import LoadingDots from "./../Layout/LoadingDots.js";

import Header from "./Header";
import Footer from "./Footer";

function Today() {
  function buildMain() {
    return (
      <>
        <section></section>
        <p>today</p>
      </>
    );
  }

  const main = buildMain();

  return (
    <>
      <Header />
      <Main>{main}</Main>
      <Footer />
    </>
  );
}

export default Today;
