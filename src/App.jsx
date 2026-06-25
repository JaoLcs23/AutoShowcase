import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CarDetails from './pages/CarDetails/CarDetails';
import About from './pages/About/About';
import Compare from './pages/Compare/Compare';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', marginTop: '2rem', color: 'var(--text-muted)' }}>
        <p>Projeto Final - Linguagem de Programação para Internet &copy; 2026</p>
      </footer>
    </>
  );
}

export default App;
