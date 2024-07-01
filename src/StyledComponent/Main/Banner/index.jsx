import styled from "styled-components";

export const BannerStilizado = styled.div`
  width: 100%;
  height: 110vh;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 600px) and (max-width: 1024px) {
    background-size: auto;
    height: 60vh;
  }
`;

export const Gradient = styled.div`
  height: 110vh;
  width: 100%;
  opacity: 0.5;

  @media (min-width: 600px) and (max-width: 1024px) {
    height: 60vh;
  }
`;
