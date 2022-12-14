import * as React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  BrowserRouter as Router,
  Navigate,
  useNavigate
} from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Contackt from "./Contact/Contact";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import MyAcount from "./MyAcount/MyAcount";
import ShopDetail from "./ShopDetail/ShopDetail";
import Shop from "./Shop/Shop";
import Wishlist from "./Wishlist/Wishlist";
import Authentication from "./Authentication/Authentication";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import data from "./data";
import { useState, createContext, useContext, useEffect } from "react";
import HeaderComp from "./Components/HeaderComponent";
import Admin from "./Admin/Admin";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./Authentication/firebase-config";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PrivateRouteCO from "./PrivateRoute/PrivateRouteCO";
import CatShop from "./Catshop/CatShop";
export const UserContext = createContext();

// const CartContext = createContext();
function App() {
  const [Loggedin, setLoggedin] = useState(false);

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  // console.log(Loggedin);
  const addToCart = product => {
    // console.log("tipaise", product);
    setWListItems(WListItems.filter(x => x._id !== product._id));

    const exist = cartItems.find(x => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeFromCart = product => {
    const exist = cartItems.find(x => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // console.log(Loggedin)

  const [BuyNow, setBuyNow] = useState([]);
  const [BuyQty, setBuyQty] = useState();
  const [cartBool, setCartBool] = useState(false);
  const BuyNowFunction = productDetail => {
    setCartBool(true);
    const IDValue = document.getElementById("qty").value;
    // console.log(IDValue);
    setBuyNow({ ...productDetail, qty: IDValue });
  };
  const CartBoolFunction = () => {
    setCartBool(false);
  };
  const [WListItems, setWListItems] = useState([]);

  const addWishList = pwd => {
    setWListItems([...WListItems, { ...pwd, Wqty: 1 }]);
  };

  const removeWishList = pwd => {
    setWListItems(WListItems.filter(x => x._id !== pwd._id));
  };

  console.log(WListItems);

  onAuthStateChanged(auth, currentUser => {
    console.log(currentUser.email);
    setLoggedin(currentUser);
  });
  console.log(Loggedin);

  const [DataPwd, setDataPwd] = useState([]);
  useEffect(() => {
    function fetchDataPwd() {
      fetch("https://koiricom-server.onrender.com/Products")
        .then(response => response.json())
        .then(data => {
          setDataPwd(data);
        });
    }
    fetchDataPwd();
  }, [DataPwd]);
  console.log(DataPwd);

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  // const [DataPwd,setDataPwd]=useState([])
  // useEffect(()=>{async function fetchDataPwd() {
  //  await fetch('https://koiricom-server.onrender.com/Products')
  //   .then(response => response.json())
  //   .then(data =>{ setDataPwd(data)});
  // }
  // fetchDataPwd();}
  // ,[DataPwd])
  // console.log(DataPwd)
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[window.onload]);
  
  return (
    !loading && (
      <UserContext.Provider
        value={[
          Loggedin,
          setLoggedin,
          cartItems,
          BuyNow,
          cartBool,
          setCartBool,
          addWishList,
          removeWishList,
          addToCart
        ]}
      >
        <BrowserRouter >
          <Routes onUpdate={() => window.scrollTo(0, 0)}>
            <Route
              exact
              path="/"
              element={
                <Homepage
                  WListItems={WListItems}
                  DataPwd={DataPwd}
                  addToCart={addToCart}
                  addWishList={addWishList}
                  removeWishList={removeWishList}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contackt />} />
            {DataPwd ? (
              <Route
                path="/:id"
                element={
                  <ShopDetail
                    products={DataPwd}
                    addToCart={addToCart}
                    setBuyQty={setBuyQty}
                    BuyNowFunction={BuyNowFunction}
                  />
                }
              />
            ) : (
              <p>.....incoming</p>
            )}

            <Route
              path="shop"
              element={
                <Shop
                  DataPwd={DataPwd}
                  WListItems={WListItems}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  addWishList={addWishList}
                />
              }
            />
            {DataPwd ? (
              <Route
                path="category/:id"
                element={
                  <CatShop
                    DataPwd={DataPwd}
                    WListItems={WListItems}
                    cartItems={cartItems}
                    addToCart={addToCart}
                    addWishList={addWishList}
                  />
                }
              />
            ) : (
              <div class="d-flex justify-content-center ">
                {" "}
                <div class="loadingio-spinner-pulse-v3puu1fwgxe ">
                  <div class="ldio-06fbmar2z23g">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
            <Route
              path="wishList"
              element={
                <Wishlist
                  WListItems={WListItems}
                  addToCart={addToCart}
                  removeWishList={removeWishList}
                />
              }
            />
            <Route
              element={
                <Cart
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cartItems={cartItems}
                  CartBoolFunction={CartBoolFunction}
                />
              }
              path="/cart"
            />

            <Route element={<PrivateRoutes User={Loggedin} />}>
              <Route
                element={<Checkout BuyQty={BuyQty} setBuyQty={setBuyQty} />}
                path="checkOut"
              />
              <Route element={<MyAcount />} path="myAcount" />
            </Route>

            <Route element={<PrivateRoute User={Loggedin} />}>
              <Route path="admin" element={<Admin />} />
            </Route>

            <Route path="login" element={<Authentication />} />
            {/* <Route element={<PrivateRouteCO User={Loggedin} />}>
        <Route element={<MyAcount/>} path="myAcount"/>
        </Route> */}
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    )
  );
}

export default App;
