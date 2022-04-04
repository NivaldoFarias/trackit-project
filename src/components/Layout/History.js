import styled from "styled-components";

const StyledHistory = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 101px 18px;
  min-height: 100%;
  width: 100vw;

  font-weight: 300;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.altTertiary};
  color: ${(props) => props.theme.colors.primary};

  h1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    font-size: 2.5rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.2em;
  }
  .history-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;
    width: 100%;

    &__day {
      font-size: 1.5em;
    }
    &__habit {
      padding: 5px 0 0 10px;
      display: flex;
      align-items: center;
      gap: 10px;

      p.done {
        color: ${(props) => props.theme.colors.success};
      }
      p.not-done {
        color: ${(props) => props.theme.colors.danger};
      }
    }
  }
  .react-calendar {
    font-family: ${(props) => props.theme.fonts.primary};

    border: none;
    border-radius: 10px;
    background-color: white;
    box-shadow: lightgrey 6px 6px 0px 0px;
    transition: all 200ms ease-out 0s;

    &__tile {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 46px;
      padding: 0;
      border-radius: 50%;
      transition: all 100ms ease-out 0s;

      p {
        font-size: 16px;
      }
      &--active p,
      &--now p,
      &--done p,
      &--not-done p {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 16px;
        color: white;

        height: 40px;
        width: 40px;
        border-radius: 50%;
      }
      &:hover {
        background-color: transparent;
        cursor: default !important;
        p {
          cursor: pointer;
        }
      }
      &--now {
        background-color: transparent;

        &:hover {
          background-color: transparent;
        }
        p {
          background-color: ${(props) => props.theme.colors.primary};
          color: white;
        }
      }
      &--active {
        background-color: transparent !important;
        p {
          color: white;
        }
      }
      &--done p {
        background-color: ${(props) => props.theme.colors.success};
      }
      &--not-done p {
        background-color: ${(props) => props.theme.colors.danger};
      }
      &--active.react-calendar__tile--now p,
      &--active.react-calendar__tile--done p,
      &--active.react-calendar__tile--not-done p {
        transform: scale(1.1);
      }
    }
    &__month-view__weekdays {
      font-size: 0.9em;
      font-weight: 300;
      text-decoration: none !important;
    }
    &__month-view__days {
      height: 290px !important;
      width: 322px !important;

      &__day {
        background-color: transparent;
        cursor: default;
      }
    }
    &__navigation button {
      color: ${(props) => props.theme.colors.primary};
      min-width: 44px;
      background: none;
      font-size: 1.1em;
      margin-top: 12px;
    }
    abbr[title] {
      text-decoration: none;
    }
  }
  > div > div.react-calendar__viewContainer > div > div > div {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default StyledHistory;
