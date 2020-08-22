import React from "react";
import { Link, Image } from "./styles";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

// todos los componentes se van a exportar nde forma nombrada ej:
// va a recibir diferentes props la imagen, el path que le va a indicar a donde tiene que dirijirse (como una ruta), y un emoji que nos va a ayudar a identificar cada una de las categorias
export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
}) => (
  // queremos que renderice:
  <Link to={path}>
    <Image src={cover} />
    {/* renderizamos el emoji */}
    {emoji}
  </Link>
);
