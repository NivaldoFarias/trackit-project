import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

import UserContext from "./../../contexts/UserContext";
import TokenContext from "./../../contexts/TokenContext";
import logo from "./../../assets/images/logo.png";
import InputGroup from "./../Layout/InputGroup";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);

  function handleLogin(e) {
    e.preventDefault();
    console.log(email, password);

    /* const promise = axios.post(
      "https://mock-api.driven.com.br/api/v2/camppi/auth/login",
      {
        email,
        password,
      }
    );

    promise.then((response) => {
      setUser(response.data);
      setToken(response.data.token);
      navigate("/market");
    });
    promise.catch((error) => console.log(error.response)); */
  }

  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>TrackIt</figcaption>
      </figure>
      <form onSubmit={handleLogin}>
        <InputGroup>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>E-mail</label>
        </InputGroup>
        <InputGroup>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Senha</label>
        </InputGroup>
        <button className="disabled" type="submit">
          Entrar
        </button>
        <StyledLink to="/signup">Não possui uma conta? Cadastre-se</StyledLink>
      </form>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  padding: 90px 36px;
  height: 100vh;
  width: 100vw;

  background-color: ${(props) => props.theme.colors.altTertiary};

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    height: fit-content;
    width: 100%;

    img {
      width: 40%;
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
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8em;
  font-family: Lexend Deca, cursive;
  color: blue;

  cursor: pointer;
`;
