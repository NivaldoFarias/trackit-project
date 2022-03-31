import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 18px;
  height: 80px;
  width: 100vw;

  font-size: 2.8em;
  color: white;
  font-family: ${(props) => props.theme.fonts.logotype};

  user-select: none;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 5px 7px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 53px;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

export default Header;
