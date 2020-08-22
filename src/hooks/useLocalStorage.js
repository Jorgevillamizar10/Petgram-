import { useState } from "react";

//usamos esta funcion para que este hook lo podamos usar en mas oportunidades de forma global
export function useLocalStorage(key, initialValue) {
  //[liked,setliked]
  const [storedValue, setValue] = useState(() => {
    try {
      //para que el render me mantenga el estado y no me lo borre si actualizo la pagina
      const item = window.localStorage.getItem(key);
      //para recuperar e valor que guardamos
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  //PARA que cuando recarge la pagina no me cambie el estado a su valor por defecto
  const setLocalStorage = (value) => {
    try {
      //nos aseguramos que lo que guardamos es un string para eso usamos el stringify de JSON
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };

  //LO QUE RETORNA EL HOOK
  return [storedValue, setLocalStorage];
}
