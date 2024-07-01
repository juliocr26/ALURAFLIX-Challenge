import styled from "styled-components";

const PlayerStylizado = styled.img`
  width: 500px;
  height: 250px;
  position: absolute;
  top: 270px;
  left: 725px;
  border-radius: 20px;
  box-shadow: 0px 0px 17px 8px rgba(107, 209, 255, 1) inset;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 460px;
    top: 400px;
    left: 510px;
  }
`;

export default PlayerStylizado;
