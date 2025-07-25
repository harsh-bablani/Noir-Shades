import { Routes, Route } from 'react-router-dom';
import { ShopProvider } from './components/cart'; // or './context/ShopContext'
import Home from './Pages/Home';
import Eyeglasses from './Pages/Eyeglasses';
import Sunglasses from './Pages/Sunglasses';
import KidsGlasses from './Pages/Kids Glasses';
import ContactLenses from './Pages/Contact Lens';
import ContactUs from './Pages/Contact Us';
import Product from './Pages/Product';
import LensType from './Pages/LensType';
import LensPackage from './Pages/LensPackage';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Pages/Checkout';
import OrderComplete from './Pages/OrderComplete';

function App() {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/kids-glasses" element={<KidsGlasses />} />
        <Route path="/contact-lenses" element={<ContactLenses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/lens-type/:id" element={<LensType />} />
        <Route path="/lens-package/:id" element={<LensPackage />} />
        <Route path="/cart/:id" element={<ShoppingCart />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/order-complete/:id" element={<OrderComplete />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;
