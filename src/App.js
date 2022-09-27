import * as React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter ,  BrowserRouter as Router, Navigate, useNavigate,} from "react-router-dom";
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
import PrivateRoutes from './PrivateRoute/PrivateRoutes';
import data from './data'
import { useState ,createContext, useContext} from 'react';
import HeaderComp from './Components/HeaderComponent';
import Admin from './Admin/Admin';
export const UserContext = createContext();
// const CartContext = createContext();
function App() {
  const [Loggedin,setLoggedin]=useState()

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // console.log(Loggedin);
  const addToCart = (product) => {
    setWListItems(WListItems.filter((x)=>x.id!==product.id));

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // console.log(Loggedin)
 
  const [BuyNow,setBuyNow] = useState([]);
  const [BuyQty,setBuyQty] = useState();
  const [cartBool,setCartBool] = useState(false);
  const BuyNowFunction=(productDetail)=>{

    
    setCartBool(true);
    const IDValue = document.getElementById('qty').value;
    // console.log(IDValue);
    setBuyNow({...productDetail,qty:IDValue});
 
  }
  const CartBoolFunction =()=>{
    setCartBool(false)
  }
  const [WListItems, setWListItems] = useState([]);

  const addWishList=  (pwd)=>{
   setWListItems([...WListItems,{...pwd,Wqty:1}])
  }

  const removeWishList=(pwd)=>{
    setWListItems(WListItems.filter((x) => x.id !== pwd.id));
  }

  console.log(WListItems)
  return (
    <UserContext.Provider  value={[Loggedin,setLoggedin,cartItems,BuyNow,cartBool,setCartBool,addWishList,removeWishList,addToCart]}>
     
        <Router> 
          
      <Routes>

        <Route path="/" element={<Homepage products={products} addToCart={addToCart} addWishList={addWishList} removeWishList={removeWishList} />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contackt />} />
        <Route path=":id" element={<ShopDetail products={products} addToCart={addToCart} setBuyQty={setBuyQty} BuyNowFunction={BuyNowFunction}/>} />
        <Route path="shop" element={<Shop/> } />
        <Route path="wishList" element={<Wishlist WListItems={WListItems} addToCart={addToCart} removeWishList={removeWishList}/>} />
        <Route element={<Cart addToCart={addToCart} removeFromCart={removeFromCart}  cartItems={cartItems} CartBoolFunction={CartBoolFunction}/>} path="/cart" />

        <Route element={<PrivateRoutes User={Loggedin} />}>

                <Route element={<Checkout BuyQty={BuyQty} setBuyQty={setBuyQty}/>} path="checkOut"/>
                <Route element={<MyAcount/>} path="myAcount"/>
        </Route>
        
        <Route path="login" element={<Authentication />} />
        <Route path="admin" element={<Admin />} />
       
      </Routes>
      </Router>
       </UserContext.Provider>
   
  );
}

export default App;
