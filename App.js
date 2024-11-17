import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/hero-slider-1.jpg';
import women_banner from './components/Assets/hero-slider-2.jpg';
import kids_banner from './components/Assets/hero-slider-3.jpg';
import Payment from './components/Payment/Payment';
import Cash from './components/Cash/Cash';
import Upipay from './components/upiPay/Upipay.jsx'
import Orderplaced from './components/Orderplaced/Orderplaced.jsx';
import FourDigits from './components/Fourdigits/FourDigits.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/morning' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/afternoon' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/evening' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/cash' element={<Cash />} />
          <Route path='/fourdigits' element={<FourDigits />} />
          <Route path='/upi' element={<Upipay />} />
          <Route path='/ordered' element={<Orderplaced />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
