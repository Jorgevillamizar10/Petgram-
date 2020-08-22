import React, { useEffect, useState } from "react";
import { Category } from "../Category";
import { List, Item } from "./styles";

// esta funcion -> va a ser la responsable de hacer el fetching de datos
// CustomHook creado por nosotros
const useCategoriesData = () => {
  // usando hooks
  // va a tener un estado local
  const [categories, setCategories] = useState([]);
  // como valor inicial un array vacio

  const [loading, setloading] = useState(false);

  // el Efecto haciendo el fetching de datos
  useEffect(() => {
    const fetchCategories = async () => {
      // antes de tener los datos hacemos true el loader (actualizamos el estado)
      setloading(true);
      const response = await window.fetch(
        "https://petgram-api-pro-master.vercel.app/categories"
      ); // response = respuesta de las categorias
      const data = await response.json(); // convertimos la respuesta en .json
      // actualizamos nuestro state
      setCategories(data); // de esta forma cuando tengamos la respuesta la guardamos en categories

      // cuando ya los tenemos vuelve a su estado inicial false
      setloading(false);
    };
    // -> llamamos la funcion
    fetchCategories();
    // el segundo parametros es que dependencias necesita este efecto para ejecutarse
    // le pasamos un array vacio , para que este se ejecute solo cuando se monte el componente
  }, []);

  // un hook tiene que devolver algo
  return { categories, loading };
};

// este listofcategories me tiene que devolver una lista
// donde queremos renderizar todas las categories que tenemos disponibles
const ListOfCategoriesComponent = () => {
  // recibiendo el hook
  const { categories, loading } = useCategoriesData();

  // usando hooks
  // estado que va a saber si el scroll esta fijo
  const [showFixed, setShowFixed] = useState(false);

  // para manejar las listas con el scroll
  useEffect(() => {
    // -> onScroll va a recibir el evento del scroll de forma que vamos a saber cuando se tienen que mostrar las categorias fijas
    const onScroll = (e) => {
      // cuando el scroll en su eje vertical (y) sea > a 200
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    // limpiando el efecto cada vez que se vuelva a ejecutar
    return () => document.removeEventListener("scroll", onScroll);

    // le añadimos la dependencia showfixed -> porque este estado cada vez que cambie queremos que se ejecute el efecto
  }, [showFixed]);

  const renderList = (fixed) => (
    // para que la lista de categorias me quede fija asi hagamos scroll al bajar la app
    // usamos las props fixed que nos dira si es true or false
    // si es true se crea la prop y si no no se crea lo cual manejamos la condicion con una funcion en los styles
    <List fixed={fixed}>
      {
        // hacemos un terneario para el loading
        loading ? (
          <Item key={loading}>Loading...</Item>
        ) : (
          categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
        )
        // {...categories} -> rest operator me pasa todas las props ahorrandome codigo
      }
    </List>
  );

  return (
    // como no podemos renderizar dos cosas a la vez lo envolvemos dentro de un elemento fragment
    <>
      {/* para que se puedan ejecutar tienen que ir dentro de llaves  */}
      {renderList()}
      {/* la vamos a renderizar solo cuando showFixed sea true  */}
      {showFixed && renderList(true)}
    </>
  );
};

//para evitar re renderizados usamos react.memo
export const ListOfCategories = React.memo(ListOfCategoriesComponent);
