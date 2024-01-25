import React from 'react';
import Navbar from './components/navbar/navbar'; // Adjust the path accordingly
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';


const App = () => {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <About/>
      <Portfolio/>
      <Resume/>
      <Footer/>
    </div>
  );
};

export default App;

