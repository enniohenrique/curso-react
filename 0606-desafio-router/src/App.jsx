import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Componentes/Produtos';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import './App.css';
import Contato from './Componentes/Contato';
import Produto from './Componentes/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
