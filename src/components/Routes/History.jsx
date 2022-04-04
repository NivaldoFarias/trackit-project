import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import * as weekday from "dayjs/plugin/weekday";
import * as isLeapYear from "dayjs/plugin/isLeapYear";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

import Header from "./Header";
import Footer from "./Footer";
import StyledHistory from "./../Layout/History";
import LoadingSpinner from "./../Layout/LoadingSpinner";

function History() {
  const { token } = useContext(TokenContext);
  const { habitsData } = useContext(HabitsContext);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const today = new Date();
  const dateOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState(new Map());

  dayjs.locale("pt-br");
  dayjs.extend(isLeapYear);
  dayjs.extend(weekday);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";

    const request = axios.get(URL, CONFIG);
    request.then((response) => {
      setHistory(response.data);
      response.data?.forEach((day) => {
        setFilteredInfo(
          new Map(
            filteredInfo.set(
              day.day,
              day.habits.some((habit) => habit.done)
            )
          )
        );
      });
    });
    request.catch((err) => {
      console.log(err.response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [habitsData]);

  return (
    <>
      <Header />
      <StyledHistory>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        {history?.length === filteredInfo?.size ? (
          <>
            <Calendar
              value={date}
              onChange={setDate}
              calendarType={"US"}
              maxDate={today}
              formatDay={(locale, date) => <p>{dayjs(date).format("DD")}</p>}
              tileClassName={({ date }) => {
                const convertedDate = date.toLocaleDateString(
                  "pt-br",
                  dateOptions
                );
                const isToday =
                  convertedDate ===
                  today.toLocaleDateString("pt-br", dateOptions);

                return `react-calendar__tile${
                  filteredInfo.has(convertedDate) && !isToday
                    ? filteredInfo.get(convertedDate)
                      ? `--done`
                      : `--not-done`
                    : ""
                }`;
              }}
            />
            <div className="history-info">
              {history?.map((day) => {
                const selectedDay =
                  day.day === date.toLocaleDateString("pt-br", dateOptions);

                return selectedDay ? (
                  <div key={day.day}>
                    <p className={`history-info__day`}>{day.day}</p>
                    {day.habits.map((habit) => {
                      return (
                        <div key={habit.id} className="history-info__habit">
                          <p>{habit.name}:</p>
                          <p className={habit.done ? "done" : "not-done"}>
                            {habit.done ? "Feito" : "Não feito"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                ) : null;
              })}
            </div>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </StyledHistory>
      <Footer />
    </>
  );
}

export default History;
