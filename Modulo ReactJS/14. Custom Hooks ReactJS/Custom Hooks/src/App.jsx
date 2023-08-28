import { useCounter } from "./hooks/useCounter";
import Debounce from "./components/Debounce";
import useToggle from "./hooks/useToggle";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const { count, handleIncrement, handleDecrement } = useCounter(0);
  const [toggleState, handleToggle] = useToggle();
  const { width, height } = useWindowSize();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <Debounce />
      <h3>Toggle: {toggleState.toString()}</h3>
      <button onClick={handleToggle}>Toggle</button>
      <div className="App">
        <h1>La ventana mide</h1>
        <h2>Ancho: {width}</h2>
        <h2>Alto: {height}</h2>
      </div>
    </>
  );
}
