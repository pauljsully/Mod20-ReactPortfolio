// src/App.js
import React from 'react';
import Navbar from './components/navbar/navbar'; // Adjust the path accordingly
import Main from './components/main/main';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
// Other imports and component code...

const App = () => {
  return (
    <div>
      <Navbar/> 
      <Main/>
      <About/>
      <Portfolio/>
    </div>
  );
};

export default App;

