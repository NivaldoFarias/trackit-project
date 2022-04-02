import styled from "styled-components";

const TodayHabits = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 101px 18px;
  height: 100%;
  width: 100vw;

  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.altTertiary};
  color: ${(props) => props.theme.colors.primary};

  * {
    user-select: none;
  }
  .date {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    height: fit-content;
    width: 100%;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 1.8em;
    }
    &__title {
      font-size: 1.5em;
    }
    &__habits-info {
      width: 86%;

      font-size: 0.95em;
      line-height: 1.2em;
      filter: opacity(0.6);
    }
  }
  .habits {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    height: 100%;
    width: 100%;
  }
  .habit {
    position: relative;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
    height: 120px;
    width: 340px;

    border-radius: 10px;
    background-color: white;
    box-shadow: lightgrey 5px 5px 0px 0px;
    transition: all 250ms ease-out 0s;

    .split-bar {
      position: absolute;
      top: 54px;
      left: 7px;

      width: 222px;

      border: 1px solid rgba(0, 0, 0, 0.03);
    }
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 25px;

      height: 100%;
      width: fit-content;

      &__name {
        font-size: 1.4em;
      }
      &__streaks {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;

        font-size: 0.95em;
        filter: opacity(0.8);
      }
      span.green-text {
        color: ${(props) => props.theme.colors.btnShadowGreen};
      }
    }
    &__checkbox {
      position: relative;
      left: 0px;
      top: 0px;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 75px;
      width: 75px;

      cursor: pointer;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.colors.regularGreen};
      background-color: ${(props) => props.theme.colors.lighterGreen};
      box-shadow: ${(props) => props.theme.colors.lightGreen} 2px 4px 0px 0px;
      transition: all 200ms ease-in-out 0s;

      * {
        cursor: pointer;
        color: white;
        font-size: 2.8em;
      }
      &.clicked {
        left: 2px;
        top: 4px;

        border: 1px solid ${(props) => props.theme.colors.btnShadowGreen};
        background-color: ${(props) => props.theme.colors.btnGreen};
        box-shadow: transparent 0px 0px 0px 0px;
      }
    }
  }
`;

export default TodayHabits;
