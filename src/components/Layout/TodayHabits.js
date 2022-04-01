import styled from "styled-components";

const TodayHabits = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  padding: 101px 18px;
  height: calc(100% - 80px);
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
      top: 3px;
      right: 0;
      font-size: 2.5em;
    }
    &__title {
      font-size: 1.5em;
    }
    &__habits-info {
      font-size: 1em;
      filter: opacity(0.5);
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
    width: 100%;

    border-radius: 10px;
    background-color: white;
    box-shadow: lightgrey 5px 5px 0px 0px;
    transition: all 250ms ease-out 0s;

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      height: 100%;
      width: fit-content;

      &__name {
        font-size: 1.4em;
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
