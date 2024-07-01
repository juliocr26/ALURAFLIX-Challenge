import styled from "styled-components";

export const CardStylizada = styled.figure`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 300px;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 100px;
  border: 5px solid rgba(107, 209, 255, 1);
  box-shadow: 0px -4px 5px 3px rgba(107, 209, 255, 1) inset;
  background: rgba(0, 0, 0, 0.9);
  .imagenContent {
    height: 80%;
    border: 2px;
    box-shadow: 0px 0px 17px 8px rgba(107, 209, 255, 1) inset;
  }
  .img {
    width: 100%;
  }
  .rodapie {
    width: 80%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
  }

  .rodabpieItems {
    display: flex;
    gap: 1em;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 800;
    line-height: 18.75px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
`;
