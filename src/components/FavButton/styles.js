import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  //& -> selector anidado de styles-component
  & svg {
    margin-right: 4px;
  }
`;
