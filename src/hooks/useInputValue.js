import { useState } from "react";

//un hook para manejar mis input y ahorrarme codigo
export const useInputValue = (initialValue) => {
  //creamos el estado local
  const [value, setValue] = useState(initialValue);
  //actualizamos el estado lo sacamos de e.target.value -> cada vez que cambie este input su valor lo que hara es ejecutar esa funcion
  //y el elemto va a referirse a si mismo (e) y tiene la propiedad value que tiene el valor que esta introduciendo y este se guarda en el state
  const onChange = (e) => setValue(e.target.value);

  //retorna un objeto
  return { value, onChange };
};
