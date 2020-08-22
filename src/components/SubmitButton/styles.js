import styled from "styled-components";

export const Button = styled.button`
  background-color: #8d00ff;
  border: none;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  height: 50px;
  margin: 10px 0px;
  width: 100%;
  display: block;
  &[disabled] {
    opacity: 0.3;
  }
`;
