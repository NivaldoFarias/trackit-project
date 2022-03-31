import styled from "styled-components";

/* sourced from https://codepen.io/nzbin/pen/GGrXbp?editors=1100 (modified) */

const LoadingDots = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.altTertiary};
  box-shadow: 10000px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
  animation: dotPulse 1s infinite linear;
  animation-delay: 0.17777777s;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.altTertiary};
    color: ${(props) => props.theme.colors.altTertiary};
  }

  &::before {
    box-shadow: 9970px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    animation: dotPulseBefore 1s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    box-shadow: 10019px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    animation: dotPulseAfter 1s infinite linear;
    animation-delay: 0.33333s;
  }
  @keyframes dotPulseBefore {
    0% {
      box-shadow: 9970px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
    30% {
      box-shadow: 9970px 0 0 2px ${(props) => props.theme.colors.altTertiary};
    }
    60%,
    100% {
      box-shadow: 9970px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
  }
  @keyframes dotPulse {
    0% {
      box-shadow: 10000px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
    30% {
      box-shadow: 10000px 0 0 2px ${(props) => props.theme.colors.altTertiary};
    }
    60%,
    100% {
      box-shadow: 10000px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
  }
  @keyframes dotPulseAfter {
    0% {
      box-shadow: 10019px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
    30% {
      box-shadow: 10019px 0 0 2px ${(props) => props.theme.colors.altTertiary};
    }
    60%,
    100% {
      box-shadow: 10019px 0 0 -5px ${(props) => props.theme.colors.altTertiary};
    }
  }
`;

export default LoadingDots;
