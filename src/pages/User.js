import React, { useContext, Fragment } from "react";
import { Context } from "../Context";
// import { SubmitButton } from "../components/SubmitButton";
import { Button } from "../components/SubmitButton/styles.js";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesion</Button>
    </Fragment>
  );
};
