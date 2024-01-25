import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' style={{ width: '70px', height: 'auto' }} />
      <div className='desktopMenu'>
        {/* Use Link from react-router-dom with 'to' prop */}
        <Link to="/" className='menulistitem'>Home</Link>
        <Link to="/about" className='menulistitem'>About</Link>
        <Link to="/portfolio" className='menulistitem'>Portfolio</Link>
        <Link to="/resume" className='menulistitem'>Resume</Link>
        {/* Add more menu items as needed */}
      </div>
      <button className='contactBtn'>
        <img src={contactImg} alt='contactImg' className='contactImg' />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
