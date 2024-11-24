import './App.css'
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Catalogo from './assets/components/contenedorCatalogo/catalogo-campos';
import AgregarCampo from './assets/components/contenedorCatalogo/agregar-campos';

function App() {

  return (
    <>
    <Router>
      <header className='flex justify-between bg-black py-5'>
        <img className=' w-10' src="" alt="Logo" />
        <nav className='flex flex-row'>
          <img className=' style-img' src="../public/imagenes/usuario.png" alt="icon" />
          <img className=' style-img' src="../public/imagenes/Login.png" alt="" />
        </nav>
      </header>
      <nav className='flex flex-col bg-black absolute h-screen p-5 space-y-10'>
        <Link to="/" ><img className=' style-img' src="../public/imagenes/home.png" alt="home" /></Link>
        <Link to="/catalogo-campo" ><img className=' style-img' src="../public/imagenes/categoria.png" alt="campos" /></Link>
        <Link to="/" ><img className=' style-img' src="" alt="" /></Link>
      </nav>
      <main className='bg-[#4D4D4D] h-screen'>
        <Routes>
          <Route path='/' element={
            <article>
              <h1 className='text-black'>hola</h1>
            </article>
          } />
          <Route path='/catalogo-campo' element={<Catalogo />} />
          <Route path='/agregar-campo' element={<AgregarCampo />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
