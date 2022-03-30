import styled from "styled-components";

function LoadingSpinner() {
  return (
    <Spinner>
      <div className="spinner">
        <div className="ripple primary"></div>
        <div className="ripple secondary"></div>
      </div>
    </Spinner>
  );
}

const Spinner = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 300px;

  margin: 0 auto;
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
  .spinner {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */

    .ripple {
      position: absolute;
      border-width: 4px;
      border-style: solid;
      opacity: 1;
      border-radius: 50%;
      animation: spinner 0.6896551724137931s cubic-bezier(0, 0.2, 0.8, 1)
        infinite;
    }
    .primary {
      border-color: rgb(76, 30, 79);
      animation-delay: 0s;
    }
    .secondary {
      border-color: rgb(95, 72, 224);
      animation-delay: -0.3448275862068966s;
    }
  }
  @keyframes spinner {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }
`;

export default LoadingSpinner;
