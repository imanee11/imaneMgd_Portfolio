import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Editing from './components/portfolio/Editing';
import Shooting from './components/portfolio/Shooting';

const App = () => {
  return (
    <div >
    
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/editing" element={<Editing />} />
      <Route path="/shooting" element={<Shooting />} /> */}
    </Routes>


    </div>
  );
};

export default App;