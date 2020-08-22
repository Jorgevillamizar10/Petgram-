import React from "react";
import ReactDom from "react-dom";
import { App } from "./App";
//aqui en el punto de entrada vamos a preparar la conexion con el servidor de apollo
//importamos ApolloClient
import ApolloClient from "apollo-boost";
//ApolloProvider va a ser un componente con el que vamos a envolver nuestra app de forma que podamos utilizar apollo en cualquier parte del arbol de elementos
import { ApolloProvider } from "react-apollo";
import Context from "./Context";

//inicializamos el cliente
const client = new ApolloClient({
  //tenemos que pasarle una configuracion que va a ser:
  //url-> donde tenemos nuestro servidor de graphql
  uri: "https://petgram-api-pro-master.vercel.app/graphql",
  //propiedad request -> va a ser una funcion que como parametro va a tener la operacion que esta realizando
  //se va a ejecutar justo antes de hacer cualquier peticion al servidor
  request: (operation) => {
    //-> recuperamos el token del sessionsStorage
    //y asi se lo pasamos a todas las peticiones que hagamos
    const token = window.sessionStorage.getItem("token");
    //si el token existen creamos el Bearer y utilizamos el token si no tendra un string vacio
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
  //añadimos onError-> recibe el error que se a producido
  onError: (error) => {
    //recuperamos el error de la networkError
    const { networkError } = error;
    //si este en su resultado nos dice que el token no es valido
    if (networkError && networkError.result.code === "invalid_token") {
      //vamos al sessionsStorage y quitamos el token y el usuario no puede seguir utilizandolo
      window.sessionStorage.removeItem("token");
      // y luego vamos a hacer que el usuario vuelva a la pantalla de inicio y asi tenga que volver a inicializar la sesion
      window.location.href = "/";
    }
  },
});

ReactDom.render(
  <Context.Provider>
    {/* //envolvemos la app con apolloProvider */}
    {/* //esta necesita un prop que es client */}
    <ApolloProvider client={client}>
      {/* ya tenemos nuestra app lista para conectarse con graphql */}
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
