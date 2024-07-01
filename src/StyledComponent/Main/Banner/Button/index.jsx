import styled from "styled-components";

const ButtonStylizado = styled.button`
  font-family: "Roboto";
  font-weight: 800;
  color: #fff;
  background-color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.ancho};
  height: ${(props) => props.alto};
  border-radius: ${(props) => props.radius};
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export default ButtonStylizado;
