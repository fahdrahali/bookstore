import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <ul>
      <Link to="/"><li>Books</li></Link>
      <Link to="/categories"><li>Categories</li></Link>
    </ul>
  </>
);

export default NavBar;
