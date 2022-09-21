import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../App';

export default function HeaderComp(props) {
    const[Loggedin,setLoggedin,cartItems]=useContext(UserContext)
    // console.log(cartItems.length);
    return (
        <div>
                {/* Start Main Top */}
    <div class="main-top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					{/* <div class="custom-select-box"> */}
                      
                    {/* </div> */}
                    
                    <div class="right-phone-box">
                        <p>Call US :- <a href="#"> +11 900 800 100</a></p>
                    </div>
                    <div class="our-link">
                        <ul>
                            <li><Link to="/myAcount"><i class="fa fa-user s_color"></i> My Account</Link></li>
                            <li><Link to="/about"><i class="fas fa-location-arrow"></i> Our location</Link></li>
                            <li><Link to="/contact"><i class="fas fa-headset"></i> Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex">

                    <div class="text-slid-box">
                        <div id="offer-box" class="carouselTicker">
                            <ul class="offer-box">
                                <li>
                                    <i class="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT80
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> 50% - 80% off on Vegetables
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> 51% - 82% off on Vegetables
                                </li>
                                {/* <li>
                                    <i class="fab fa-opencart"></i> Off 10%! Shop Vegetables
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> Off 50%! Shop Now
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> Off 10%! Shop Vegetables
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> 50% - 80% off on Vegetables
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT30
                                </li>
                                <li>
                                    <i class="fab fa-opencart"></i> Off 50%! Shop Now 
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="btn ">
						<select id="basic" class="  show-tick form-control" data-placeholder="Sign In">
							<option>Register Here</option>
							<option>Sign In</option>
						</select>
       

					</div>
                    <div class="btn nav-item">
                   <Link to="/myAcount">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" class=" bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
</Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="main-header ">
        {/* Start Navigation */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav ">
            <div class="container">
                {/* Start Header Navigation */}
                <div class="navbar-header">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                    <Link to='/' class="navbar-brand img-fluid " ><img src="https://technext.github.io/freshshop/images/logo.png" class="logo w-5" alt=""/></Link>
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
   <span class="badge font-weight-bold text-dark">{cartItems.length}</span>
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
    {/* End Main Top */}

    {/* Start Top Search */}
    <div class="top-search">
        <div class="container">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                <input type="text" class="form-control" placeholder="Search"/>
                <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
            </div>
        </div>
    </div>
    {/* End Top Search */}

        </div>
    )
}
