import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

import Main from "./../Layout/Main.js";
import InputGroup from "../Layout/InputGroup.js";
import LoadingDots from "./../Layout/LoadingDots.js";

import objToArr from "../../utils/objToArr.js";

import Header from "./Header";
import Footer from "./Footer";

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
  const navigate = useNavigate();
  const { token } = useContext(TokenContext);
  const { habitsData, setHabitsData } = useContext(HabitsContext);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [reloadList, setReloadList] = useState(false);

  useEffect(() => {
    const request = axios.get(URLS.GET_HABITS, CONFIG);

    request.then((response) => {
      if (response.data.length > 0) setHabitsData(response.data);
      console.log(response.data);
    });
    request.catch((error) => console.log(error.response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadList]);

  const [inputData, setInputData] = useState("");
  const [checkboxData, setCheckboxData] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const [btnClick, setBtnClick] = useState(false);
  const [cancelBtn, setCancelBtn] = useState("inactive");
  const [saveHabitBtn, setSaveHabitBtn] = useState(false);

  function buildHabits() {
    const Checkbox = ({ label, value, onChange }) => {
      return (
        <div className="checkbox">
          <input type="checkbox" checked={value} onChange={onChange} />
          <label className="checkmark" onClick={onChange}>
            {label}
          </label>
        </div>
      );
    };

    if (btnClick && cancelBtn === "clicked") {
      resetAll();
    }

    function UserHabit(props) {
      const { habit } = props;

      function deleteHabit(habit) {
        const newHabits = habitsData.filter((item) => item.id !== habit.id);
        setHabitsData(newHabits);

        const request = axios.delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
          CONFIG
        );
        request.then((response) => {
          console.log(response.data, "habit deleted");
          setReloadList(!reloadList);
        });
        request.catch((err) => console.log(err.response));
      }

      return (
        <article className="habit">
          <div className="habit__name">
            <h3>{habit.name}</h3>
            <span className="habit__delete" onClick={() => deleteHabit(habit)}>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </div>
          <div className="habit__days">
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>D</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>S</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>T</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>Q</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>Q</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>S</p>
            </span>
            <span className="habit__day">
              <ion-icon name="sunny-outline"></ion-icon>
              <p>S</p>
            </span>
          </div>
        </article>
      );
    }

    return (
      <>
        <section className="my-habits">
          <p>Meus Hábitos</p>
          <div
            className={enableCreateBtn()}
            onClick={(e) => {
              setBtnClick(true);
              setCancelBtn("active");
            }}
          >
            <ion-icon name="add-outline"></ion-icon>
          </div>
        </section>
        <article
          className={btnClick ? "create-habit" : "create-habit collapsed"}
        >
          <InputGroup className="create-habit__name">
            <input
              type="text"
              autoComplete="off"
              value={inputData || ""}
              name="name"
              onChange={(e) => setInputData(e.target.value)}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>nome do hábito</label>
          </InputGroup>
          <div className="checkboxes-container">
            <Checkbox
              label="D"
              name="sunday"
              value={checkboxData.sunday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  sunday: !checkboxData.sunday,
                });
              }}
            />
            <Checkbox
              label="S"
              name="monday"
              value={checkboxData.monday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  monday: !checkboxData.monday,
                });
              }}
            />
            <Checkbox
              label="T"
              name="tuesday"
              value={checkboxData.tuesday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  tuesday: !checkboxData.tuesday,
                });
              }}
            />
            <Checkbox
              label="Q"
              name="wednesday"
              value={checkboxData.wednesday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  wednesday: !checkboxData.wednesday,
                });
              }}
            />
            <Checkbox
              label="Q"
              name="thursday"
              value={checkboxData.thursday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  thursday: !checkboxData.thursday,
                });
              }}
            />
            <Checkbox
              label="S"
              name="friday"
              value={checkboxData.friday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  friday: !checkboxData.friday,
                });
              }}
            />
            <Checkbox
              label="S"
              name="saturday"
              value={checkboxData.saturday || false}
              onChange={(e) => {
                e.preventDefault();
                setCheckboxData({
                  ...checkboxData,
                  saturday: !checkboxData.saturday,
                });
              }}
            />
          </div>
          <div className="btn-container">
            <button id="cancel-btn" onClick={(e) => setCancelBtn("clicked")}>
              Cancelar
            </button>
            <button
              id="save-btn"
              className={enableSaveBtn()}
              onClick={handleSaveHabit}
            >
              <p>Salvar</p>
              <LoadingDots className="dot-pulse hidden"></LoadingDots>
            </button>
          </div>
        </article>
        {habitsData?.length > 0 ? (
          habitsData.map((habit) => {
            return <UserHabit key={habit.id} habit={habit} />;
          })
        ) : (
          <>
            <p className="no-habits-alert">
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a registrar!
            </p>
          </>
        )}
      </>
    );

    function enableSaveBtn() {
      return inputData.length > 0 &&
        (checkboxData.sunday ||
          checkboxData.monday ||
          checkboxData.tuesday ||
          checkboxData.wednesday ||
          checkboxData.thursday ||
          checkboxData.friday ||
          checkboxData.saturday)
        ? ""
        : "disabled";
    }

    function enableCreateBtn() {
      return btnClick ? "add-habit-btn clicked" : "add-habit-btn";
    }

    function handleSaveHabit() {
      setSaveHabitBtn(!saveHabitBtn);
      resetAll();
      handlePostHabit();
      console.log({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: { name: inputData, days: objToArr(checkboxData) },
      });
    }

    function handlePostHabit() {
      const body = { name: inputData, days: objToArr(checkboxData) };

      const request = axios.post(URLS.POST_CREATE_HABIT, body, CONFIG);

      request.then((response) => {
        console.log(response);
        setReloadList(!reloadList);
      });
      request.catch((error) => console.log(error.response));
    }

    function resetAll() {
      setBtnClick(false);
      setCancelBtn("inactive");
      setInputData("");
      setCheckboxData({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
      });
    }
  }

  const habits = buildHabits();

  return (
    <>
      <Header />
      <Main>{habits}</Main>
      <Footer />
    </>
  );
}

export default Habits;
