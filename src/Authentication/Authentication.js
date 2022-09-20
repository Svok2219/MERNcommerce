import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase-config";
import { Link } from "react-router-dom";
import FooterComp from "../Components/FooterComponents";


function Authentication(params) {
  
        const[openReg,setopenReg]=useState(false)
    const regOpen=()=>{
        setopenReg(true)
        // setopenLogin(false)
    }
    const loginOpen=()=>{
        setopenReg(false)
        // setopenLogin(true)
    }

    const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    realName:"",
    userName:"",
    Email:"",
    password:"",
    Address:""
  });
  console.log(user)
let name,value;  
const changeFunc=(event)=>{
name=event.target.name;
value=event.target.value;
setUser({...user,[name]:value});
}

const postData= async (e ) =>{
  e.preventDefault();
  const{realName,Email,password,Address,userName}=user;
   const res = await fetch('https://merncommerce-default-rtdb.firebaseio.com/sendingUsersData.json',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
      realName,
      userName,
      Email,
      password,
      Address
    })
  })
  try {
    const user = await createUserWithEmailAndPassword(
      auth,
      Email,
      password
    );
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
  if (res) {
 setUser({
  realName:"",
  userName:"",
  Address:"",
  Email:"",
  password:""
 })   
  }

}

  
  const login = async (e) => {
    const{realName,Email,password,Address,userName}=user;
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        Email,
        password
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };



    return(
        <>
       <header class="main-header ">
        {/* Start Navigation */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav ">
            <div class="container">
                {/* Start Header Navigation */}
                <div class="navbar-header">
                    <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button >
                    <a class="navbar-brand img-fluid " href="index.html"><img src="https://technext.github.io/freshshop/images/logo.png" class="logo w-5" alt=""/></a>
                </div>
                {/* End Header Navigation */}

                {/* Collect the nav links, forms, and other content for toggling */}
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/about">About Us</Link></li>
                        <li class="dropdown active">
                            <a  href='#' class="nav-link  arrow" data-toggle="dropdown">SHOP</a>
                            <ul class="dropdown-menu">
								<li><Link to="/shop">Sidebar Shop</Link></li>
								<li><Link to="/shopDetail">Shop Detail</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/checkOut">Checkout</Link></li>
                                <li><Link to="/myAcount">My Account</Link></li>
                                <li><Link to="/wishList">Wishlist</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><Link class="nav-link" to="/gallery">Gallery</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/contact">Contact Us</Link></li>
                        <li class="search nav-item"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a></li>	
<li class="search nav-item"><a href="#">
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
   <span class="badge font-weight-bold text-dark">3</span>
   </a></li>	
                    </ul>
                </div>
                {/* /.navbar-collapse */}

                {/* Start Atribute Navigation */}
                <div class="attr-nav">
                    <ul>
          
                     <li class="nav-item">
      
                    	{/* <i class="fa fa-shopping-bag"></i> */}
                         
                           {/* <p>My Cart</p> */}
		
                    </li>
                    </ul>
                    
                </div>
                {/* End Atribute Navigation */}
            </div>
            {/* Start Side Menu */}
            <div class="side">
                <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                <li class="cart-box">
                    <ul class="cart-list">
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Delica omtantur </a></h6>
                            <p>1x - <span class="price">$80.00</span></p>
                        </li>
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Omnes ocurreret</a></h6>
                            <p>1x - <span class="price">$60.00</span></p>
                        </li>
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Agam facilisis</a></h6>
                            <p>1x - <span class="price">$40.00</span></p>
                        </li>
                        <li class="total">
                            <Link to="/cart" class="btn btn-default hvr-hover btn-cart">VIEW CART</Link>
                            <span class="float-right"><strong>Total</strong>: $180.00</span>
                        </li>
                    </ul>
                </li>
            </div>
            {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
    </header>
        <div className="my-5 mx-5">
<ul class="nav nav-pills nav-justified mb-3 d-md-flex" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
  <button onClick={()=>loginOpen()} type="button" class="btn btn-primary w-75">Login</button>

  </li>
  <li class="nav-item" role="presentation">
  <button  onClick={()=>regOpen()} type="button" class="btn btn-outline-primary w-75">Register</button>
    </li>
</ul>


<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form method="POST">
      <div class="text-center mb-3" >
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>
{!openReg ?

<>
      <div class="form-outline mb-4">
        <input    onChange={changeFunc} name="Email" type="email" id="loginName" class="form-control" />
        {/* <label class="form-label" for="loginName">Email or username</label> */}
      </div>


      <div class="form-outline mb-4">
        <input   onChange={changeFunc} name="password" type="password" id="loginPassword" class="form-control" />
        {/* <label class="form-label" for="loginPassword">Password</label> */}
      </div>
</>
:
<>
      <div class="form-outline mb-4">
        <input defaultValue={user.realName} onChange={changeFunc} name="realName" type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

      {/* Username input */}
      <div class="form-outline mb-4">
        <input defaultValue={user.userName} onChange={changeFunc} name="userName" type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      {/* Email input */}
      <div class="form-outline mb-4">
        <input  defaultValue={user.Email} onChange={changeFunc} type="email" name="Email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      {/* Password input */}
      <div class="form-outline mb-4">
        <input   defaultValue={user.password} onChange={changeFunc} name="password" type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      {/* Repeat Password input */}
      <div class="form-outline mb-4">
        <input  defaultValue={user.Address} onChange={changeFunc} name="Address" type="text" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Address</label>
      </div>
      </>
}

      {/* 2 column grid layout */}
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          {/* Checkbox */}
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>





    




        <div class="col-md-6 d-flex justify-content-center">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* Submit button */}
      {openReg ?
      <button  onClick={postData}  class="btn btn-primary btn-block mb-4">Sign up</button>
      :
      <button  onClick={login} class="btn btn-primary btn-block mb-4">Sign in</button>
      }
      {/* Register buttons */}
      <div class="text-center">
        <p>Not a member? <a href="#!" onClick={logout}>Register</a></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      {/* Name input */}
      {!loginOpen && regOpen }
      <div >
      
      {/* Checkbox */}
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>
</div>
      {/* Submit button */}
      {/* <button type="" class="btn btn-primary btn-block mb-3">Sign in</button> */}
    </form>
  </div>
</div>
{/* Pills content */}
</div>

<FooterComp/>
</>
    )
}


export default Authentication;