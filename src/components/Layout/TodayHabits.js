import styled from "styled-components";

const TodayHabits = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 101px 18px;
  min-height: 100%;
  width: 100%;

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
    width: 340px;

    svg {
      position: absolute;
      top: 5px;
      right: 0;
      font-size: 3em;
    }
    &__title {
      font-size: 1.5em;
    }
    &__habits-info {
      width: 83%;

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

    min-height: 100%;
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
    width: 350px;

    border-radius: 10px;
    background-color: white;
    box-shadow: lightgrey 5px 5px 0px 0px;
    transition: all 250ms ease-out 0s;

    .split-bar {
      position: absolute;
      top: 52px;
      left: 10px;

      width: 242px;

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
      &:hover {
        cursor: pointer;
      }
      &.clicked {
        left: 2px;
        top: 4px;

        border: 1px solid ${(props) => props.theme.colors.btnShadowGreen};
        background-color: ${(props) => props.theme.colors.btnGreen};
        box-shadow: transparent 0px 0px 0px 0px;
      }
    }

    @media screen and (max-width: 375px) {
      width: 330px;
      .split-bar {
        width: 220px;
      }
    }
  }
`;

export default TodayHabits;
