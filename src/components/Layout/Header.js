import styled from "styled-components";

const StyledHeader = styled.header`
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

  font-size: 3.1em;
  color: white;
  font-family: ${(props) => props.theme.fonts.logotype};

  user-select: none;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 2px 5px 7px 0px rgba(0, 0, 0, 0.2);

  .logo-container {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      position: absolute;
      top: 16px;
      left: 126px;

      width: 16px;
    }
  }
  > img {
    width: 53px;
    height: 53px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    border: 2px solid white;
  }
`;

export default StyledHeader;
