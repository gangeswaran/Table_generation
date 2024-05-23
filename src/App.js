import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navb from './components/Navbar';
import Home from './components/Home';
import Calling from './components/project_1/calling_back';
import Table from './components/project_2/table';
import Counter from './components/project_3/Counter';
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='app'>
      <Navb setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path='/' element={<Home searchTerm={searchTerm} />} />
        <Route path='/calling' element={<Calling />} />
        <Route path='/table' element={<Table />} />
        <Route path='/counter-redux' element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
