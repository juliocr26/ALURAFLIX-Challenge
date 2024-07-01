import styled from "styled-components";

const ContainerStylizado = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
  position: absolute;
  top: 300px;
  left: 45px;

  h1 {
    font-family: "Roboto";
    font-size: 46px;
    font-weight: 400;
    color: rgba(245, 245, 245, 1);
    line-height: 53.91px;
    margin: 30px 0 0 0;
  }

  p {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: left;
    color: #fff;
    position: relative;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    top: 380px;
  }
`;

export default ContainerStylizado;
