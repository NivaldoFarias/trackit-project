import React, { useContext } from "react";
import HabitsContext from "../../hooks/HabitsContext";
import Habit from "./Habit";

function ListHabits() {
  const { habitsData } = useContext(HabitsContext);

  return (
    <>
      {habitsData?.length > 0 ? (
        habitsData.map((habit) => {
          return <Habit key={habit.id} habit={habit} />;
        })
      ) : (
        <>
          <p className="no-habits-alert">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a registrar!
          </p>
        </>
      )}
    </>
  );
}

export default ListHabits;
