import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Account from '../components/Account/Account';
import ProductDetail from '../components/Categories/ProductDetail/ProductDetail';
import Cart from '../components/Cart/Cart';
import Order from '../components/Order/ListOrder';
import Checkout from '../components/Order/Checkout';
// import OrderDetail from '../components/Order/OrderDetail';
const Router = () => {
  const token = localStorage.token;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:category/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="order/:id" element = {<OrderDetail/>}/> */}
      </Routes>
    </>
  );
};

export default Router;
