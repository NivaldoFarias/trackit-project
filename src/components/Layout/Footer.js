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

  height: min-content;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.altTertiary};

  .text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 31px 10px 36px;
    height: 80px;
    width: 100%;

    font-size: 1.25em;
    font-weight: 300;
    font-family: "Lexend Deca", cursive;
    color: ${(props) => props.theme.colors.primary};

    box-shadow: 2px -3px 7px 0px rgba(0, 0, 0, 0.15);
    background-color: white;

    > * {
      user-select: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .progressbar-container {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 20px;

    margin: 0 auto;
    width: 95px;
    height: 95px;

    user-select: none;
    * {
      cursor: pointer;
    }
  }
`;

export default StyledFooter;
