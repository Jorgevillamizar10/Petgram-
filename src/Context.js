import React, { createContext, useState } from "react";

// la exportamos para poder usarla con un hook
export const Context = createContext();

const Provider = ({ children }) => {
  //la funcion del useState -> lee del sessionsStorage si el usuario esta registrado o no
  // si a iniciado sesion o se a registrado
  //para que al cargar la pagina no perder los datos
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  //lo que vamos a pasar como prop al Provider de index
  const value = {
    isAuth,
    //va a ser una funcion que va a actualizar el estado
    //le llega como parametro el token del resultado de la promesa al inciciar sesion o registrarse
    activateAuth: (token) => {
      setIsAuth(true);
      //guardamos el token en el sessionStorage
      window.sessionStorage.setItem("token", token);
    },
    //para cerrar sesion
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token");
    },
  };

  //pasamos por props el children con nuestro estadp
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
