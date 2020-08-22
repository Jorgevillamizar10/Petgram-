import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";
import { AiOutlineClose } from "react-icons/ai";

export const NotRegisteredUser = () => {
  //useContext -> nos va a permitir simplificar este componente
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {/* children -> es una funcion */}
        {/* register -> parametro para poder hacer la mutacion, es lo que queremos que se ejecute */}
        {/* del RegisterMutation nos llegan mas props -> {data,loading,error} */}
        {(register, { data, loading, error }) => {
          //onSubmit necesitaba un input , { email, password } -> lo que necesitramso como parametro se lo pasamos en el UseForm
          // onsubmit lo que pasamos como props
          const onSubmit = ({ email, password }) => {
            //llegan parametros -> { email, password }
            const input = { email, password };
            //lo guardamos en input
            const variables = { input };
            //input sera una prop de variables
            //el register que esuna mutacion devuelve una promesa por eso usamos el .then()
            register({ variables }).then(({ data }) => {
              //la promesa nos devuelve un objeto data
              //signup-> token que nos devuelve al iniciar la sesio lo estraemos de data
              const { signup } = data;
              activateAuth(signup);
              //para que al recargar la pagina no perder datos
            });
            //asi autentificamos el usuario
            //variables es el objeto que necesita register para funcionar
          };

          const errorMsg = error && (
            <>
              <AiOutlineClose size="32px" /> El Usuario ya existe o hay algun
              Problema...
            </>
          );
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>

      {/* mutacion para iniciar sesion luego de registrarse  */}
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              //la promesa nos devuelve un objeto data
              //login-> token que nos devuelve al iniciar la sesio lo estraemos de data
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg = error && (
            <>
              <AiOutlineClose size="32px" /> Contraseña no escorrecta o el
              usuario no existe
            </>
          );

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar Sesion"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
