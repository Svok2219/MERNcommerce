import * as React from 'react';
import HeaderComp from "../Components/HeaderComponent";
import FooterComp from "../Components/FooterComponents";
import { Link } from 'react-router-dom';
import data from '../data';
import Swal from 'sweetalert2';
    {/* ALL JS FILES */}
    <><script src="js/jquery-3.2.1.min.js"></script><script src="js/popper.min.js"></script><script src="js/bootstrap.min.js"></script></>
    {/* ALL PLUGINS */}
    <><script src="js/jquery.superslides.min.js"></script><script src="js/bootstrap-select.js"></script><script src="js/inewsticker.js"></script><script src="js/bootsnav.js."></script><script src="js/images-loded.min.js"></script><script src="js/isotope.min.js"></script><script src="js/owl.carousel.min.js"></script><script src="js/baguetteBox.min.js"></script><script src="js/jquery-ui.js"></script><script src="js/jquery.nicescroll.min.js"></script><script src="js/form-validator.min.js"></script><script src="js/contact-form-script.js"></script><script src="js/custom.js"></script></>
function Shop (params){
    const { DataPwd, addToCart, addWishList } = params;
    const [query, setQuery] = React.useState("");
    const [Data, setData] = React.useState([]);
    const [bool, setbool] = React.useState(false);
    const queryfunc =(e)=>{
        e.preventDefault()
        setbool(false)
    const pwdArray =   DataPwd.filter((item)=>item.name.toLowerCase().includes(query));
    setData(pwdArray);
    }
    console.log(query,Data)
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
  fetch('http://mern-com.herokuapp.com/Category/getAllCategories')
  .then(res=>res.json())
  .then(result=>setCats(result.content))
}
fetchData();}
,[cats])
console.log(cats)
 const [noitem,setnoitem]=React.useState()
const findbyCategory=(i)=>{
  setbool(true)
console.log(i)
const catPwd=DataPwd.filter((x)=>x.Category.name==i)
setnoitem(catPwd)
}
console.log(noitem)
    return(
        <body>

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
                              {bool==false ?
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

          :  <div role="tabpanel" class="tab-pane fade show active" id="grid-view">
            <h1>length is {noitem.length}</h1>
            </div>}
                                <div role="tabpanel" class="tab-pane fade" id="list-view">
                             {/* {query && Data.length==0 &&
                            //   alert(`no result found for ${query}`)
                            <div
                             class="">
                            <div class="row d-flex justify-content-center align-items-center">
                                <h3>no result found for <span className="text-secondary font-weight-bold">{query}</span></h3>
                                <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
<div></div><div></div><div></div>
</div></div></div>
                                </div>
                                </div>
                            } */}

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
                            <div class="price-box-slider">
                                <input type="range" id="slider-range" class="form-range ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                  {/* <div class="ui-slider-range ui-widget-header ui-corner-all" style={{left: "25%", width: "50%"}}></div><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "25%"}}></span><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{left: "75%"}}></span> */}
                                  </input>
                                <p>
                                    <input type="text" id="amount" readonly="" style={{border:"0", color:"#fbb714", fontWeight:"bold"}}/>
                                    <button class="btn hvr-hover" type="submit">Filter</button>
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

</body>

    )
}
export default Shop;