import React from 'react';
import ReactDOM from 'react-dom/client';
import BannerCarousel from './components/BannerCarousel';

const el = document.getElementById('banner-carousel');
if (el) {
  ReactDOM.createRoot(el).render(<BannerCarousel />);
}
