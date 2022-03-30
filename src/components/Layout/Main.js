import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 101px 18px;
  height: calc(100% - 80px);
  width: 100vw;

  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.altTertiary};
  color: ${(props) => props.theme.colors.primary};

  .my-habits {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 100%;

    p {
      font-size: 1.3em;
    }
    .add-habit-btn {
      position: relative;
      left: 0px;
      top: 0px;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 36px;
      width: 36px;

      font-size: 0.77em;
      font-weight: 300;
      color: white;

      cursor: pointer;

      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: ${(props) => props.theme.colors.btnShadowColor} 0px 4px 0px
        0px;
      transition: all 300ms ease-in-out 0s;

      &.selected {
        left: 0px;
        top: 3px;

        background-color: ${(props) => props.theme.colors.tertiary};
        box-shadow: transparent 0px 0px 0px 0px;
      }
      ion-icon {
        font-size: 1.9em;
        --ionicon-stroke-width: 60px;
      }
    }
  }
  .habit {
    padding: 18px;
    height: 180px;
    width: 100%;

    border-radius: 10px;
    background-color: white;

    &__name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      height: 55px;
      width: 100%;

      input {
        font-size: 1.2em;
        color: rgba(102, 102, 102, 1);
      }
      label {
        font-size: 1.1em;
        color: lightgrey;
      }
    }
  }
  .no-habits-alert {
    display: flex;
    align-items: flex-start;

    font-size: 1.1em;
    line-height: 1.2em;
    font-family: "Lexend Deca", sans-serif;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default Main;