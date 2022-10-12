
 import React, {  useEffect, useRef, useState } from "react";
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

  function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      


      
    return (
    <div >
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
                            <h1 class="m-b-20 text-light cov" style={{fontSize:"28px",fontWeight:"bolder",letterSpacing:"1px"}}><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p class="" style={{fontSize: "10px",color:"whitesmoke"}}>See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p ><a  class="btn hvr-hover btnHeaderSmall text-white" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div> 

    <div class=" text-center absolute centered text-dark  d-none d-sm-block" >
                    <div class="row ">
                        <div class="col-md-12 ">
                            <h1 class="m-b-20 text-light cov" style={{fontSize:"64px",fontWeight:"bolder",letterSpacing:"4px"}}><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p class="m-b-40" style={{fontSize: "18px",color:"whitesmoke"}}>See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p style={{fontSize: "18px",
}}><a class="btn hvr-hover btnHeader text-white" href="#">Shop New</a></p>
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
    
    <div class="footer-copyright">
        <p class="footer-company">no Rights Reserved. &copy; 2022 <a href="#">ThewayShop</a> Design By :
            <a href="https://html.design/">Shuvo Copycatfish</a></p>
    </div>


    </div>
  )}

  export default Homepage;