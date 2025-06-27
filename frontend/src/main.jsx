console.log("main.jsx cargado");
import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeroBanner from './pages/HeroBanner.jsx';
import CategoriesSection from './pages/CategoriesSection.jsx';
import FeaturedDeals from './pages/FuturedDeals.jsx';
import RelatedContent from './pages/RelatedContent.jsx';
import PromoBanner from './pages/PromoBanner.jsx';
import SpecialOffersCarousel from './pages/SpecialOffersCarousel.jsx';
import Newsletter from './pages/Newsletter.jsx';
import Footer from './pages/Footer.jsx';

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
      <CategoriesSection />
      <FeaturedDeals />
      <RelatedContent />
      <PromoBanner />
      <SpecialOffersCarousel />
      <Newsletter />
      <Footer />
    </React.StrictMode>
  );
}