import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";
import * as isLeapYear from "dayjs/plugin/isLeapYear";

import checkDoneHabits from "./../../utils/checkDoneHabits";

import { BsCalendar4Event } from "react-icons/bs";

import TodayHabits from "./../Layout/TodayHabits";
import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";
import TodayHabitsContext from "./../../hooks/TodayHabitsContext";
import ProgressContext from "../../hooks/ProgressContext";

import Header from "./Header";
import Footer from "./Footer";
import TodayHabit from "./TodayHabit";

function Today() {
  const [reloadList, setReloadList] = useState(false);
  const { progress, setProgress } = useContext(ProgressContext);
  const { token } = useContext(TokenContext);
  const { habitsData } = useContext(HabitsContext);
  const { todayHabitsData, setTodayHabitsData } =
    useContext(TodayHabitsContext);

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
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const request = axios.get(URL, CONFIG);

    request.then((response) => {
      if (response.data.length > 0) setTodayHabitsData(response.data);
    });
    request.catch((error) => console.log(error.response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadList, habitsData]);

  useEffect(() => {
    setProgress(checkDoneHabits(todayHabitsData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todayHabitsData]);

  function updateDoneHabits(id, type) {
    if (type === "check" || type === "uncheck") {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${type}`;

      const request = axios.post(URL, null, CONFIG);
      request.then(() => {
        setReloadList(!reloadList);
      });
      request.catch((error) => console.log(error.response));
    } else {
      console.log("Não foi possível atualizar o hábito");
    }
  }

  function buildMain() {
    const info =
      progress === 1
        ? "Parabéns!! Você concluiu todos seus hábitos de hoje 🎉"
        : `${(progress * 100).toFixed(0)}% concluído! Continue assim 💪`;

    return (
      <>
        <section className="date">
          <p className="date__title">{`${days.get(day)}, ${date}`}</p>
          <p className="date__habits-info">
            {progress ? info : "Nenhum hábito concluído ainda"}
          </p>
          <BsCalendar4Event />
        </section>
        <section className="habits">
          {todayHabitsData?.map((habit) => {
            return (
              <TodayHabit
                key={habit.id}
                habit={habit}
                updateHabit={updateDoneHabits}
              />
            );
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
