import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IoSunnyOutline, IoSunny } from "react-icons/io5";
import axios from "axios";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";
import StyledHabit from "./../Layout/Habit";

function Habit({ habit }) {
  const { habitsData, setHabitsData } = useContext(HabitsContext);
  const { token } = useContext(TokenContext);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function deleteHabit(habit) {
    if (
      parseInt(
        prompt(
          "Tem certeza que deseja excluir essa atividade? 1 = SIM | 0 = CANCELAR \n\n" +
            habit.name
        )
      )
    ) {
      return null;
    }

    const newHabits = habitsData.filter((item) => item.id !== habit.id);
    setHabitsData(newHabits);

    const request = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`,
      CONFIG
    );
    request.then((response) => {
      console.log(response.data, "habit deleted");
    });
    request.catch((err) => console.log(err.response));
  }

  return (
    <StyledHabit className="habit">
      <div className="habit__name">
        <h3>{habit.name}</h3>
        <span className="habit__delete" onClick={() => deleteHabit(habit)}>
          <MdDelete />
        </span>
      </div>
      <div className="split-bar"></div>
      <div className="habit__days">
        <span className="habit__day">
          {habit.days.includes(0) ? <IoSunny /> : <IoSunnyOutline />}
          <p>D</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(1) ? <IoSunny /> : <IoSunnyOutline />}
          <p>S</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(2) ? <IoSunny /> : <IoSunnyOutline />} <p>T</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(3) ? <IoSunny /> : <IoSunnyOutline />}
          <p>Q</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(4) ? <IoSunny /> : <IoSunnyOutline />}
          <p>Q</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(5) ? <IoSunny /> : <IoSunnyOutline />}
          <p>S</p>
        </span>
        <span className="habit__day">
          {habit.days.includes(6) ? <IoSunny /> : <IoSunnyOutline />}
          <p>S</p>
        </span>
      </div>
    </StyledHabit>
  );
}

export default Habit;
