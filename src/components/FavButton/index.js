import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const FavButton = ({ liked, likes, onClick }) => {
  //para manejar los iconos cuando le doy like y cuando no
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
  {
    /* boton que maneja los likes que por defecto es 0  */
  }
};

// FavButton.propTypes = {
//   //le indicamos el tipo de prop que es con Proptypes. + el tipo
//   //isRequired le dice que es prop es NECESARIA
//   liked: PropTypes.bool.isRequired,
//   likes: PropTypes.number.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
