import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 90px 36px;
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.altTertiary};

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    height: fit-content;
    width: 100%;

    img {
      width: 150px;
    }
    figcaption {
      font-family: "Playball", cursive;
      font-size: 69px;
      text-align: center;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  form {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    width: 100%;
    height: fit-content;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 300px;
      height: 50px;

      font-size: 1.4em;
      color: white;

      border: none;
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 5px;

      &:hover {
        filter: brightness(1.3);
      }
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};

    &:hover {
      filter: brightness(1.5);
    }
  }
`;

export default Container;
