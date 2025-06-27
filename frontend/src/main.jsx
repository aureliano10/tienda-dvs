console.log("main.jsx cargado");
import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroBanner from './pages/HeroBanner.jsx';

const container = document.getElementById('root');
if (!container) {
  console.error('No se encontró el elemento root');
} else {
  console.log("Elemento root encontrado, iniciando React...");
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Layout />
      <HeroBanner />
    </React.StrictMode>
  );
}