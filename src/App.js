// npm install --save react-router-dom install in package.json (check in package.json)
import React from 'react';
//can rename browserroter as route
import {BrowserRouter , Route} from "react-router-dom"
import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'  
import './App.css';
//imports

function App() {
  return (
   <BrowserRouter> {/* tells our brower were going to be using route */}
     <div className="app">
     {/* assigns the home component to a path */}
     <Route component={Home} path='/'exact/> 
     <Route component={NasaPhoto} path='/nasaphoto'/>
     </div>
   </BrowserRouter>
  );
}

export default App;
