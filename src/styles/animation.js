import {css,keyframes} from "styled-components";

export const fadeInKeyframes = keyframes`
  from{
    //para que tenga una animacion con un desenfoque interesante
    filter: blur(5px);
    opacity:0;
  }

  to{
    //quitamos el desenfoque
    filter:blur(0);
    opacity:1;
  }
`

export const reboteKeyframes = keyframes`
  0%{
    top:-110px;
  }

  25%{
    top:0px;
  }

  40%{
    top:20px;
  }

  65%{
    top:-12px;
  }

  80%{
    top:10px;
  }

  95%{
    top:-5px;
  }

  100%{
    top:0px;
  }
`

//Funcion para hacer reutilizable la animacion para eso importamos la utilidad css
//fadeIn-> recibe el tiempo de la animacion y el tipo de la animacion
//por defecto recibe un objeto vacio
export const fadeIn = ({time='1s' , type ='ease'} = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`
export const rebot = ({time='1s' , type ='ease'} = {}) => css`
  animation: ${time} ${reboteKeyframes} ${type};
`