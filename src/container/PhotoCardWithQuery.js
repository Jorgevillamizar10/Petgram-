import React from "react";
import { PhotoCard } from "../components/PhotoCard/index";
import { gql } from "apollo-boost";
//es un componente especial que nos permitira utilizar la tecnica de render props
import { Query } from "react-apollo";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

// {/* tecnica de las render props renderizamos una funcion */}
const renderProp = ({ loading, error, data = { photo: {} } }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  //sacamos de datala photo y le damos un valor por defecto
  const { photo = {} } = data;
  //se la pasamos a nuestro componente con el resOperator para que salga la imagen seleccionada y no otra
  return <PhotoCard {...photo} />;
};

export const PhotoCardWithQuery = ({ id }) => (
  //nos devuelve el componente que queremos renderizar que va a ser:
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
