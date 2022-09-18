
// import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";

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


import React, { useRef, useState } from "react";
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
import { Pagination, Navigation ,Autoplay} from "swiper";


function Homepage() {

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      function imgUrl() {
        const id = rand(1, 200);
        return `https://picsum.photos/id/${id}/1920/1080`;
      }
      
      function createSlide() {
        return (
          <SwiperSlide>
            <img className="img" src={imgUrl()} alt="" />
          </SwiperSlide>
        );
      }
      
    return (
    <div >
       <HeaderComp/>
       <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'.6',backgroundColor:"#333"}} src='https://technext.github.io/freshshop/images/banner-03.jpg' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'.6',backgroundColor:"#333"}} src='https://technext.github.io/freshshop/images/banner-02.jpg' alt="" />
          </SwiperSlide>
         
          <SwiperSlide>
            <img className="img img-fluid" style={{zIndex:'1',opacity:'.6',backgroundColor:"#333"}} src=' https://technext.github.io/freshshop/images/banner-01.jpg' alt="" />
          </SwiperSlide>
    </Swiper>

{/* 
    <div class=" text-center absolute " style={{zIndex:"999"}}>
                    <div class="row">
                        <div class="col-md-12">
                            <h1 class="m-b-20 text-light cov" style={{fontSize:"64px",fontWeight:"bolder"}}><strong>Welcome To <br/> Freshshop</strong></h1>
                            <p class="m-b-40" style={{fontSize: "18px",
color: "#fff",
paddingBottom: "30px"}}>See how your users experience your website in realtime or view <br/> trends to see any changes in performance over time.</p>
                            <p style={{fontSize: "18px",
color: "#fff",
paddingBottom: "30px"}}><a class="btn hvr-hover text-white" href="#">Shop New</a></p>
                        </div>
                    </div>
                </div> */}

       {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="https://user-images.githubusercontent.com/113424072/190114296-b09ee076-2d5c-4893-8a38-277731bb4463.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="https://user-images.githubusercontent.com/113424072/190114296-b09ee076-2d5c-4893-8a38-277731bb4463.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="https://user-images.githubusercontent.com/113424072/190114296-b09ee076-2d5c-4893-8a38-277731bb4463.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    <div class="categories-shop">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_01.jpg" alt="" />
                        <a class="btn text-decoration-none text-white hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_02.jpg" alt="" />
                        <a class="btn text-decoration-none text-white hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="shop-cat-box">
                        <img class="img-fluid" src="https://technext.github.io/freshshop/images/categories_img_03.jpg" alt="" />
                        <a class="btn text-decoration-none text-white hvr-hover" href="#">Lorem ipsum dolor</a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

	
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
                <div class="col-lg-3 col-md-6 special-grid best-seller">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="sale">Sale</p>
                            </div>
                            <img src="https://technext.github.io/freshshop/images/img-pro-01.jpg" class="img-fluid" alt="Image"/>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $7.79</h5>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 special-grid top-featured">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="new">New</p>
                            </div>
                            <img src="https://technext.github.io/freshshop/images/img-pro-02.jpg" class="img-fluid" alt="Image"/>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $9.79</h5>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 special-grid top-featured">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="sale">Sale</p>
                            </div>
                            <img src="https://technext.github.io/freshshop/images/img-pro-03.jpg" class="img-fluid" alt="Image"/>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $10.79</h5>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 special-grid best-seller">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="sale">Sale</p>
                            </div>
                            <img src="https://technext.github.io/freshshop/images/img-pro-04.jpg" class="img-fluid" alt="Image"/>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <h5> $15.79</h5>
                        </div>
                    </div>
                </div>
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



    
    <div class="instagram-box">
        {/* <div > */}
        <Swiper class="main-instagram "
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={true}
        
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true
        // }}
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[ Navigation,Autoplay]}
        className="mySwiper"
      >
        
          
           
          
           
          
         
          

        <SwiperSlide>
        <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-09.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-08.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>   <div class="item">
                <div class="ins-inner-box">
                    <img  className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-07.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>  <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-06.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div class="item">
                <div class="ins-inner-box">
                    <img  className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-05.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>  <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-04.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-03.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>  <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-02.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div></SwiperSlide>
        <SwiperSlide>
             <div class="item">
                <div class="ins-inner-box">
                    <img className="insimg" src="https://technext.github.io/freshshop/images/instagram-img-01.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
        
        {/* </div> */}
    </div>

     <FooterComp/>
    
    <div class="footer-copyright">
        <p class="footer-company">no Rights Reserved. &copy; 2022 <a href="#">ThewayShop</a> Design By :
            <a href="https://html.design/">Shuvo Copycatfish</a></p>
    </div>


    </div>
  )}

  export default Homepage;