import { IoCheckmarkOutline, IoCheckmarkDone } from "react-icons/io5";
import { useState } from "react";

function TodayHabit({ habit }) {
  const [btnClick, setBtnClick] = useState(false);

  return (
    <article className="habit">
      <div className="habit__info">
        <p className="habit__info__name">{habit.name}</p>
        <div className="habit__info__streaks">
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
        </div>
      </div>
      <div
        className={btnClick ? "habit__checkbox clicked" : "habit__checkbox"}
        onClick={() => setBtnClick(!btnClick)}
      >
        {btnClick ? <IoCheckmarkDone /> : <IoCheckmarkOutline />}
      </div>
    </article>
  );
}

export default TodayHabit;
