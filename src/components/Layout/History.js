import styled from "styled-components";

const StyledHistory = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 101px 18px;
  height: 100%;
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
`;

export default StyledHistory;
