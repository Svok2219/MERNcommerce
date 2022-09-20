import * as React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contackt from './Contact/Contact';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import MyAcount from './MyAcount/MyAcount';
import ShopDetail from './ShopDetail/ShopDetail';
import Shop from './Shop/Shop';
import Wishlist from './Wishlist/Wishlist';
import Authentication from './Authentication/Authentication';
// import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
// import privateRoute from './PrivateRoute/PrivateRoutes';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contackt />} />
        <Route path="shopDetail" element={<ShopDetail />} />
        <Route path="shop" element={<Shop />} />
        <Route path="wishList" element={<Wishlist />} />
        

        <Route element={<PrivateRoutes />}>
                <Route element={<Cart/>} path="/cart" />
                <Route element={<Checkout/>} path="/checkOut"/>
                <Route element={<MyAcount/>} path="myAcount"/>
        </Route>
        
        <Route path="login" element={<Authentication />} />

       
      </Routes>
    
   
  );
}

export default App;
