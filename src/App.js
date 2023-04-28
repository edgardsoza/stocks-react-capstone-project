import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderMain from './components/HeaderMain';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
