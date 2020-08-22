import React, { useContext, Suspense } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Router, Redirect } from "@reach/router";
import { Detail } from "./pages/Detail";
// import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Context } from "./Context";

//vamos a llamar Favs solo cuando lo necesitemos por eso usamos React.lazy
//React.lazy -> necesita una funcion que devuelva un import dinamico
const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    //Suspense-> Componente esta en modo de suspension esto quiere decir que todavia no esta cargado no esta listo para renderizarse
    //necesita una prop fallback -> es lo que renderizara mientras esta cargando el componente
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        {/* default -> si ninguna ruta esta macheando vamos a utilizar NotFound para renderizarlo */}
        <NotFound default />
        {/* las rutas que tenemos */}
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        {/* path="/pet/:id" -> esto significa en el path que va a estar /pet/ , :id -> y esto es un segmento especial que podremos capturar para recuperar la id de la categoria que queremos ver */}
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {/* si el usuario no esta registrado y va a una de estas paginas loo redireccionamos a login y lo obligamos a iniciar sesion */}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {/* si el usuario ya esta autentificado me vaya directo a la home y no me muestre la page NotFound */}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>

      <NavBar />
    </Suspense>
  );
};
