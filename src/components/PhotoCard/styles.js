import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

//para manejar el state de los articulos en el viewport y me salgan donde tienen que estar
//para evitar que todos me marquen true
export const Article = styled.article`
  //altura minima de 100px
  min-height: 100px;
`;

export const ImgWrapper = styled.div`
  ${fadeIn()}
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;
export const Img = styled.img`
  box-shadow: 0 10px 14px rgna(0, 0, 0, 0.2);
  height: 100%;
  //para que la imagen se adapte al espacio que tiene
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
