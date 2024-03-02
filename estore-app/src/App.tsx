import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/layouts/mainLayout';
import Home from './pages/home/home';
import PageNotFound from './pages/pageNotFound';
import Cart from './pages/cart/cart';
// import Payment from './pages/billing/payment';
import Success from './pages/billing/success';
import ProductInner from './pages/product/productInner';
import Register from './pages/register/register';
import Login from './pages/login/login';
import WishList from './pages/wishList/wishList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        {/* <Route path="payment" element={<Payment />} /> */}
        <Route path="product-inner" element={<ProductInner />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
