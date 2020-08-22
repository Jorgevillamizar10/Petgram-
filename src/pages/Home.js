import React from "react";
import { ListOfCategories } from "../components/ListOfCategories/index";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Layout } from "../components/Layout";

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="Tu app de fotos de mascotas"
      // subtitle="Con Petgram puedes encontrar las mejores fotos de mascotas"
    >
      <ListOfCategories />
      {/* le pasamos por props el id para las categorias  */}
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

//aplicamos el react memo para evitar el re renderizado
//react.memo -> acepta un segundo parametro que es una funcion -> que recibe las props anteriores y las actuales
export const Home = React.memo(HomePage, (prevProps, props) => {
  //le decimos que si va tener que volver a renderizar en el caso de que la id no sea igual a las props actuales
  //va a tener que recordarlo si la prop anterior y la actual es la misma
  //de esta forma se va a evitar el re renderizado
  return prevProps.categoryId === props.categoryId;
});
