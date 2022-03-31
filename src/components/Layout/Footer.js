import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  z-index: 1;
  bottom: -13px;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  height: 100px;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.altTertiary};

  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 36px;
    height: 70px;
    width: 100%;
    user-select: none;

    font-size: 1.2em;
    font-weight: 300;
    font-family: "Lexend Deca", cursive;
    color: ${(props) => props.theme.colors.primary};

    box-shadow: 2px -3px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: white;
  }
  .progressbar-container {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 20px;

    margin: 0 auto;
    width: 100px;
    height: 100px;

    user-select: none;
  }
`;

export default StyledFooter;
