import { IoCheckmarkOutline, IoCheckmarkDone } from "react-icons/io5";
import { useState } from "react";

function TodayHabit({ habit, updateHabit }) {
  const [habitDone, setHabitDone] = useState(habit.done);

  const streak = habit.currentSequence ? (
    <p>
      Sequência atual de{" "}
      <span className={habitDone ? "green-text" : ""}>
        {habit.currentSequence} dia{habit.currentSequence > 1 ? "s" : ""}!
      </span>
    </p>
  ) : (
    <p>Nenhuma sequência atual</p>
  );

  const record = habit.highestSequence ? (
    <p>
      Recorde atual de{" "}
      <span className={habitDone ? "green-text" : ""}>
        {habit.highestSequence} dia{habit.highestSequence > 1 ? "s" : ""}!
      </span>
    </p>
  ) : (
    <p>Comece hoje seu hábito!</p>
  );

  return (
    <article className="habit">
      <div className="habit__info">
        <p className="habit__info__name">{habit.name}</p>
        <div className="habit__info__streaks">
          {streak}
          {record}
        </div>
      </div>
      <div className="split-bar"></div>
      <div
        className={habitDone ? "habit__checkbox clicked" : "habit__checkbox"}
        onClick={() => {
          setHabitDone(!habitDone);
          updateHabit(habit.id, habitDone ? "uncheck" : "check");
        }}
      >
        {habitDone ? <IoCheckmarkDone /> : <IoCheckmarkOutline />}
      </div>
    </article>
  );
}

export default TodayHabit;
