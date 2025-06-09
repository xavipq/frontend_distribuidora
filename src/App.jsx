import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Encabezado from "./components/encabezado/Encabezado";
import Estadistica from "./views/Estadisticas";
import Productos from "./views/Productos";
import Categorias from "./views/Categorias";
import Clientes from "./views/Clientes";
import Ventas from "./views/Ventas";
import Compras from "./views/Compras";
import Usuarios from "./views/Usuarios";
import Empleados from "./views/Empleados";
import CatalogoProductos from "./components/busquedas/CatalogoProductos";
import Dashboard from "./views/Dashboard"
import RutaProtegida from "./components/rutas/RutaProtegida";
import PiePagina from "./components/infopie/PiePagina";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Encabezado />
        <main className="margen-superior-main content">
          <Routes>
            {/* Rutas */}
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<RutaProtegida vista={<Inicio />} />} /> 
            <Route path="/categorias" element={<RutaProtegida vista={<Categorias />} />} /> 
            <Route path="/clientes" element={<RutaProtegida vista={<Clientes />} />} /> 
            <Route path="/usuarios" element={<RutaProtegida vista={<Usuarios />} />} /> 
            <Route path="/ventas" element={<RutaProtegida vista={<Ventas />} />} /> 
            <Route path="/empleados" element={<RutaProtegida vista={<Empleados />} />} /> 
            <Route path="/compras" element={<RutaProtegida vista={<Compras />} />} /> 
            <Route path="/productos" element={<RutaProtegida vista={<Productos />} />} /> 
            <Route path="/catalogoproductos" element={<RutaProtegida vista={<CatalogoProductos />} />} /> 
            <Route path="/estadísticas" element={<RutaProtegida vista={<Estadísticas />} />} /> 
            <Route path="/dashboard" element={<RutaProtegida vista={<Dashboard />} />} /> 
          </Routes>
          <PiePagina />
        </main>
      </div>
    </Router>
  );
};

export default App;
