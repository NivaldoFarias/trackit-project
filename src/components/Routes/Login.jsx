import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "./../../contexts/UserContext";
import TokenContext from "./../../contexts/TokenContext";
import logo from "./../../assets/images/logo.png";

import Container from "./../Layout/Container";
import StyledLink from "./../Layout/StyledLink";
import InputGroup from "./../Layout/InputGroup";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const validateLogin =
    loginData.email?.length > 0 && loginData.password?.length > 0
      ? ""
      : "disabled";

  function handleLogin(e) {
    e.preventDefault();
    console.log(loginData.email, loginData.password);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: loginData.email,
        password: loginData.password,
      }
    );

    promise.then((response) => {
      setUser(response.data);
      setToken(response.data.token);
      navigate("/habits");
    });
    promise.catch((error) => console.log(error.response));
  }

  function handleInputChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
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
            type="text"
            value={loginData.email}
            name="email"
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>E-mail</label>
        </InputGroup>
        <InputGroup>
          <input
            type="password"
            value={loginData.password}
            name="password"
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Senha</label>
        </InputGroup>
        <button className={validateLogin} type="submit">
          Entrar
        </button>
        <StyledLink to="/signup">Não possui uma conta? Cadastre-se</StyledLink>
      </form>
    </Container>
  );
}

export default Login;
