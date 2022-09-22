import * as React from 'react';
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";
import { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';
{
  /* ALL JS FILES */
}
<>
  <script src="js/jquery-3.2.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</>;
{
  /* ALL PLUGINS */
}
<>
  <script src="js/jquery.superslides.min.js"></script>
  <script src="js/bootstrap-select.js"></script>
  <script src="js/inewsticker.js"></script>
  <script src="js/bootsnav.js."></script>
  <script src="js/images-loded.min.js"></script>
  <script src="js/isotope.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/baguetteBox.min.js"></script>
  <script src="js/form-validator.min.js"></script>
  <script src="js/contact-form-script.js"></script>
  <script src="js/custom.js"></script>
</>;


function Cart(params) {
  // console.log(params);
  const {addToCart,removeFromCart}=params;
  const[Loggedin,setLoggedin,cartItems]=useContext(UserContext)
  // console.log(cartItems);

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      {/* Start Main Top */}
      <HeaderComp />
      {/* Start All Title Box */}
      <div class="all-title-box">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>Cart</h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li class="breadcrumb-item active">Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End All Title Box */}

      {/* Start Cart  */}
      <div class="cart-box-main">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="table-main table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Add</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                  {cartItems.length === 0 && <div className='text-center text-dark font-weight-bold'>Cart is empty</div>}
        {cartItems.map((item) => (
                  <tr key={item.id}>
                      <td class="thumbnail-img">
                        <a href="#">
                          <img
                            class="img-fluid"
                            src="https://technext.github.io/freshshop/images/img-pro-01.jpg"
                            alt=""
                          />
                        </a>
                      </td>
                      <td class="name-pr">
                        <a href="#">{item.name}</a>
                      </td>
                      <td class="price-pr">
                        <p>$ {item.price}</p>
                      </td>
                      <td class="price-pr ">
                      <p>{item.qty}</p>
                      </td>
                      <td class="remove-pr">
                        <a>
                        <i onClick={()=>addToCart(item)} class="fas fa-plus "></i>
                        </a>
                      </td>
                      <td class="total-pr">
                        <p>$ {item.price * item.qty}</p>
                      </td>
                      <td class="remove-pr">
                        <a >
                          <i onClick={() => removeFromCart(item)} class="fas fa-minus "></i>
                        </a>
                      </td>
                    </tr>
        ))}

         
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="row my-5">
            <div class="col-lg-6 col-sm-6">
              <div class="coupon-box">
                <div class="input-group input-group-sm">
                  <input
                    class="form-control"
                    placeholder="Enter your coupon code"
                    aria-label="Coupon code"
                    type="text"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-theme" type="button">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="update-box">
                <input value="Update Cart" type="submit" />
              </div>
            </div>
          </div>
          {cartItems.length !== 0 && (
          <div class="row my-5">
            <div class="col-lg-8 col-sm-12"></div>
            <div class="col-lg-4 col-sm-12">
              <div class="order-box">
                <h3>Order summary</h3>
                <div class="d-flex">
                  <h4>Sub Total</h4>
                  <div class="ml-auto font-weight-bold"> $ {itemsPrice} </div>
                </div>
                {/* <div class="d-flex">
                  <h4>Discount</h4>
                  <div class="ml-auto font-weight-bold"> $ 40 </div>
                </div> */}
                <hr class="my-1" />
                {/* <div class="d-flex">
                  <h4>Coupon Discount</h4>
                  <div class="ml-auto font-weight-bold"> $ 10 </div>
                </div> */}
                <div class="d-flex">
                  <h4>Tax</h4>
                  <div class="ml-auto font-weight-bold"> $ {taxPrice.toFixed(2)} </div>
                </div>
                <div class="d-flex">
                  <h4>shipping Price</h4>
                  <div class="ml-auto font-weight-bold"> $ {shippingPrice.toFixed(2)} </div>
                </div>
                <hr />
                <div class="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div class="ml-auto h5"> {totalPrice.toFixed(2)} </div>
                </div>
                <hr />{" "}
              </div>
            </div>
            <div class="col-12 d-flex shopping-box">
              <Link to="/checkOut" class="ml-auto btn hvr-hover text-white">
                Checkout
              </Link>{" "}
            </div>
          </div>    )}
        </div>
      </div>
      
      {/* End Cart */}

      {/* Start Instagram Feed  */}
      <div class="instagram-box">
        <div class="main-instagram owl-carousel owl-theme">
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-01.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-02.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-03.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-04.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-06.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-07.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-08.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-09.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="ins-inner-box">
              <img src="images/instagram-img-05.jpg" alt="" />
              <div class="hov-in">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Instagram Feed  */}
      <FooterComp />
      {/* Start Footer  */}
      {/*<footer>
        <div class="footer-main">
            <div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="footer-top-box">
							<h3>Business Time</h3>
							<ul class="list-time">
								<li>Monday - Friday: 08.00am to 05.00pm</li> <li>Saturday: 10.00am to 08.00pm</li> <li>Sunday: <span>Closed</span></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="footer-top-box">
							<h3>Newsletter</h3>
							<form class="newsletter-box">
								<div class="form-group">
									<input class="" type="email" name="Email" placeholder="Email Address*" />
									<i class="fa fa-envelope"></i>
								</div>
								<button class="btn hvr-hover" type="submit">Submit</button>
							</form>
						</div>
					</div>
					<div class="col-lg-4 col-md-12 col-sm-12">
						<div class="footer-top-box">
							<h3>Social Media</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<ul>
                                <li><a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
						</div>
					</div>
				</div>
				<hr/>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-widget">
                            <h4>About Freshshop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 							
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-link">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="footer-link-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p><i class="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br/>Preston Street Wichita,<br/> KS 67213 </p>
                                </li>
                                <li>
                                    <p><i class="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                                </li>
                                <li>
                                    <p><i class="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <footer>*/}
      {/* End Footer  */}

      {/* Start copyright  */}
      <div class="footer-copyright">
        <p class="footer-company">
          All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By
          :<a href="https://html.design/">html design</a>
        </p>
      </div>
      {/* End copyright  */}

      <a href="#" id="back-to-top" title="Back to top" class="d-none">
        &uarr;
      </a>
    </div>
  );
}
export default Cart;
