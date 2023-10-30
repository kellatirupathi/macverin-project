import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/Home" element={<Contact />}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
