import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

//recibe los childrens por que esta app vamos a querer usarla en cualquier punto de nuestra applicacion
export const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER}>
      {/* queremos que renderice el children */}
      {children}
    </Mutation>
  );
};
