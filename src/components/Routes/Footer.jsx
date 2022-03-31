import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import StyledFooter from "../Layout/Footer";

function Footer() {
  const value = 0.66;

  return (
    <StyledFooter>
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
            pathColor: `rgb(253, 235, 220)`,
            trailColor: "rgb(76, 30, 79)",
            backgroundColor: `rgb(76, 30, 79)`,
          })}
        />
      </div>
    </StyledFooter>
  );
}

export default Footer;
