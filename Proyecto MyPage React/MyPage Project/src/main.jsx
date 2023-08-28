import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Pages
import Home from "./pages/HomePage";
//import Ghibli
//import Books

// Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={
              <main>
                <p>404 - No existe la ruta</p>
              </main>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
