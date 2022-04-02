import styled from "styled-components";

const StyledHabit = styled.article`
  position: relative;
  left: 0px;
  top: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  padding: 18px 18px 10px;
  min-height: 120px;
  width: 350px;

  border-radius: 10px;
  background-color: white;
  box-shadow: lightgrey 5px 5px 0px 0px;
  transition: all 250ms ease-out 0s;

  * {
    user-select: none;
  }
  .habit__name {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    h3 {
      font-size: 1.4em;
    }
    .habit__delete {
      position: absolute;
      top: 8px;
      right: 8px;
      * {
        cursor: pointer;
        font-size: 1.2em;
      }
    }
  }
  .habit__days {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;
  }
  .habit__day {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100%;

    p {
      font-size: 1.2em;
    }
    svg {
      font-size: 1.4em;
    }
  }
  .split-bar {
    position: absolute;
    top: 47px;
    left: 0;
    right: 0;
    margin: 0 auto;

    width: 92%;

    border: 1px solid rgba(0, 0, 0, 0.03);
  }
`;

export default StyledHabit;
