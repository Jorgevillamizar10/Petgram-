import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Error, Button } from "./styles";
// import { SubmitButton } from "../SubmitButton/index";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  //creando el estado local
  const email = useInputValue("");
  const password = useInputValue("");

  //para manejar el evento de guardar la info de inciar sesion y registro
  const handleSubmit = (event) => {
    //para evitar su funcionamiento por defecto
    event.preventDefault();
    // y llamamos a la prop onsubmit
    //email.value -> lo que queremos es el valor por eso se coloca de esta manera
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      {/* disabled-> para manejar el loading */}
      {/* mientras esta cargando no podremos darle clikc a ningun boton por eso usamos el disabled (desactivado) */}
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          // value={email.value} onChange={email.onChange} es igual a esto {...email} -> que use todas las props de email
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
