import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../src/Components/Pages/Homepage/Homepage'
import About from '../src/Components/Pages/About/About'
import Services from '../src/Components/Pages/Services/Services'
import Contact from '../src/Components/Pages/Contact/Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
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
