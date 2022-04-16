import { useState } from 'react';
import Categories from '../Categories/Categories';
import './Home.scss'
import AddToCartSuccess from '../message/AddToCartSuccess'
const Home = () => {
  const [isAddToCart, setIsAddToCart] = useState(false)
  const handleAddToCart = () => {
    setIsAddToCart(!isAddToCart)
    setTimeout(() => {
      setIsAddToCart(false)
    }, 2000)
    // console.log(isAddToCart)
  }
  return (
    <div className="home">
      <div className="container">
        <div className="slide">
          <h1>E commerce</h1>
        </div>
        <div className="category">
          <Categories handleAddToCart={handleAddToCart} />
        </div>
      </div>
      {isAddToCart && <AddToCartSuccess />}
    </div>

  );
};

export default Home;
