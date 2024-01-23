// src/App.js
import React from 'react';
import Navbar from './components/navbar'; // Adjust the path accordingly
import Main from './components/main/main';
import About from './components/about/about';
// Other imports and component code...

const App = () => {
  return (
    <div>
      <Navbar /> 
      <Main/>
      <About/>
    </div>
  );
};

export default App;

