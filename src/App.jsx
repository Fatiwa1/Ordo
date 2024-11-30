import './App.css';
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from 'react';

import Catalogo from './assets/components/contenedorCatalogo/catalogo-campos';
import AgregarCampo from './assets/components/contenedorCatalogo/agregar-campos';
import InformacionCampo from './assets/components/contenedorInformacionCampo/informacion-campo';
import TareasCampo from './assets/components/contenedorInformacionCampo/tareas-campo';
import ObjetivosCampo from './assets/components/contenedorInformacionCampo/objetivos-campo';
import MetricasCampo from './assets/components/contenedorInformacionCampo/metricas-campo';

function App() {
  const [contenidoCampo, setContenidoCampo] = useState("tareas");

  const handleContenidoClick = (e) => {
    setContenidoCampo(e.target.value);
  };

  return (
    <>
      <Router>
        {/* Header */}
        <header className='flex justify-between bg-black py-5 px-4'>
          <img className='w-10' src="/imagenes/logo.png" alt="Logo" />
          <nav className='flex space-x-4'>
            <img className='style-img' src="/imagenes/usuario.png" alt="Usuario" />
            <img className='style-img' src="/imagenes/login.png" alt="Login" />
          </nav>
        </header>

        <div className='flex h-[calc(100vh-80px)]'> {/* Ajusta la altura restando el header */}
          {/* Sidebar */}
          <nav className='flex flex-col bg-black w-16 h-full p-4 space-y-6'>
            <Link to="/"><img className='style-img' src="/imagenes/home.png" alt="Home" /></Link>
            <Link to="/catalogo-campo"><img className='style-img' src="/imagenes/categoria.png" alt="Campos" /></Link>
          </nav>

          {/* Main Content */}
          <main className='bg-[#4D4D4D] flex-1 overflow-auto'>
            <Routes>
              <Route path="/" element={
                <article className='flex flex-col items-center justify-center'>
                  <div className='flex flex-row gap-4 text-xl text-white bg-black rounded-lg'>
                    <button className={`${contenidoCampo === "tareas" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="tareas">Tareas</button>
                    <button className={`${contenidoCampo === "objetivos" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="objetivos">Objetivos</button>
                    <button className={`${contenidoCampo === "metricas" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="metricas">Métricas</button>
                  </div>
                </article>
              } />
              <Route path="/catalogo-campo" element={<Catalogo />} />
              <Route path="/agregar-campo" element={<AgregarCampo />} />
              <Route path="/informacion-campo" element={<InformacionCampo />} />
              <Route path="/tareas-campo" element={<TareasCampo />} />
              <Route path="/objetivos-campo" element={<ObjetivosCampo />} />
              <Route path="/metricas-campo" element={<MetricasCampo />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
