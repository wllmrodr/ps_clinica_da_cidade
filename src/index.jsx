// ========================================================================
// FUNÇÃO: Ponto de entrada da aplicação. Renderiza o componente App.
// ========================================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './assets/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
