import React from "react";
import { Button } from "./styles";

export const SubmitButton = ({ children, disabled, onclick }) => {
  return (
    <Button disabled={disabled} onclick={onclick}>
      {children}
    </Button>
  );
};
