//hoc -> hide order components -> recuperar los datos y envolver un componente para recuperar estos datos y pasarcelos pror props
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

//llamando las fotos del api con graphql
//withPhotos -> nos permite envolver el componente y traer la informacion
//withPhotos -> este patron se llama componente de orden superior ya que es una funcion que se la pasa por parametro un componente y devuelve otro componente ya sea con mejoras o con props inyectadas
//en este caso vamos a inyectar las props con la respuesta de graphql
const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const withPhotos = graphql(GET_PHOTOS);
