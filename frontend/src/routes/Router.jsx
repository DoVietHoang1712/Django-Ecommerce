import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
const Router = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Router