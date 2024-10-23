// src/pages/Home.js
import React from 'react';
import Header from '/src/Components/Header/header.jsx';
import ProductCards from '/src/Components/Products/products.jsx';
import Footer from '../Footer/footer.jsx';
const Home = () => (
  <div className="home">
    <Header />
    <ProductCards />
    <Footer />
  </div>
);

export default Home;
