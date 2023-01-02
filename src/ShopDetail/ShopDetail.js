import * as React from 'react';
import { useContext, useState ,useEffect} from "react";

import HeaderComp from "../Components/HeaderComponent"
import FooterComp from "../Components/FooterComponents"
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../App';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css/autoplay';



// import required modules
import SwiperCore,{ Pagination, Navigation ,Autoplay } from "swiper";
import { useLayoutEffect } from 'react';


SwiperCore.use([Navigation]);
    {/* ALL JS FILES */}
    <><script src="js/jquery-3.2.1.min.js"></script><script src="js/popper.min.js"></script><script src="js/bootstrap.min.js"></script></>
    {/* ALL PLUGINS */}
    <><script src="js/jquery.superslides.min.js"></script><script src="js/bootstrap-select.js"></script><script src="js/inewsticker.js"></script><script src="js/bootsnav.js."></script><script src="js/images-loded.min.js"></script><script src="js/isotope.min.js"></script><script src="js/owl.carousel.min.js"></script><script src="js/baguetteBox.min.js"></script><script src="js/form-validator.min.js"></script><script src="js/contact-form-script.js"></script><script src="js/custom.js"></script></>
function ShopDetail(params){
    const [BuyNowQty,setBuyNowQty,addWishList] = useContext(UserContext);
    const {id} =useParams();
    const{products,addToCart,BuyNowFunction}=params;
   console.log(useParams())
    // const pwd = products.find((x)=>x.id==id);

    const [Pwd,setData]=useState([])
    const pwd=products.find((x)=>x._id===id)
    // const Pwd=products.find((x)=>x.Category._id===pwd.Category._id)
    useEffect(()=>{async function fetchData() {
     await fetch(`https://koiricom-server.onrender.com/Products/FindByCategory/${pwd.Category._id}`)
      .then(res=>res.json())
      .then(result=>{setData(result);console.log(result)})
    }
    fetchData();}
    ,[products])
// if(pwd.images.length>1){pwd.images.map((x)=>console.log(x))}
// else{console.log('no')}
console.log(pwd,Pwd)







useEffect(() => {
    window.scrollTo(0, 0)
  },[window.onload]);
  

    return(
<div>
    {/* Start Main Top */}
    <HeaderComp/>
        {/* End Top Search */}

    {/* Start All Title Box */}
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Shop Detail</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Shop Detail </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* End All Title Box */}

   

{!pwd ? <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
<div></div><div></div><div></div>
</div></div></div>

:  <div class="shop-detail-box-main">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6">
                    <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"> <img class="d-block w-100" style={{height:"30rem"}} src={pwd.images[0]} alt="First slide"/> </div>
                            <div class="carousel-item"> <img class="d-block w-100" style={{height:"30rem"}} src={pwd.images[1]} alt="Second slide"/> </div>
                            <div class="carousel-item"> <img class="d-block w-100 " style={{height:"30rem"}} src={pwd.images[2]} alt="Third slide"/> </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev"> 
						<i class="fa fa-angle-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span> 
					</a>
                        <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next"> 
						<i class="fa fa-angle-right" aria-hidden="true"></i> 
						<span class="sr-only">Next</span> 
					</a>
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-1" data-slide-to="0" class="active">
                                <img class="d-block w-100 img-fluid"  style={{height:"3rem"}} src={pwd.images[0] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="1">
                                <img class="d-block w-100 img-fluid" style={{height:"3rem"}} src={pwd.images[1] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="2">
                                <img class="d-block w-100 img-fluid" style={{height:"3rem"}} src={pwd.images[2] || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAB7e3sLCwvk5OSAgIDo6Og5OTkHBweWlpYuLi40NDTx8fGQkJDt7e0pKSmJiYkcHBxtbW0iIiISEhIYGBjDw8Pd3d1iYmLR0dGqqqp1dXVbW1vKysq1tbVWVlZGRkafn58P34HmAAADT0lEQVRoge3abZOyIBQGYMnC1tTUylZrt+3//8lnQlEPgi9whJlnPB8322sgbkHE87baaquttvr/KknzOHJEZ4SQM3Vip+RTFyd4zmwSuMDj2ia+Azw6N/jJAU4vLvGgwY8ucJ+4G3D01OAuct7iLnJOj/1uL/KdWaX3RTgfcNcPzkOvX/tFOM95iIKnS2wh5wdDe7fIFnL+ZdX26LX5IhtwKfH1Ssv2aNjgLOd0r1P0x9eyUXK+17SFnFu0C0/MuT07jz0x59bsHWG44Xyua5ODZzyfa9vkyxNzvtg+6trsRgxzvtTWbjch7LbCc56p8ej3FYZBPJgtDWyfzX7TOb//NVe8se3JnP9004YwXZrbUzm/dDYpsG2PZiM5r3o0OaPbozn/7tukRLdHch6FwP7Ft9U5TzJgV8DWv7f0bWXOoz9gg8GG1G51zuFSEmyZoNndgLsBvOzTOfgGnq3K+a6jQ/gNRFuR86hLWQmvx7RVOa/Yn/1HIlyOanv0Jh1wSVm9i+HVuHaX8zlrOKx8t/iM+by1Edt9/0zQC9btiHZ0ggvI2xSOaH/2HdnSee5vjmfXN0+Gj83na9h8jbBg3Y5ll3yI1ev225yWY83f/F5OhHX72G+OlO+AEAHnORdHO6XtPIrTbmG/h3W7LOdR/AxOr12JaA92e9iAG97h3vzzZ4Jl/4q0Iudp9znrDAR7P6QbHM5qYKX+jWLTgMhqmHP4y7wx7JeUbgYcuMOl4HNqbsN/2K9hzsG1T+N8V0RdDAezGuj2KjFrd0nGapjz/o0gK24mNh2lZTnvb3kHV32bRqpx1hbI+Vm6365lX5PHFC3LubjfrmVn+TQ9nXPNfaZ5NZXzNe06auBZDeCr2jDnV7Hb17XHc76yPZrztW1JzttuX92ucbAbxf/H+rY65xZsZc5t2KqcW7EVObdjy3NuyYY5v9Q5t2XL5vOHLVvydqmYwtBs1sVG79UM7LrlBm8UTWxJzu3Zkpzbs9XP5xZsSc7nl/ohbGYNcz67pI/cy3G9t8g0PpjVAxxbcHIezulJQKdnIHm3uzj9iXBOxgB3ehKwPQPp4KB1e/oztm+3Ay6fvnQF/OKs3U3OM/HFoaWK4jx1RG+11VZbbbVq/QPjGC0Suz646wAAAABJRU5ErkJggg=='} alt="" />
                            </li>
                        </ol>
                    </div>
                </div>
                
                 <div class="col-xl-7 col-lg-7 col-md-6">
                    <div class="single-product-details">
                        <h2>{pwd.name}</h2>
                        <h5> <del>$ {pwd.DelPrice} </del> ${pwd.price}</h5>
                        <p class="available-stock"><span> More than ${pwd.InitialStock-pwd.sold} available / <a href="#">{pwd.sold} sold </a></span></p>
						<h4>Short Description:</h4>
						<p>{pwd.Description}</p>
						<ul>
							<li>
								<div class="form-group quantity-box">
									<label class="control-label">Enter the Quantity</label>
									<input 
                                    // onChange={functionQTY}
                                     id='qty' class="form-control text-black" defaultValue='1'  type="number" required/>
								</div>
							</li>
						</ul>

						<div class="price-box-bar">
							<div class="cart-and-bay-btn ">
								<Link to="/checkOut"class="btn hvr-hover text-white mr-1" data-fancybox-close="" onClick={()=>BuyNowFunction(pwd)} >Buy New</Link> 
								<a class="btn hvr-hover text-white ml-1" data-fancybox-close="" onClick={()=>addToCart(pwd)}>Add to cart</a>
							</div>
						</div>

						<div class="add-to-btn">
							<div class="add-comp">
								<a class="btn hvr-hover text-white mr-1" href="#"><i class="fas fa-heart"></i> Add to wishlist</a>
								<a class="btn hvr-hover text-white ml-1" href="#"><i class="fas fa-sync-alt"></i> Add to Compare</a>
							</div>
							<div class="share-bar gap-1 d-flex justify-content-evenly col-md-4 col-sm-12 ">
								<a class="btn hvr-hover text-white" href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
								<a class="btn hvr-hover text-white mx-1" href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a>
								<a class="btn hvr-hover text-white" href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
								<a class="btn hvr-hover text-white mx-1" href="#"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
								<a class="btn hvr-hover text-white" href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
							</div>
						</div>
                    </div>
                </div> 
            </div>
			


            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>Featured Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                    <Swiper 
     slidesPerView={3}
     spaceBetween={3}
     slidesPerGroup={3}
     loop={true}
     
     loopFillGroupWithBlank={true}
     // pagination={{
     //   clickable: true
     // }}
     autoplay={{ delay: 6000 }}
    //  navigation={true}
     modules={[ Autoplay]}
     className="mySwiper"
   >
{Pwd.length>0 ?   Pwd.map((pwd)=>
<SwiperSlide className=' col-md-4 col-12'>
               {/* <div key={pwd._id} class=" special-grid best-seller"> */}
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
                {/* </div>                */}
</SwiperSlide> 
) : null}
   </Swiper>


                    


                </div>
            </div>


			<div class="row my-5">
				<div class=" card-outline-secondary my-4">
					<div class="card-header">
						<h2>Product Reviews</h2>
					</div>
					<div class="card-body">
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr/>
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr/>
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr/>
						<a href="#" class="btn hvr-hover">Leave a Review</a>
					</div>
				  </div>
			</div>


        </div>
    </div>


}



</div>


    )
}
export default ShopDetail;