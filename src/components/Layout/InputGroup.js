import styled from "styled-components";

const InputGroup = styled.div`
  position: relative;
  font-family: "Lexend Deca", sans-serif;

  input {
    display: block;
    padding: 10px 10px 10px 5px;
    width: 300px;

    font-weight: 300;
    font-size: 17px;

    border: none;
    background-color: transparent;
    border-bottom: 1px solid rgb(117, 117, 117);
  }
  input:hover {
    cursor: text;
  }
  input:focus {
    outline: none;
  }
  label {
    position: absolute;
    top: 15px;
    left: 5px;

    font-size: 15px;
    font-weight: 300;

    color: #999;

    pointer-events: none;
    transition: 0.2s ease all;
  }
  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: rgb(82, 100, 174);
  }
  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 300px;
  }
  .bar:before,
  .bar:after {
    position: absolute;
    bottom: 1px;

    height: 2px;
    width: 0;

    content: "";
    background: rgb(82, 100, 174);
    transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }
  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }
  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    top: 25%;
    left: 0;

    height: 60%;
    width: 100px;

    opacity: 0.5;
    pointer-events: none;
  }
  /* active state */
  input:focus ~ .highlight {
    animation: input-highlighter 0.3s ease;
  }
  @keyframes input-highlighter {
    from {
      background: rgb(82, 100, 174);
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`;

export default InputGroup;
