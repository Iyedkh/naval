import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Homepage from '../src/Components/Pages/Homepage/Homepage';
import About from '../src/Components/Pages/About/About';
import Services from '../src/Components/Pages/Services/Services';
import Contact from '../src/Components/Pages/Contact/Contact';
import './App.css';

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.className = lng === 'ar' ? 'rtl' : ''; // Add RTL support for Arabic
  };

  return (
    <BrowserRouter>
      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
        <button onClick={() => changeLanguage('ar')}>العربية</button>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
