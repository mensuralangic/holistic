import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import About from './About';
import Blog from './Blog';
import Navbar from './Navbar';
import Contact from './Contact';
import Home from './Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
