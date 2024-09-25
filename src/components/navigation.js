import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { title: 'Home', path: './pages/home' },
  { title: 'Blog', path: './pages/blog' },
  { title: 'Contact Us', path: './pages/contact-us' },
  { title: 'Login', path: './pages/login' }
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span className='menu-title'>My React Blog</span>
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
