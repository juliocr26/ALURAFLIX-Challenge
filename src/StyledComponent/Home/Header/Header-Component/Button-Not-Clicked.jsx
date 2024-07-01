import styled from "styled-components";

const ButtonNotClick = styled.button`
  width: 180.13px;
  height: 54px;
  font-family: "Source Sans 3";
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 24px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid rgba(245, 245, 245, 1);
  background-color: transparent;
  color: #fff;
`;

export default function ButtonNotClicked({ title }) {
  return <ButtonNotClick>{title}</ButtonNotClick>;
}
