import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Doramas,
  FavoriteSongs,
  KpopGroups,
  Languages,
  Read,
} from "./components";
import { HOBBIES } from "./Hobbies/Hobbies";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Read read={HOBBIES.read} />
      <KpopGroups groups={HOBBIES.kpopGroups} />
      <Doramas doramas={HOBBIES.doramas} />
      <Languages languages={HOBBIES.languages} />
      <FavoriteSongs songs={HOBBIES.favoriteSongs} />
    </div>
  );
};

export default App;
