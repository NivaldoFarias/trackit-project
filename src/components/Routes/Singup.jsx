import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import logo from "./../../assets/images/logo.png";
import Container from "../Layout/Container.js";
import InputGroup from "../Layout/InputGroup.js";
import StyledLink from "./../Layout/StyledLink.js";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
  });
  const navigate = useNavigate();

  const validateForm =
    formData.name?.length > 0 &&
    formData.email?.length > 0 &&
    formData.password?.length > 0 &&
    formData.image?.length > 0
      ? ""
      : "disabled";

  function handleSignUp(e) {
    e.preventDefault();

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        name: formData.name,
        email: formData.email,
        image: formData.image,
        password: formData.password,
      }
    );

    promise.then((response) => {
      console.log(response);
      navigate("/");
    });
    promise.catch((error) => console.log(error.response));
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <figure>
        <img src={logo} alt="logo" />
        <figcaption>TrackIt</figcaption>
      </figure>
      <form onSubmit={handleSignUp}>
        <InputGroup>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Nome</label>
        </InputGroup>
        <InputGroup>
          <input
            type="text"
            value={formData.email}
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
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Senha</label>
        </InputGroup>
        <InputGroup>
          <input
            type="text"
            value={formData.image}
            name="image"
            onChange={handleInputChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Avatar URL</label>
        </InputGroup>
        <button className={validateForm} type="submit">
          Cadastrar
        </button>
        <StyledLink to="/">Já possui uma conta? Faça Login</StyledLink>
      </form>
    </Container>
  );
}

export default SignUp;
