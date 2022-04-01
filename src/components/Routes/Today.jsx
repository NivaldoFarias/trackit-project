import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";
import * as isLeapYear from "dayjs/plugin/isLeapYear";

import { BsCalendarEventFill } from "react-icons/bs";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

import TodayHabits from "./../Layout/TodayHabits";
import LoadingDots from "./../Layout/LoadingDots.js";

import Header from "./Header";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";

function Today() {
  const { token } = useContext(TokenContext);
  const { habitsData } = useContext(HabitsContext);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dayjs.locale("pt-br");
  dayjs.extend(isLeapYear);
  dayjs.extend(weekday);
  const date = dayjs().format("DD/MM");
  const day = dayjs().weekday();
  const days = new Map([
    [0, "Domingo"],
    [1, "Segunda"],
    [2, "Terça"],
    [3, "Quarta"],
    [4, "Quinta"],
    [5, "Sexta"],
    [6, "Sábado"],
  ]);

  console.log(habitsData);

  function buildMain() {
    return (
      <>
        <section className="date">
          <p className="date__title">{`${days.get(day)}, ${date}`}</p>
          <p className="date__habits-info">Nenhum hábito concluído ainda</p>
          <BsCalendarEventFill />
        </section>
        <section className="habits">
          {habitsData.map((habit) => {
            return <TodayHabit key={habit.id} habit={habit} />;
          })}
        </section>
      </>
    );
  }

  const main = buildMain();

  return (
    <>
      <Header />
      <TodayHabits>{main}</TodayHabits>
      <Footer />
    </>
  );
}

export default Today;
