
 import React, {  useContext, useEffect, useRef, useState } from "react";
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";
// import  {  useContext } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// // import '../js/'
// import  "../js/jquery-3.2.1.min.js";
// import '../js/popper.min.js"';
// import '../js/bootstrap.min.js';
// import "../js/jquery.superslides.min.js";
// import "../js/bootstrap-select.js";
// import "../js/inewsticker.js";
// import "../js/bootsnav.js.";
// import "../js/images-loded.min.js";
// import "../js/isotope.min.js";
// import "../js/owl.carousel.min.js";
// import "../js/baguetteBox.min.js";
// import "../js/form-validator.min.js";
// import "../js/contact-form-script.js";
// import "../js/custom.js";



// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/autoplay';



// import required modules
import SwiperCore,{ Pagination, Navigation ,Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
SwiperCore.use([Navigation]);



function Homepage(params) {
    // const [addWishList] = React.useContext(UserContext)
  const {DataPwd,addToCart,addWishList}=params;
//   console.log(products);
const[Loggedin,setLoggedin,cartItems]=useContext(UserContext)
  function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      

    //  console.log(offers.length)
    var arrStr = ['20% off Entire Purchase Pro', 'kisi aur ke khyalo main gum', 'kita koitam baal', "bechbar damei offer diram", "dhoro bondhu amar keho nai"]
    //  console.log(randElement);
     const MINUTE_MS = 2000;
     const [li,setli]=useState('')
     useEffect(() => {
       const interval = setInterval(() => {
        const randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
        setli(randElement)   
    }, MINUTE_MS);
     
       return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
     }, [])
    // console.log(li)
      
    return (
    <div >
         <div class="main-top sticky-top">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
					{/* <div class="custom-select-box"> */}
                      
                    {/* </div> */}
                    
                    <div class="right-phone-box">
                        <p>Call US :- <a href="#"> +11 900 800 100</a></p>
                    </div>
                    <div class="our-link">
                        <ul>
                            {/* <li><Link to="/myAcount"><i class="fa fa-user s_color"></i> My Account</Link></li> */}
                            <li><Link to="/about"><i class="fas fa-location-arrow"></i> Our location</Link></li>
                            <li><Link to="/contact"><i class="fas fa-headset"></i> Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 ">
        
                    <div class="text-slid-box">
                        <div id="offer-box" > 
    
   
    
                            <ul class="offer-box  mt-0 mt-md-1">
                                <li>
                                    <i class="fab fa-opencart"></i> {li}  </li>
                             </ul> 
                        </div>
                    </div>
          
                </div>
                <div class="col-lg-4 col-md-4 col-sm-8 col-xs-8 text-center d-flex justify-content-center align-items-center gap-2">

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
                    {/* <div class="search nav-item"><a href="#" > */}
{/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

<svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" class=" bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
   <span class="font-weight-bold  mt-3 text-light">{cartItems.length}</span>
   {/* </a></div> */}

                </div>
            </div>
        </div>
    </div>
       <HeaderComp/>
       <div  class="HeadContainer" >
       <Swiper
      
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'1',backgroundColor:"#333"}} src='https://technext.github.io/freshshop/images/banner-03.jpg' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'1',backgroundColor:"#333"}} src='https://technext.github.io/freshshop/images/banner-02.jpg' alt="" />
          </SwiperSlide>
         
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'1',backgroundColor:"#333"}} src=' https://technext.github.io/freshshop/images/banner-01.jpg' alt="" />
          </SwiperSlide>
    </Swiper>

    

    <div class="  absolute centered text-dark d-md-none " >
                    <div class="row ">
                        <div class="col-md-12 covSlide">
                            <h1 class="m-b-20 text-light cov" style={{fontSize:"28px",fontWeight:"bolder",letterSpacing:"1px"}}><strong>Welcome To <br/>KoiriShop</strong></h1>
                            <p class="" style={{fontSize: "10px",color:"whitesmoke"}}>See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p ><a  class="btn hvr-hover btnHeaderSmall text-white" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div> 

    <div class=" text-center absolute centered text-dark  d-none d-sm-block" >
                    <div class="row ">
                        <div class="col-md-12 ">
                            <h1 class="m-b-20 text-light cov" style={{fontSize:"64px",fontWeight:"bolder",letterSpacing:"4px"}}><strong>Welcome To <br/>KoiriShop</strong></h1>
                            <p class="m-b-40" style={{fontSize: "18px",color:"whitesmoke"}}>See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p style={{fontSize: "18px",
}}><Link to="/shop" class="btn hvr-hover btnHeader text-white" >Shop New</Link></p>
                        </div>
                    </div>
                </div> 

    </div>


    
    
    <div class="categories-shop">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_01.jpg" alt="" />
                        <a class=" hvr-hover text-white" href="#">Organic Fertilisers</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_02.jpg" alt="" />
                        <a class=" hvr-hover text-white" >Vermi(earthworms)</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_03.jpg" alt="" />
                        <a class=" hvr-hover text-white" href="#">Vermiwash</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            

	
	<div class="box-add-products">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="offer-box-products">
						<img class="img-fluid" src="https://technext.github.io/freshshop/images/add-img-01.jpg" alt="" />
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12">
					<div class="offer-box-products">
						<img class="img-fluid" src="https://technext.github.io/freshshop/images/add-img-02.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

    

    <div class="products-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>Fruits & Vegetables</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="special-menu text-center">
                        <div class="button-group filter-button-group">
                            <button class="active" data-filter="*">All</button>
                            <button data-filter=".top-featured">Top featured</button>
                            <button data-filter=".best-seller">Best seller</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row special-list">
            {DataPwd.map((pwd)=>                <div key={pwd._id} class="col-lg-3 col-md-6 special-grid best-seller">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="sale">Sale</p>
                            </div>
                           <Link to={`/${pwd._id}`} > <img src={pwd.image} class="img-fluid" style={{height:"12rem"}} alt="Image"/></Link>
                            <div class="mask-icon">
                                <ul>
                                    <li><Link to={`/${pwd._id}`}  data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></Link></li>
                                    <li><a  data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a onClick={()=>{addWishList(pwd)}} className="text-white" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart"  onClick={() => addToCart(pwd)}>Add to Cart</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>{pwd.name}</h4>
                            <h5> $ {pwd.price}</h5>
                        </div>
                    </div>
                </div>
                
)}

            </div>
        </div>
    </div>

    <div class="latest-blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>latest blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img class="img-fluid" src="https://technext.github.io/freshshop/images/blog-img-02.jpg" alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><i class="far fa-heart"></i></a></li>
                                <li><a href="#"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#"><i class="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img class="img-fluid" src="https://technext.github.io/freshshop/images/blog-img.jpg" alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><i class="far fa-heart"></i></a></li>
                                <li><a href="#"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#"><i class="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img class="img-fluid" src="https://technext.github.io/freshshop/images/blog-img-01.jpg" alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><i class="far fa-heart"></i></a></li>
                                <li><a href="#"><i class="fas fa-eye"></i></a></li>
                                <li><a href="#"><i class="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    


     <FooterComp/>
    
    


    </div>
  )}

  export default Homepage;