import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  //para que quede encima de todo z-index
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  //El selector padre 'Link' va a tener un atributo aria-current -> para estilar los iconos de donde nos encontramos (ruta)
  //cuando estemos en dicha ruta el icono queda resaltado en negro gracias a nuestros estilos
  &[aria-current] {
    color: #000;
    //after-> esto se refiere a un pseudo elemento que esta justo despues del elemento
    &:after {
      ${fadeIn({ time: "1s" })};
      //asi vera el usuario con un . que esta act ese boton
      content: ".";
      position: absolute;
      bottom: 10px;
      font-size: 34px;
      line-height: 20px;
    }
  }
`;
