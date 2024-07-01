import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding-right: 20px;
  gap: 1em;

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 40%;
  }
`;
