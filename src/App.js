import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Footer from './components/Footer';
import Productdetail from './components/pages/Productdetail';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/:id" element={<Productdetail/>} />
  
        </Routes>   
      <Footer/>
    </>
  );
}

export default App;
