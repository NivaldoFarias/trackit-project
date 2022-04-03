import styled from "styled-components";

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 100px 18px 120px;
  height: 100%;
  width: 100vw;

  overflow-y: scroll;

  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.altTertiary};
  color: ${(props) => props.theme.colors.primary};

  .my-habits {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    width: 350px;

    p {
      padding-bottom: 2px;
      align-self: flex-end;
      font-size: 1.6em;
      user-select: none;
    }
    .add-habit-btn {
      position: relative;
      left: 0px;
      top: 0px;

      display: flex;
      justify-content: center;
      align-items: center;

      height: 40px;
      width: 40px;

      font-size: 0.77em;
      font-weight: 300;
      color: white;

      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secondary};
      box-shadow: ${(props) => props.theme.colors.btnShadowColor} 0px 4px 0px
        0px;
      transition: all 300ms ease-in-out 0s;

      &:hover {
        cursor: pointer;
      }
      ion-icon {
        font-size: 1.9em;
        --ionicon-stroke-width: 60px;
        pointer-events: none;
      }
      &.clicked {
        left: 0px;
        top: 3px;

        cursor: default;
        background-color: ${(props) => props.theme.colors.tertiary};
        box-shadow: transparent 0px 0px 0px 0px;
      }
    }
  }
  .create-habit {
    position: relative;
    left: 0px;
    top: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    padding: 18px;
    height: 180px;
    width: 340px;

    border-radius: 10px;
    background-color: white;
    box-shadow: lightgrey 5px 5px 0px 0px;
    transition: all 250ms ease-out 0s;

    &.collapsed {
      padding: 0px;
      height: 0;
      left: 5px;
      top: 5px;
      background-color: transparent;
      box-shadow: transparent 0px 0px 0px 0px;
      * {
        display: none !important;
      }
    }
    &__name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      height: 55px;
      width: 100%;
      user-select: none;

      input {
        font-size: 1.2em;
        color: rgba(102, 102, 102, 1);
      }
      label {
        font-size: 1.1em;
        color: lightgrey;
      }
    }
    .checkboxes-container {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;

      padding-right: 3px;
      width: 100%;
    }
    .checkbox {
      position: relative;
      height: 30px;
      width: 30px;
      user-select: none;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      label {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;

        height: 32px;
        width: 32px;

        cursor: pointer;
        border: 1px solid lightgrey;
        border-radius: 50%;
        background-color: transparent;
      }
      input:checked ~ .checkmark {
        background-color: lightgrey;
      }
    }
    .btn-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      width: 100%;

      #cancel-btn {
        align-self: center;
        margin-top: 20px;

        color: grey;
        font-size: 0.9em;
        letter-spacing: 3px;
        text-align: center;
        text-transform: uppercase;

        user-select: none;
        cursor: pointer;
        border-style: none;
        background-color: inherit;
        transition: all 200ms ease-in-out 0s;
      }
      #save-btn {
        display: flex;
        justify-content: center;
        align-items: center;

        align-self: center;
        margin-top: 15px;

        height: 30px;
        width: 110px;

        user-select: none;
        cursor: pointer;
        border-style: none;
        border-radius: 5px;
        background-color: ${(props) => props.theme.colors.primary};
        transition: all 200ms ease-in-out 0s;

        p {
          color: white;
          font-size: 1.2em;
          letter-spacing: 3px;
          text-align: center;
          text-transform: uppercase;
          pointer-events: none;
        }
      }
    }
  }
  .no-habits-alert {
    display: flex;
    align-items: flex-start;

    user-select: none;

    font-size: 1.1em;
    line-height: 1.2em;
    font-family: "Lexend Deca", sans-serif;
    color: ${(props) => props.theme.colors.primary};
  }
  .split-bar {
    position: absolute;
    top: 40px;
    left: -3px;

    width: 280px;

    border: 1px solid rgba(0, 0, 0, 0.03);
  }
`;

export default Main;
