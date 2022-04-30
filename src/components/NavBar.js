import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul className="nav">
    <li>Bookstore CMS</li>
    <li><Link style={{ textDecoration: 'none' }} to="/">Books</Link></li>
    <li><Link style={{ textDecoration: 'none' }} to="/categories">Categories</Link></li>
  </ul>
);

export default NavBar;
