import React from 'react';
import Categories from '../Categories/Categories';
import './Home.scss'
const Home = () => {
  return (
    <div className="home container">
      <div className="slide">
        <h1>E commerce</h1>
      </div>
      <div className="category">
      <Categories/>
      </div>
    </div>
  );
};

export default Home;
