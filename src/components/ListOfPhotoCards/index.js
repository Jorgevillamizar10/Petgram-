import React from "react";
import { PhotoCard } from "../PhotoCard/index";

//Componente
// traemos las fotos de data
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } }) => {
  return (
    <ul>
      {/* mapeamos el array que estamos trayendo */}
      {/* pasamos el resto de los campos con ...  */}
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
