import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";

import UserContext from "../../hooks/UserContext";
import TokenContext from "../../hooks/TokenContext";
import logo from "./../../assets/images/logo.png";

import Container from "../Layout/Container.js";
import StyledLink from "./../Layout/StyledLink.js";
import InputGroup from "../Layout/InputGroup.js";
import LoadingDots from "./../Layout/LoadingDots.js";

import getRandomInt from "../../utils/getRandomInt.js";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/today");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateLogin =
    loginData.email?.length > 0 &&
    loginData.password?.length > 0 &&
    !hasSubmitted
      ? validateEmail(loginData.email)
      : "disabled";

  function handleLogin() {
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

      navigate("/today");
    });
    promise.catch((error) => {
      confirmAlert({
        message: `${error.response.data.message} Por favor, tente novamente.`,
        buttons: [
          {
            label: "OK",
            onClick: () => null,
          },
        ],
      });
      resetAll();
    });
  }

  function handleInputChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function resetAll() {
    setHasSubmitted(false);
    setLoginData({
      email: "",
      password: "",
    });
  }

  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>TrackIt</figcaption>
      </figure>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHasSubmitted(true);
          setTimeout(() => {
            handleLogin();
          }, getRandomInt(750, 2000));
        }}
      >
        <InputGroup>
          <input
            className={hasSubmitted ? "disabled" : ""}
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
            className={hasSubmitted ? "disabled" : ""}
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
          <p className={hasSubmitted ? "hidden" : ""}>Entrar</p>
          <LoadingDots
            className={hasSubmitted ? "dot-pulse" : "dot-pulse hidden"}
          ></LoadingDots>
        </button>
        <StyledLink to="/signup">Não possui uma conta? Cadastre-se</StyledLink>
      </form>
    </Container>
  );

  function validateEmail(email) {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return "";
    }
    return "disabled";
  }
}

export default Login;
