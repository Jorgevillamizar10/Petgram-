import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

//mutacion para manejar el inicio de sesion 
const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

//recibe los childrens por que esta app vamos a querer usarla en cualquier punto de nuestra applicacion
export const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={LOGIN}>
      {/* queremos que renderice el children */}
      {children}
    </Mutation>
  );
};
