import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your page components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

// The App component
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Wrap your Routes with a Routes element */}
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes for other pages */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
