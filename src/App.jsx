import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Encabezado from "./components/encabezado/Encabezado";
import Clientes from "./views/Clientes";
import './App.css';

const App = () => {
  return (
      <Router>

    <main className="margen-superior-main">
    <Encabezado />
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/clientes" element={<Clientes/>} />

      </Routes>
    </main>

    </Router>
  );
};

export default App;