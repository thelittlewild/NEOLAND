import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Header>
        <h1>🌸Sakura Station🌸</h1>
      </Header>

      <div>
        <nav>
          <NavLink to="">Home</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
