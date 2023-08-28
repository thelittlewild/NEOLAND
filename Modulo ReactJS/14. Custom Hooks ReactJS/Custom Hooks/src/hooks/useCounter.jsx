import { useState } from "react";

//generamos un state, count, que guarda el valor del contador
const useCounter = (intialeCount) => {
  const [count, setCount] = useState(intialeCount);
  //y las acciones que podemos lanzar "handleIncrement" y "handleDecrement:"
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
};

export { useCounter };
