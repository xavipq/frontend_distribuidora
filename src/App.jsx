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
import Dashboard from "./views/Dashboard";
import RutasProtegida from "./components/rutas/RutaProtegida";
import PiePagina from "./components/infopie/PiePagina";

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Encabezado />
        <main className="margen-superior-main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<RutasProtegida vista={<Inicio />} />} />
            <Route path="/productos" element={<RutasProtegida vista={<Productos />} />} />
            <Route path="/categorias" element={<RutasProtegida vista={<Categorias />} />} />
            <Route path="/clientes" element={<RutasProtegida vista={<Clientes />} />} />
            <Route path="/ventas" element={<RutasProtegida vista={<Ventas />} />} />
            <Route path="/compras" element={<RutasProtegida vista={<Compras />} />} />
            <Route path="/usuarios" element={<RutasProtegida vista={<Usuarios />} />} />
            <Route path="/empleados" element={<RutasProtegida vista={<Empleados />} />} />
            <Route path="/catalogo" element={<RutasProtegida vista={<CatalogoProductos />} />} />
            <Route path="/dashboard" element={<RutasProtegida vista={<Dashboard />} />} />
            <Route path="/estadisticas" element={<RutasProtegida vista={<Estadistica />} />} />
            <Route path="*" element={<div>Página no encontrada</div>} /> {/* Ruta 404 */}
          </Routes>
        </main>
        <PiePagina />
      </div>
    </Router>
  );
};

export default App;