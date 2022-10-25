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

SwiperCore.use([Navigation]);
function FooterComp(params) {
  return (
    <footer>
      <div class="instagram-box">
        <Swiper
          class="main-instagram "
          slidesPerView={4}
          spaceBetween={0}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          // pagination={{
          //   clickable: true
          // }}
          autoplay={{ delay: 6000 }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="item">
              <div class="ins-inner-box">
                <img
                  className="insimg img-fluid"
                  src="https://dummyimage.com/600x400/c2c2c2/fff"
                  alt=""
                />
                <div class="hov-in">
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-top-box">
                <h3>Business Time</h3>
                <ul class="list-time">
                  <li>Monday - Friday: 08.00am to 05.00pm</li>{" "}
                  <li>Saturday: 10.00am to 08.00pm</li>{" "}
                  <li>
                    Sunday: <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-top-box">
                <h3>Newsletter</h3>
                <form class="newsletter-box">
                  <div class="form-group">
                    <input
                      class=""
                      type="email"
                      name="Email"
                      placeholder="Email Address*"
                    />
                    <i class="fa fa-envelope"></i>
                  </div>
                  <button class="btn hvr-hover" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-top-box">
                <h3>Social Media</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul>
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-rss" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-whatsapp" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          {/* <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-widget">
                <h4>About Freshshop</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-link">
                <h4>Information</h4>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Delivery Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="footer-link-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <p>
                      <i class="fas fa-map-marker-alt"></i>Address: Michael I.
                      Days 3756 <br />
                      Preston Street Wichita,
                      <br /> KS 67213{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-phone-square"></i>Phone:{" "}
                      <a href="tel:+1-888705770">+1-888 705 770</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i class="fas fa-envelope"></i>Email:{" "}
                      <a href="mailto:contactinfo@gmail.com">
                        contactinfo@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div class="footer-copyright">
        <p class="footer-company">
          no Rights Reserved. &copy; 2022 <a href="#">TheKoiriShop</a> Design By
          :<a href="https://shuvokoiri.netlify.app/">Shuvo Kumar Koiri</a>
        </p>
      </div>
    </footer>
  );
}
export default FooterComp;
