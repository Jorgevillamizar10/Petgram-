import React from "react";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

//recibe un input : {"input": {"id":"11"}} con el id de la foto que vamos a darle like
const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

// va a recibir vomo prop un children va aser lo que envuelve este componente
export const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {/* //usamos el children directamente por que esto nos va a permitir usar la mutacion en cualquier componente  */}
      {children}
    </Mutation>
  );
};
