import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import StyledHistory from "./../Layout/History";

function History() {
  return (
    <>
      <Header />
      <StyledHistory>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </StyledHistory>
      <Footer />
    </>
  );
}

export default History;
