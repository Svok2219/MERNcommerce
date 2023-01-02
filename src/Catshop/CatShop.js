import * as React from 'react';
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";
import { Link, useParams } from 'react-router-dom';
import data from '../data';
import ReactSlider from "react-slider";
import { useState ,useEffect} from "react";
import Swal from 'sweetalert2';
    {/* ALL JS FILES */}
    // <><script src="js/jquery-3.2.1.min.js"></script><script src="js/popper.min.js"></script><script src="js/bootstrap.min.js"></script></>
    // {/* ALL PLUGINS */}
    // <><script src="js/jquery.superslides.min.js"></script><script src="js/bootstrap-select.js"></script><script src="js/inewsticker.js"></script><script src="js/bootsnav.js."></script><script src="js/images-loded.min.js"></script><script src="js/isotope.min.js"></script><script src="js/owl.carousel.min.js"></script><script src="js/baguetteBox.min.js"></script><script src="js/jquery-ui.js"></script><script src="js/jquery.nicescroll.min.js"></script><script src="js/form-validator.min.js"></script><script src="js/contact-form-script.js"></script><script src="js/custom.js"></script></>
function CatShop (params){
  const { DataPwd, addToCart, addWishList ,WListItems,cartItems} = params;
  const [query, setQuery] = React.useState("");
    const [Data, setData] = React.useState([]);
    const [bool, setbool] = React.useState(false);
    const [Pwd,setdata]=React.useState([])
    const [noitem,setnoitem]=React.useState()
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(4500);
    const filterCliked=  (e)=>{
      e.preventDefault()
      setbool(true)
      const pwdArray = DataPwd.filter((item)=>
      item.price>min && item.price<max ?item:null);
      setnoitem(pwdArray)
      console.log("tipaise",pwdArray)
    }
    const constant=true
    const{id}=useParams()
// console.log(DataPwd,id)
const[catRouted,setcatRouted]=React.useState(true)  
    React.useEffect(()=>{async function fetchData() {
     await fetch(`https://koiricom-server.onrender.com/Products/FindByCategory/${id}`)
      .then(res=>res.json())
      .then(result=>{setdata(result)
        if(result.length>0){
          
          // alert(result.length)
          // setbool(true) ;
          setcatRouted(true);
          setnoitem(result);
          // setQuery(id)
      }
      else{alert('absolute nothingness')}
      })
      
    }
    fetchData();}
    ,[constant])
// console.log(Pwd,noitem);
 
    const queryfunc =(e)=>{
        e.preventDefault()
        setcatRouted(false)
        setbool(false)
    const pwdArray =   DataPwd.filter((item)=>item.name.toLowerCase().includes(query));
    setData(pwdArray);
    }
    // console.log(query,Data)
    React.useEffect(() => {
        Data.length==0 && query &&  Swal.fire({
                                    icon: 'error',
                                    title: `...${query}...`,
                                    text: 'No result available for this search!',
                                    // footer: '<a href="">Why do I have this issue?</a>'
                                })
                            }, [Data])
   

const [cats,setCats]=React.useState([])
React.useEffect(()=>{async function fetchData() {
  fetch('https://koiricom-server.onrender.com/Category/getAllCategories')
  .then(res=>res.json())
  .then(result=>setCats(result.content))
}
fetchData();}
,[cats])
// console.log(cats)
 
const findbyCategory=(i)=>{
  setbool(true)
  setcatRouted(false)
console.log(i)
const catPwd=DataPwd.filter((x)=>x.Category.name==i)
setnoitem(catPwd)
}

// console.log(noitem)


useEffect(() => {
  window.scrollTo(0, 0)
},[window.onload]);


    return(
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
                {/* <div id="offer-box">
                  <ul class="offer-box  mt-0 mt-md-1">
                    <li>
                      <i class="fab fa-opencart"></i> {li}{" "}
                    </li>
                  </ul>
                </div> */}
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


      <HeaderComp/>

    {/* Start All Title Box */}
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Shop</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* End All Title Box */}

    {/* Start Shop Page  */}
    <div class="shop-box-inner">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                    <div class="right-product-box">
                        <div class="product-item-filter row">
                            <div class="col-12 col-sm-8 text-center text-sm-left">
                                <div class="toolbar-sorter-right">
                                    <span>Sort by </span>
                                    <select id="basic" class="selectpicker show-tick form-control" data-placeholder="$ USD">
									<option data-display="Select">Nothing</option>
									<option value="1">Popularity</option>
									<option value="2">High Price → High Price</option>
									<option value="3">Low Price → High Price</option>
									<option value="4">Best Selling</option>
								</select>
                                </div>
                                <p>Showing all 4 results</p>
                            </div>
                            <div class="col-12 col-sm-4 text-center text-sm-right">
                                <ul class="nav nav-tabs ml-auto">
                                    <li>
                                        <a class="nav-link active" href="#grid-view" data-toggle="tab"> <i class="fa fa-th"></i> </a>
                                    </li>
                                    <li>
                                        <a class="nav-link" href="#list-view" data-toggle="tab"> <i class="fa fa-list-ul"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="product-categorie-box">
                            <div class="tab-content">
                              {noitem ?
                              bool==false && catRouted==false? 
                                <div role="tabpanel" class="tab-pane fade show active" id="grid-view">
                            {DataPwd.length>0 ?        
          <div class="row special-list">
         {Data.length>0 && query? 
         Data.map(pwd => (
            <div
              key={pwd._id}
              class="col-lg-4 col-md-6 special-grid best-seller"
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
                    <a class="cart text-light" onClick={() => addToCart(pwd)}>
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
          )) :

            DataPwd.map(pwd => (
              <div
                key={pwd._id}
                class="col-lg-4 col-md-6 special-grid best-seller"
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
                      <a class="cart text-light" onClick={() => addToCart(pwd)}>
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
            ))}


          </div>
          :<div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
          <div></div><div></div><div></div>
          </div></div></div>
          }           </div>

          :  <div role="tabpanel" class="tab-pane fade show active " id="grid-view">
            {/* <h1>length is {noitem.length}</h1> */}
            <div class="row ">
           {noitem.map(pwd => (
            <div
              key={pwd._id}
              class="col-lg-4 col-md-6 special-grid best-seller"
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
                    <a class="cart text-light" onClick={() => addToCart(pwd)}>
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
          ))}
          </div>
            </div>

            :<div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
            <div></div><div></div><div></div>
            </div></div></div>}
                                <div role="tabpanel" class="tab-pane fade" id="list-view">
                     

                                { Data.length>0 && query?  
                       Data.map(pwd => (
            <div
              key={pwd._id} class="list-view-box">
              <div class="row">
                  <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                      <div class="products-single fix">
                          <div class="box-img-hover">
                              <div class="type-lb">
                                  <p class="new">New</p>
                              </div>
                              <img src={pwd.image} class="img-fluid" alt="Image"/>
                              <div class="mask-icon">
                                  <ul>
                                      <li>  <Link
  to={`/${pwd._id}`}
  data-toggle="tooltip"
  data-placement="right"
  title="View"
>
 <i class="fas fa-eye"></i></Link></li>
                                      <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                      <li><a   onClick={() => {
    addWishList(pwd);
  }}
  className="text-white"
  data-toggle="tooltip"
  data-placement="right"
  title="Add to Wishlist"
dataToggle="tooltip" dataPlacement="right" ><i class="far fa-heart"></i></a></li>
                                  </ul>

                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                      <div class="why-text full-width">
                          <h4>{pwd.name}</h4>
                          <h5>$ {pwd.price} 
                          {/* <del>${pwd.delPrice}</del> */}
                           </h5>
                          <p>{pwd.Description}</p> 
                     <a class="btn hvr-hover" onClick={() => addToCart(pwd)}>Add to Cart</a>
                      </div>
                  </div>
              </div>
          

              </div>)) :
              
               DataPwd.map(pwd => (
                                     <div
                key={pwd._id} class="list-view-box">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                <div class="products-single fix">
                                                    <div class="box-img-hover">
                                                        <div class="type-lb">
                                                            <p class="new">New</p>
                                                        </div>
                                                        <img src={pwd.image} class="img-fluid" alt="Image"/>
                                                        <div class="mask-icon">
                                                            <ul>
                                                                <li>  <Link
                            to={`/${pwd._id}`}
                            data-toggle="tooltip"
                            data-placement="right"
                            title="View"
                          >
                           <i class="fas fa-eye"></i></Link></li>
                                                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                                                <li><a   onClick={() => {
                              addWishList(pwd);
                            }}
                            className="text-white"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Add to Wishlist"
                          dataToggle="tooltip" dataPlacement="right" ><i class="far fa-heart"></i></a></li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                                                <div class="why-text full-width">
                                                    <h4>{pwd.name}</h4>
                                                    <h5>$ {pwd.price} 
                                                    {/* <del>${pwd.delPrice}</del> */}
                                                     </h5>
                                                    <p>{pwd.Description}</p> 
                                               <a class="btn hvr-hover" onClick={() => addToCart(pwd)}>Add to Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
				<div class="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                    <div class="product-categori">
                        <div class="search-product">
                            <form action="#">
                                <input class="form-control"  onChange={(e) => setQuery(e.target.value.toLowerCase())} placeholder="Search here..." type="text"/>
                                <button type="submit" onClick={queryfunc} > <i class="fa fa-search"></i> </button>
                            </form>
                        </div>
                        <div class="filter-sidebar-left">
                            <div class="title-left">
                                <h3>Categories</h3>
                            </div>
                            <div class="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                <div class="list-group-collapse sub-men">
                              {cats.length>0 ?
                               cats.map((x)=>
                               <a onClick={()=>findbyCategory(x.name)} class="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">{x.name} <small class="text-muted">({DataPwd.filter((y)=>y.Category.name==x.name).length})</small>		</a>)
                               : <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
<div></div><div></div><div></div>
</div></div></div> }
                     
                                    {/* <div class="collapse show" id="sub-men1" data-parent="#list-group-men">
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action active">Fruits 1 <small class="text-muted">(50)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Fruits 2 <small class="text-muted">(10)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Fruits 3 <small class="text-muted">(10)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Fruits 4 <small class="text-muted">(10)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Fruits 5 <small class="text-muted">(20)</small></a>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div class="list-group-collapse sub-men">
                                    <a class="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Vegetables 
								<small class="text-muted">(50)</small>
								</a> */}
                                    {/* <div class="collapse" id="sub-men2" data-parent="#list-group-men">
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action">Vegetables 1 <small class="text-muted">(10)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Vegetables 2 <small class="text-muted">(20)</small></a>
                                            <a href="#" class="list-group-item list-group-item-action">Vegetables 3 <small class="text-muted">(20)</small></a>
                                        </div>
                                    </div> */}
                                {/* </div> */}
                                {/* <a href="#" class="list-group-item list-group-item-action"> Grocery  <small class="text-muted">(150) </small></a>
                                <a href="#" class="list-group-item list-group-item-action"> Grocery <small class="text-muted">(11)</small></a>
                                <a href="#" class="list-group-item list-group-item-action"> Grocery <small class="text-muted">(22)</small></a> */}
                            </div>
                        </div>
                        <div class="filter-price-left">
                            <div class="title-left">
                                <h3>Price</h3>
                            </div>
                            <div class="wrapper">
        {/* <div class="values">
            <span id="range1">
                0
            </span>
            <span> &dash; </span>
            <span id="range2">
                100
            </span>
        </div> */}
        {/* <main> */}
      <div className="containerRange">
        <ReactSlider
          defaultValue={[min, max]}
          className="sliderR"
          trackClassName="tracker"
          min={0}
          max={4500}
          minDistance={50}
          step={50}
          withTracks={true}
          pearling={true}
          renderThumb={(props) => {
            return <div {...props} className="thumb"></div>;
          }}
          renderTrack={(props) => {
            return <div {...props} className="track"></div>;
          }}
          onChange={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
      
      </div>
    {/* </main> */}
    </div>                    
    <div class="price-box-slider d-flex justify-content-center align-items-center ">
    <div className="values-wrapper mt-3">
            <p>${min}-${max}</p>
          {/* <p>
            Min Value:
            <span>{min} $</span>
          </p>
          <p>
            Max Value:
            <span>{max} $</span>
          </p> */}
        </div>
      <p>
 <button class="btn hvr-hover mt-3" onClick={filterCliked} type="submit">Filter</button>
 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



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
export default CatShop;