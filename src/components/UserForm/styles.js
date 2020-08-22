import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  background-color: transparent;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1.5px solid #ccc;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 8px 4px;
  /* quitando la linea azul que sale cuando le doy click */
  outline: none;
  height: 45px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`;

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

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;

export const Error = styled.span`
  color: red;
  font-size: 14px;
`;
