import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import StyledFooter from "../Layout/Footer";

import ProgressContext from "../../hooks/ProgressContext";

function Footer() {
  const { progress } = useContext(ProgressContext);
  const navigate = useNavigate();
  return (
    <StyledFooter>
      <div className="text-container">
        <p id="habits-page-btn" onClick={() => navigate("/habits")}>
          Hábitos
        </p>
        <p id="history-page-btn" onClick={() => navigate("/history")}>
          Histórico
        </p>
      </div>
      <div className="progressbar-container" onClick={() => navigate("/today")}>
        <CircularProgressbar
          value={progress}
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
