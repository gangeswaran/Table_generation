import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Calling from './components/project_1/calling_back';
import Table from './components/project_2/table';
import Counter from './components/project_3/Counter';
function App() {
  return (
   
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calling' element={<Calling />} />
          <Route path='/table' element={<Table />} />
          <Route path='/counter-redux' element={<Counter />} />
        </Routes>
      </div>
    
  );
}

export default App;
