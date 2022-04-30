import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

const Home = () => (
  <>
    <NavBar />
    <h1>Home Component</h1>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Home;
