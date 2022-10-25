import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './pages/layouts/mainLayout';
import Home from './pages/home/home';
import PageNotFound from './pages/pageNotFound';
import Cart from './pages/cart/cart';
import Payment from './pages/payment/payment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
