import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import Article from '../pages/Article';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import Servicers from '../pages/Servicers';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/search/:value" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/article" element={<Article />} />
      <Route path="/services" element={<Servicers />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Routers