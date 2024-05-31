import './App.css';
import React from 'react';
import {Route,Routes, Link, BrowserRouter} from 'react-router-dom'
import { Regular } from './pages/Regular';
import { Hot } from './pages/Hot';
import "./index.css"





  
  
  

function App() {




  


  return (
    <div className="App">

<h1> Servis Mem</h1> 
   
          <br></br>
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

  );
}

export default App;
