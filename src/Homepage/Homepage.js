import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";
// import  {  useContext } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
SwiperCore.use([Navigation]);

function Homepage(params) {
  // const [addWishList] = React.useContext(UserContext)
  const { DataPwd, addToCart, addWishList, WListItems } = params;
  //   console.log(products);
  const [Loggedin, setLoggedin, cartItems] = useContext(UserContext);
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //  console.log(offers.length)
  var arrStr = [
    "20% off Entire Purchase Pro",
    "19tk off to use the code off19",
    "discount sales opens next sunday",
    "shiping charges are free upto 1000tk purchase",
    "we don't seek your email password!"
  ];
  //  console.log(randElement);
  const MINUTE_MS = 2000;
  const [li, setli] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const randElement = arrStr[Math.floor(Math.random() * arrStr.length)];
      setli(randElement);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  // console.log(li)

  const navigate = useNavigate();

  function handleClick() {
    console.log("should be navigated to login page");
    navigate("/login");
  }


  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[window.onload]);
  
  return (
    <div>
      <div class="main-top sticky-top">
        <div class="container-fluid">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              {/* <div class="custom-select-box"> */}

              {/* </div> */}

              <div class="right-phone-box">
                <p>
                  Call US :- <a href="#"> +11 900 800 100</a>
                </p>
              </div>
              <div class="our-link">
                <ul>
                  {/* <li><Link to="/myAcount"><i class="fa fa-user s_color"></i> My Account</Link></li> */}
                  <li>
                    <Link to="/about">
                      <i class="fas fa-location-arrow"></i> Our location
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i class="fas fa-headset"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 ">
              <div class="text-slid-box">
                <div id="offer-box">
                  <ul class="offer-box  mt-0 mt-md-1">
                    <li>
                      <i class="fab fa-opencart"></i> {li}{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-8 col-xs-8 text-center d-flex justify-content-center align-items-center gap-5">
              <div class="btn ">
                {/* <select
                  id="basic"
                  class="  show-tick form-control"
                  data-placeholder="Sign In"
 
                >
                  <option                  onClick={()=>handleClick()}>Register Here</option>
                  <option                  onClick={()=>handleClick()}>Sign In</option>
                </select> */}
                <Link to="/wishList">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    fill="white"
                    class="bi bi-heart text-center"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </Link>
                <span class="font-weight-bold  mt-3 text-light">
                  {WListItems.length}
                </span>
              </div>
              <div class="btn nav-item mx-3">
                <Link to="/myAcount">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="#ffffff"
                    class=" bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </Link>
              </div>
              {/* <div class="search nav-item"><a href="#" > */}
              {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="white"
                  class=" bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </Link>
              <span class="font-weight-bold  mt-3 text-light">
                {cartItems.length}
              </span>
              {/* </a></div> */}
            </div>
          </div>
        </div>
      </div>
      <HeaderComp />
      <div class="HeadContainer">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              className="img "
              style={{
                zIndex: "1",
                opacity: "1",
                backgroundColor: "#333"
                // height: "657px"
              }}
              src="https://dummyimage.com/1450x675/000000/c2c3d1&text=Koiri+Shop1"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="img "
              style={{
                zIndex: "1",
                opacity: "1",
                backgroundColor: "#333"
                // height: "657px"
              }}
              src="https://dummyimage.com/1450x675/000000/c2c3d1&text=Koiri+Shop2"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="img "
              style={{
                zIndex: "1",
                opacity: "1",
                backgroundColor: "#333"
                // height: "657px"
              }}
              src="https://dummyimage.com/1450x675/000000/c2c3d1&text=Koiri+Shop3"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        {/* <div class="  absolute centered text-dark d-md-none ">
          <div class="row ">
            <div class="col-md-12 covSlide">
              <h1
                class="m-b-20 text-light cov"
                style={{
                  fontSize: "28px",
                  fontWeight: "bolder",
                  letterSpacing: "1px"
                }}
              >
                <strong>
                  Welcome To <br />
                  KoiriShop
                </strong>
              </h1>
              <p class="" style={{ fontSize: "10px", color: "whitesmoke" }}>
                See how your users experience your website in realtime or view{" "}
                <br /> trends to see any changes in performance over time.
              </p>
              <p>
                <a class="btn hvr-hover btnHeaderSmall text-white" href="#">
                  Shop New
                </a>
              </p>
            </div>
          </div>
        </div> */}

        <div class=" text-center absolute centered text-dark ">
          <div class="row ">
            <div class="col-md-12 ">
              <h1
                class="m-b-20 text-light cov"
                style={{
                  fontSize: "64px",
                  fontWeight: "bolder",
                  letterSpacing: "4px"
                }}
              >
                <strong>
                  Welcome To <br />
                  KoiriShop
                </strong>
              </h1>
              <p
                class="m-b-40"
                style={{ fontSize: "18px", color: "whitesmoke" }}
              >
                See how your users experience your website in realtime or view{" "}
                <br /> trends to see any changes in performance over time.
              </p>
              <p style={{ fontSize: "18px" }}>
                <Link to="/shop" class="btn hvr-hover btnHeader text-white">
                  Shop New
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="categories-shop">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/600x450/000/fff"
                  alt=""
                />
                <Link
                  to="/category/63348a5057d055056472fbe7"
                  class=" hvr-hover text-white"
                >
                  Organic Fertilisers
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/600x450/000/fff"
                  alt=""
                />
                <Link
                  to="/category/63346d6dbe4f2e8bbb404514"
                  class=" hvr-hover text-white"
                >
                  Vermi(earthworms)
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div class="shop-cat-box">
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/600x450/000/fff"
                  alt=""
                />
                <Link
                  to="/category/63346d5dbe4f2e8bbb404512"
                  class=" hvr-hover text-white"
                >
                  Vermiwash
                </Link>
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
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/600x500/000/fff"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="offer-box-products">
                <img
                  class="img-fluid"
                  src="https://dummyimage.com/600x500/000/fff"
                  alt=""
                />
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
                <h1>All Products Available</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="special-menu text-center">
                {/* <div class="button-group filter-button-group">
                  <button class="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".top-featured">Top featured</button>
                  <button data-filter=".best-seller">Best seller</button>
                </div> */}
              </div>
            </div>
          </div>

          <div class="row special-list d-flex justify-content-center align-items-center">
            {DataPwd.length==0 ? (
              <div class="d-flex justify-content-center align-items-center">
                {" "}
                <div class="loadingio-spinner-pulse-v3puu1fwgxe ">
                  <div class="ldio-06fbmar2z23g">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            ) : (
              DataPwd.map(pwd => (
                <div
                  key={pwd._id}
                  class="col-lg-3 col-md-6 special-grid best-seller"
                >
                  <div class="products-single fix">
                    <div class="box-img-hover">
                      <div class="type-lb">
                        <p class="sale">Sale</p>
                      </div>
                      <Link to={`/${pwd._id}`}>
                        {" "}
                        <img
                          src={pwd.image}
                          class="img-fluid"
                          style={{ height: "12rem" }}
                          alt="Image"
                        />
                      </Link>
                      <div class="mask-icon">
                        <ul>
                          <li>
                            <Link
                              to={`/${pwd._id}`}
                              data-toggle="tooltip"
                              data-placement="right"
                              title="View"
                            >
                              <i class="fas fa-eye"></i>
                            </Link>
                          </li>
                          <li>
                            <a
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Compare"
                            >
                              <i class="fas fa-sync-alt"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              onClick={() => {
                                addWishList(pwd);
                              }}
                              className="text-white"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Add to Wishlist"
                            >
                              <i class="far fa-heart"></i>
                            </a>
                          </li>
                        </ul>
                        <a
                          class="cart text-light"
                          onClick={() => addToCart(pwd)}
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                    <div class="why-text">
                      <h4>{pwd.name}</h4>
                      <h5> $ {pwd.price}</h5>
                    </div>
                  </div>
                </div>
              ))
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="blog-box">
                <div class="blog-img">
                  <img
                    class="img-fluid"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt=""
                  />
                </div>
                <div class="blog-content">
                  <div class="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul class="option-blog">
                    <li>
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="blog-box">
                <div class="blog-img">
                  <img
                    class="img-fluid"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt=""
                  />
                </div>
                <div class="blog-content">
                  <div class="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul class="option-blog">
                    <li>
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-4">
              <div class="blog-box">
                <div class="blog-img">
                  <img
                    class="img-fluid"
                    src="https://dummyimage.com/600x400/000/fff"
                    alt=""
                  />
                </div>
                <div class="blog-content">
                  <div class="title-blog">
                    <h3>Fusce in augue non nisi fringilla</h3>
                    <p>
                      Nulla ut urna egestas, porta libero id, suscipit orci.
                      Quisque in lectus sit amet urna dignissim feugiat. Mauris
                      molestie egestas pharetra. Ut finibus cursus nunc sed
                      mollis. Praesent laoreet lacinia elit id lobortis.
                    </p>
                  </div>
                  <ul class="option-blog">
                    <li>
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-comments"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}

export default Homepage;
