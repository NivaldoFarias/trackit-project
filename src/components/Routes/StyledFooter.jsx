import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Footer from "./../Layout/Footer";

export function StyledFooter() {
  const value = 0.66;

  return (
    <Footer>
      <div className="text-container">
        <p>Hábitos</p>
        <p>Histórico</p>
      </div>
      <div className="progressbar-container">
        <CircularProgressbar
          value={value}
          maxValue={1}
          text={`${value * 100}%`}
          styled={buildStyles({
            rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "16px",
            pathTransitionDuration: 0.5,
            pathColor: `rgba(82, 100, 174, ${value})`,
            textColor: "white",
            trailColor: (props) => props.theme.colors.altTertiary,
            backgroundColor: (props) => props.theme.colors.primary,
          })}
        />
      </div>
    </Footer>
  );
}
