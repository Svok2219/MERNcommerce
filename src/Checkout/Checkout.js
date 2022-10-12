import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import HeaderComp from "../Components/HeaderComponent"
import FooterComp from "../Components/FooterComponents"
import { UserContext } from '../App';
import GooglePayButton from '@google-pay/button-react';
import { useBkash } from 'react-bkash';    
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react';
{/* ALL JS FILES */}
    <><script src="js/jquery-3.2.1.min.js"></script><script src="js/popper.min.js"></script><script src="js/bootstrap.min.js"></script></>
    {/* ALL PLUGINS */}
    <><script src="js/jquery.superslides.min.js"></script><script src="js/bootstrap-select.js"></script><script src="js/inewsticker.js"></script><script src="js/bootsnav.js."></script><script src="js/images-loded.min.js"></script><script src="js/isotope.min.js"></script><script src="js/owl.carousel.min.js"></script><script src="js/baguetteBox.min.js"></script><script src="js/form-validator.min.js"></script><script src="js/contact-form-script.js"></script><script src="js/custom.js"></script></>

    

    function Checkout(params) {

    const[Loggedin,setLoggedin,cartItems,BuyNow,cartBool] =React.useContext(UserContext);
    console.log(cartBool)
 
    
 

     

        const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
        const taxPrice = itemsPrice * 0.14;
        const shippingPrice = itemsPrice > 2000 ? 0 : 20;
        const discount = itemsPrice * 0.14;
        const CouponDiscount = itemsPrice * .06
        const totalPrice = itemsPrice + taxPrice + shippingPrice + discount + CouponDiscount;


        const itemsPriceBuy = BuyNow.price * BuyNow.qty
        const taxPriceBuy = itemsPriceBuy * 0.14;
        const shippingPriceBuy = itemsPriceBuy > 2000 ? 0 : 20;
        const discountBuy = itemsPriceBuy * 0.14;
        const CouponDiscountBuy = itemsPriceBuy * .06
        const totalPriceBuy = itemsPriceBuy + taxPriceBuy + shippingPriceBuy - discountBuy - CouponDiscountBuy;

   

    const { error, loading, triggerBkash } = useBkash({
		onSuccess: (data) => {
			console.log(data);
		},
		onClose: () => {
			console.log('Bkash iFrame closed');
		},
		bkashScriptURL: '<BKASH SCRIPT URL PROVIDED TO MERCHANT BY BKASH>', 
		amount: 1000,
		onCreatePayment: async (paymentRequest) => {

			return await fetch('<your backend api>/create/', {
				method: 'POST',
				body: JSON.stringify(paymentRequest),
			}).then((res) => res.json());

			// must return the following object:
			// {
			// 	paymentID: string;
			// 	createTime: string;
			// 	orgLogo: string;
			// 	orgName: string;
			// 	transactionStatus: string;
			// 	amount: string;
			// 	currency: string;
			// 	intent: string;
			// 	merchantInvoiceNumber: string;
			// }
		},
		onExecutePayment: async (paymentID) => {
			// call your executePayment API here
			return await fetch('<your backend api>/execute/${paymentID}', {
				method: 'POST',
			}).then((res) => res.json());

			// it doesn't matter what you return here, any errors thrown here will be available on error return value of the useBkash hook
		},
	});


    const[openOP,setopenOP]=React.useState(false)
    const OnlinePaymentOpen=()=>{
        setopenOP(true)
  
    }
    const OnlinePaymentClose=()=>{
        setopenOP(false)
      
    }
    console.log(openOP)

    const form = useRef();



    const Swallo =(x)=>{
   
          emailjs.sendForm('service_ezi7z9f', 'template_obzck5d', form.current, 'NxPNigVdSm6c6IGkN')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: '<h2>Order Successful</h2><strong>Order ID : <u>11312325498*7975</u></strong>',
                    icon: 'success',
                    html:
                      'You can still <b>cancel your order</b>, <br/>' +
                      '<a href="//sweetalert2.github.io">Chat with Customer Care</a> ' +
                      'or call us before the approvement process',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<Link to="/"><i class="fas fa-search"></i> Track my order!</Link>',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                      '<i class="fa fa-times"></i> cancel the Order!',
                    cancelButtonAriaLabel: 'Thumbs down ,cancel the Order!'
                  })
            }, (error) => {
                console.log(error.text);
            });
        
      

    }
    // useEffect(()=>{
        const[buyerData,setbuyerData]=useState({})
        // async function fetchData() {
        fetch(`http://localhost:300/User/getone/${Loggedin.email}`)
        .then((res)=>res.json())
        .then((result)=>{setbuyerData(result.user[0]) ; console.log(result)})
    //   }

     
    //   fetchData();
    // }
    //   ,[Loggedin])

      console.log(buyerData)
    return (
        <div>

    <HeaderComp/>
  


    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Checkout</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Checkout</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="cart-box-main">
        <div class="container">
            <div class="row new-account-login">
            
            </div>
            <div class="row">
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="checkout-address">
                        <div class="title-left">
                            <h3>Billing address</h3>
                        </div>
                <form ref={form} >
                <div class="form-group">
                <label className=''>Reciever's Name:</label>
                <input type="text" name="to_name" class="form-control" defaultValue={Loggedin.displayName || Loggedin.email}/>
                
                </div>
                <div class="form-group">
                <label >Enter Reciver's <b>phone Number</b></label>
                <input type="text" name="Reciver_Phone" class="form-control" 
                defaultValue={buyerData.MobileNumber}  
                />
                </div>
                <div class="form-group">
                    <label >Enter the <b>delivery Address</b></label>
                    <textarea name="Address" class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    defaultValue={buyerData.Address}
                    ></textarea>
                </div>
                {/* <label>enter Your Billing Address</label>
                <textarea name="Address" className='' /> */}
                <input type="text" name="Subtotal" className='d-none' value={cartBool==true ? totalPriceBuy : totalPrice.toFixed(2)} />
                <label className='d-none'>Subtotal</label>
                <input type="text" name="from_name" className='d-none' value={'Koiri Shop'} />
                <label className='d-none'>Sender Name</label>
                
                <input type="text" name="reply_to" className='d-none' value='shuvokoiri0@gmail.com'/>
                <label className='d-none'>reply to  customer</label>
                <input type="text" name="customer_email" className='d-none' value={Loggedin.email}/>
                <label className='d-none'>Message</label>
                <textarea name="message" className='d-none' value={`Our Representive will knock you very soon...`}/>
                <input type="submit" value="Send" className='invisible'/>
                </form>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="row">
                        <div class="col-md-12 col-lg-12">
                            <div class="shipping-method-box">
                                <div class="title-left">
                                    <h3>Shipping Method</h3>
                                </div>
                                <div class="mb-4">
                                <div class="form-check">
  <input onChange={OnlinePaymentClose} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    CASH ON DELIVERY
  </label>
</div>
<div class="form-check">
  <input onChange={OnlinePaymentOpen} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
    ONLINE PAYMENT (advance) <br/><span class="float-right small">10% discount available on Gpay!</span>
  </label>
</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <div class="odr-box">
                                <div class="title-left">
                                    <h3>Shopping cart</h3>
                                </div>
                                {cartBool?
                                   <div class="rounded p-2 bg-light">
                                    
                                   <div class="media mb-2 border-bottom" key={BuyNow.id}>
                                   <div class="media-body"> <a >{BuyNow.name}</a>
                                       <div class="small text-muted">Price: ${BuyNow.price} <span class="mx-2">|</span> Qty: {BuyNow.qty} <span class="mx-2">|</span> Subtotal: ${BuyNow.price*BuyNow.qty}</div>
                                   </div>
                                   </div>
                                   
                                  
                               </div>
                                :
                                <div class="rounded p-2 bg-light">
                                    
                                    {cartItems.map((x)=>
                                    <div class="media mb-2 border-bottom" key={x.id}>
                                    <div class="media-body"> <a >{x.name}</a>
                                        <div class="small text-muted">Price: ${x.price} <span class="mx-2">|</span> Qty: {x.qty} <span class="mx-2">|</span> Subtotal: ${x.price*x.qty}</div>
                                    </div>
                                    </div>
                                    )}
                                   
                                </div>
                                }
                             
                                
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <div class="order-box">
                                <div class="title-left">
                                    <h3>Your order</h3>
                                </div>
                                <div class="d-flex">
                                    <div class="font-weight-bold">Product</div>
                                    <div class="ml-auto font-weight-bold">Total</div>
                                </div>
                                <hr class="my-1"/>
                                <div class="d-flex">
                                    <h4>Sub Total</h4>
                                    <div class="ml-auto font-weight-bold"> $ {cartBool?itemsPriceBuy:itemsPrice} </div>
                                </div>
                                <div class="d-flex">
                                    <h4>Discount</h4>
                                    <div class="ml-auto font-weight-bold"> $ {cartBool?discountBuy.toFixed(2):discount} </div>
                                </div>
                                <hr class="my-1"/>
                                <div class="d-flex">
                                    <h4>Coupon Discount</h4>
                                    <div class="ml-auto font-weight-bold"> $ {cartBool?CouponDiscountBuy.toFixed(2):CouponDiscount} </div>
                                </div>
                                <div class="d-flex">
                                    <h4>Tax</h4>
                                    <div class="ml-auto font-weight-bold"> $ {cartBool?taxPriceBuy.toFixed(2):taxPrice} </div>
                                </div>
                                <div class="d-flex">
                                    <h4>Shipping Cost</h4>
                                    <div class="ml-auto font-weight-bold">$ {cartBool?shippingPriceBuy.toFixed(2):shippingPrice} </div>
                                </div>
                                <hr/>
                                <div class="d-flex gr-total">
                                    <h5>Grand Total</h5>
                                    <div class="ml-auto h5"> $ {cartBool? totalPriceBuy : totalPrice.toFixed(2)} </div>
                                </div>
                                <hr/> </div>
                        </div>
                        {!openOP ? 
                        <div onClick={Swallo} class="col-12 d-flex shopping-box"> <a class="ml-auto btn hvr-hover text-white">Place Order</a> </div>
                       :
                        <div className='col-12 d-flex shopping-box mt-2 ml-auto '>
                        <GooglePayButton
                    
 environment="TEST"
 paymentRequest={{
   apiVersion: 2,
   apiVersionMinor: 0,
   allowedPaymentMethods: [
     {
       type: 'CARD',
       parameters: {
         allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
         allowedCardNetworks: ['MASTERCARD', 'VISA'],
       },
       tokenizationSpecification: {
         type: 'PAYMENT_GATEWAY',
         parameters: {
           gateway: 'example',
           gatewayMerchantId: 'exampleGatewayMerchantId',
         },
       },
     },
   ],
   merchantInfo: {
     merchantId: '12345678901234567890',
     merchantName: 'Demo Merchant',
   },
   transactionInfo: {
     totalPriceStatus: 'FINAL',
     totalPriceLabel: 'Total',
     totalPrice: totalPrice,
     currencyCode: 'USD',
     countryCode: 'US',
   },
   shippingAddressRequired: false,
   callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
 }}
 onLoadPaymentData={paymentRequest => {
   console.log('Success', paymentRequest);
 }}
 onPaymentAuthorized={paymentData => {
     console.log('Payment Authorised Success', paymentData)
     return { transactionState: 'SUCCESS'}
   }
 }
 onPaymentDataChanged={paymentData => {
     console.log('On Payment Data Changed', paymentData)
     return { }
   }
 }
 existingPaymentMethodRequired='false'
 buttonColor='checkout'
 buttonType='checkout'
/>
</div>
    }
{/* <div className='col-12 d-flex shopping-box mt-2 ml-auto'>      */}
{/* <button onClick={triggerBkash}>Pay with bKash</button> */}
{/* </div>     */}
                    </div>
                </div>
            </div>

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
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-02.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-03.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-04.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-05.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-06.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-07.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-08.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-09.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="ins-inner-box">
                    <img src="images/instagram-img-05.jpg" alt="" />
                    <div class="hov-in">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* End Instagram Feed  */}

<FooterComp/>


    {/* Start copyright  */}
    <div class="footer-copyright">
        <p class="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
            <a href="https://html.design/">html design</a></p>
    </div>
    {/* End copyright  */}

    <a href="#" id="back-to-top" title="Back to top" >&uarr;</a>


</div>

    )
}
export default Checkout;