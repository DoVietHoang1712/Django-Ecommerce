import React from 'react';
import Categories from '../Categories/Categories';
const Home = () => {
  return (
    <div className="home container">
      <div className="slide">
        <div>
          <span>New arrivals</span>
        </div>
        <h1>E commerce</h1>
      </div>
      <div className="category">
      <Categories/>
      </div>
    </div>
  );
};

export default Home;
