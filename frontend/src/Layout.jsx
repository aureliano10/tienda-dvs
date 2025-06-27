import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/LayoutHeader.jsx';

const Layout = () => {
  console.log("Layout.jsx está renderizando");
  return (
    <BrowserRouter>
  
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      
    </BrowserRouter>
  );
};

export default Layout;