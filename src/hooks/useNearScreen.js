import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  //empezamos con el useRef para cojer la referencia del elemento en el dom
  const element = useRef(null);
  //le añadimos el estado local
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      Promise.resolve(
        //para usar el import solo cuando lo necesitamos vamos a chequear si el navegador lo tiene para asi no ejecutarlo sin necesidad
        //-> este terneario me devuelve una promesa
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
        //import dinamico -> devuelve una promesa
      ).then(() => {
        //IntersectionObserver es una api de la platadorma de la web esta en el objeto window
        //recibe una funcion que va a tener todas las entradas qwue estan en el viewport y esta observando
        const observer = new window.IntersectionObserver(function (entries) {
          //isIntersecting -> la constante dentro del IntersectionObserver que nos va a indicar si nuestro elemento esta visible(viewport) o si no lo esta con un booleano
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            //actualizamos el estado del componente
            setShow(true);
            //evitamos que el observador se vuelva a actualizar
            observer.disconnect();
          }
        });
        //lo usamos: y le pasamos el elemento que queremos observar
        observer.observe(element.current);
      });
      //queremos que se ejecdute solo cuando cambie la referencia
    },
    [element]
  );

  return [show, element];
}
