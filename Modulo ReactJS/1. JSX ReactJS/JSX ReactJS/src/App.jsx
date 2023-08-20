import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const App = () => {
  const [showDorama, setShowDorama] = useState(false);
  const hour = 21;
  const doramas2023 = [
    { id: 1, name: "Hidden Love" },
    { id: 2, name: "Celebrity" },
    { id: 3, name: "Little Women" },
    { id: 4, name: "King the Land" },
    { id: 5, name: "Doctor Romantic 2" },
  ];

  return (
    <>
      {hour >= 6 && hour <= 12 && <p>Buenos días</p>}
      {hour >= 13 && hour <= 19 && <p>Buenas tardes</p>}
      {(hour >= 20 || hour <= 5) && <p>Buenas noches</p>}
      <button onClick={() => setShowDorama(!showDorama)}>
        {showDorama ? "Ocultar Doramas 2023" : "Mostrar Doramas 2023"}
      </button>

      {showDorama && (
        <ul>
          {doramas2023.map((dorama) => {
            return <li key={dorama.id}>{dorama.name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default App;
