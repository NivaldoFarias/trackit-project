import React, { useContext } from "react";
import axios from "axios";

import TokenContext from "../../hooks/TokenContext";
import HabitsContext from "../../hooks/HabitsContext";

function Habit({ habit }) {
  const { habitsData, setHabitsData } = useContext(HabitsContext);
  const { token } = useContext(TokenContext);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function deleteHabit(habit) {
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

export default Habit;
