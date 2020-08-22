import React from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

//Usando Suspense le quitamos el nombre a lo que vamos a exportar
export default () => (
  <Layout title="Tus Favoritos" subtitle="Aqui puedes encontrar tus favoritos">
    <FavsWithQuery />
  </Layout>
);
