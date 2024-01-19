import React from 'react';
import '../css/navbar.css'
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' style={{ width: '70px', height: 'auto' }}/>
        <div className='desktopMenu'>
            <Link className='menulistitem'>Home</Link>
            <Link className='menulistitem'>About</Link>
            <Link className='menulistitem'>Portfolio</Link>
            <Link className='menulistitem'>Contact</Link>
            <Link className='menulistitem'>Resume</Link>
        </div>
        <button className='contactBtn'>
            <img src='' alt='' className='contactImg'/>Contact Me</button>
    </nav>
  );
};

export default Navbar;