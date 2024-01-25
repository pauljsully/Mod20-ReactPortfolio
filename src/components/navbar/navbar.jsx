import React from 'react';
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo' style={{ width: '70px', height: 'auto' }}/>
        <div className='desktopMenu'>
            <Link className='menulistitem'>Home</Link>
            <Link className='menulistitem'>About</Link>
            <Link className='menulistitem'>Portfolio</Link>
            <Link className='menulistitem'>Resume</Link>
        </div>
        <button className='contactBtn'>
            <img src= {contactImg} alt='contactImg' className='contactImg'
            />Contact Me
        </button>
    </nav>
  );
};

export default Navbar;