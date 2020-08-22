import React, { Fragment } from "react";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton/index";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    //utilizamos el ref como una prop en article
    //->la prop ref es una prop especial de react que nos va a permitir capturar el elemento del dom
    //con ref vamos a guardar esa referencia en esta constante
    <Article ref={element}>
      {
        // haciendo el ternario manejando el estado
        show && (
          <Fragment>
            {/* va al detalle de la fotografia para eso el string /detail/ */}
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <ToggleLikeMutation>
              {/* necesita una render prop osea una funcion que le diga lo que queremos renderizar  */}
              {/* como parametro le va a llegar la mutacion que queremos realizar */}
              {(toggleLike) => {
                //toggleLike -> es lo que podemos usar a la hora de act no solo el estado si no tambien la base de datos

                const handleFavClick = () => {
                  //llamamos el toggleLike para poder cambiar en la base de datos el like de esta foto
                  //lo cambiamos si no nos esta gustando la foto

                  //le pasamos un objeto llamado variables que va a ser a su vez otro objeto que va a ser el input que va a tener nuestra mutacion
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                };

                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }}
            </ToggleLikeMutation>
          </Fragment>
        )
      }
    </Article>
  );
};

// PhotoCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   liked: PropTypes.bool.isRequired,
//   src: PropTypes.string.isRequired,
//   likes: Function(props, propName, componentName)
//   {
//     const propValue = props[propName]

//     if(propValue === undefined){
//       return new Error(`${propName} Value must be defined`)
//     }

//     if(propValue < 0){
//       return new Error(`${propName} Value must be greater than 0`)
//     }
//   }
// }
