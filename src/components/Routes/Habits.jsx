import React, { useContext, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../../hooks/UserContext";
import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

import Header from "./../Layout/Header.js";
import Footer from "../Layout/Footer.js";
import Main from "./../Layout/Main.js";
import InputGroup from "../Layout/InputGroup.js";
import Checkbox from "../Layout/Checkbox.js";

const URLS = {
  GET_HABITS:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
  GET_TODAY_HABITS:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
  GET_HISTORY:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
  POST_CREATE_HABIT:
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
};

function Habits() {
  const [inputData, setInputData] = useState({
    name: "",
    description: "",
  });
  const {
    user: { id, name, image, email, password },
  } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const { habitsData, setHabitsData } = useContext(HabitsContext);
  const navigate = useNavigate();
  const value = 0.76;

  /* useEffect(() => {
    const promise = axios.get(URLS.GET_HABITS);

    promise.then((response) => {
      if (response.data.length > 0) setHabitsData(response.data);
      console.log(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  function buildHeader() {
    return (
      <>
        <h1>Trackit</h1>
        <img src={image} alt="user avatar miniature" />
      </>
    );
  }

  function handleInputChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleCheckboxChange(e) {
    e.preventDefault();
    setInputData({
      ...inputData,
      days: { ...inputData.days, [e.target.name]: !e.target.value },
    });
  }

  function buildHabits() {
    return (
      <>
        <section className="my-habits">
          <p>Meus Hábitos</p>
          <div className="add-habit-btn">
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </section>
        <article className="habit">
          <InputGroup className="habit__name">
            <input
              type="text"
              value={inputData.name}
              name="name"
              onChange={handleInputChange}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>nome do hábito</label>
          </InputGroup>
        </article>
        <p className="no-habits-alert">
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </>
    );
  }

  function buildFooter() {
    return (
      <>
        <div className="text-container">
          <p>Hábitos</p>
          <p>Histórico</p>
        </div>
        <div className="progressbar-container">
          <CircularProgressbar
            value={value}
            text={`Hoje`}
            maxValue={1}
            strokeWidth={5}
            background
            backgroundPadding={7}
            styles={buildStyles({
              textSize: "20px",
              textColor: "white",
              pathColor: `rgba(250, 126, 97, 0.9)`,
              trailColor: "rgb(76, 30, 79)",
              backgroundColor: `rgb(76, 30, 79)`,
            })}
          />
        </div>
      </>
    );
  }

  const header = buildHeader();
  const habits = buildHabits();
  const footer = buildFooter();

  return (
    <>
      <Header>{header}</Header>
      <Main>{habits}</Main>
      <Footer>{footer}</Footer>
    </>
  );
}

export default Habits;
