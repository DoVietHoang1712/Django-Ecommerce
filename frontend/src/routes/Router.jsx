import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Account from '../components/Account/Account';
import ProductDetail from '../components/Categories/ProductDetail/ProductDetail'
import Cart from '../components/Cart/Cart'
const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:category/:id' element={<ProductDetail />} />
      </Routes>
    </>

  )
}

export default Router