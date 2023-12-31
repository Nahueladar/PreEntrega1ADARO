// src/App.jsx
import React from 'react';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Contenido de la aplicación</h1>
      {/* Agrega el contenido de tus rutas aquí */}
    </div>
  );
};

export default App;