import './App.css';
import React from 'react';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom'
import { Regular } from './pages/Regular';
import { Hot } from './pages/Hot';


function App() {
  return (
    <div className="App">

      <div>
        <h1>
          Servis Mem
          </h1>
          
    <BrowserRouter>
    <div className="App">
      
       <ul>
        <li><Link to="/">Regular</Link></li>
        <li><Link to="/hot">Hot</Link></li>
      </ul>
<Routes>
  <Route path="/" element={<Regular/>}/>
  <Route path="/hot" element={<Hot/>}/>
</Routes>
    </div>
    </BrowserRouter>
    </div>
      
    </div>
  );
}

export default App;
