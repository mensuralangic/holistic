import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
