import { useContext ,useState,useRef,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { UserContext } from '../App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../../src/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield,faPaperPlane,faPencilAlt,faCancel } from '@fortawesome/free-solid-svg-icons'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function HeaderComp(props) {
    const[Loggedin,setLoggedin,cartItems]=useContext(UserContext)
    console.log(data);
    const [show, setShow] = useState(false);

    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

        const [query, setQuery] = useState("");
        const [Data, setData] = useState([]);

        console.log(query)

        const [DataPwd,setDataPwd]=useState([])
        useEffect(()=>{async function fetchDataPwd() {
          fetch('http://localhost:300/Products')          
          .then(response => response.json())
          .then(data =>{ setDataPwd(data)});
        }
        fetchDataPwd();}
        ,[Data])
        const lefty = "<";const righty="/>"


        // const  offers = [{one:"20% off Entire Purchase Pro",key:1},{two:'kisi aur ke khyalo main gum'},{three:'kita koitam baal'},{four:"bechbar damei offer diram"},{five:"dhoro bondhu amar keho nai"}]
            
                 return (
        <div>
                {/* Start Main Top */}
    
    <header class="main-header ">
        {/* Start Navigation */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav ">
            <div class="container">
                {/* Start Header Navigation */}
                <div class="navbar-header d-flex d-md-block">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <Link  className="navbar-brand col-md-3 col-lg-2 text-center text-md-left me-0  mt-md-2" to="/" ><p className='text-dark ' style={{fontSize:"32px",fontWeight:"bolder"}}><span className='text-info'>{lefty}</span>Koiri Shop<span className='text-info'>{righty}</span></p></Link>
                </div>
                {/* End Header Navigation */}

                {/* Collect the nav links, forms, and other content for toggling */}
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                        <li class="nav-item"><Link class="nav-link" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/about">About Us</Link></li>
                        <li class="dropdown active">
                            <a  href='#' class="nav-link " data-toggle="dropdown">SHOP</a>
                            <ul class="dropdown-menu">
								<li><Link to="/shop">Sidebar Shop</Link></li>
								{/* <li><Link to="/shopDetail">Shop Detail</Link></li> */}
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/checkOut">Checkout</Link></li>
                                <li><Link to="/myAcount">My Account</Link></li>
                                <li><Link to="/wishList">Wishlist</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item"><Link class="nav-link" to="/gallery">Gallery</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/contact">Contact Us</Link></li>
                        <li class="search nav-item"><a href="#"><svg onClick={() => setLgShow(true)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a></li>	
{/* <Button variant="primary" >
        Launch demo modal
      </Button> */}
{/* <li class="search nav-item"><a href="#" >


<svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
   <span class="badge font-weight-bold text-dark">{cartItems.length}</span>
   </a></li>	 */}

                    </ul>
                </div>
                {/* /.navbar-collapse */}

                {/* Start Atribute Navigation */}
                <div class="attr-nav">
                    <ul>
          
                     <li class="nav-item">
      
                    	{/* <i class="fa fa-shopping-bag"></i> */}
                         
                           {/* <p>My Cart</p> */}
		
                    </li>
                    </ul>
                    
                </div>
                {/* End Atribute Navigation */}
            </div>
            {/* Start Side Menu */}
            <div class="side">
                <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                <li class="cart-box">
                    <ul class="cart-list">
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-01.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Delica omtantur </a></h6>
                            <p>1x - <span class="price">$80.00</span></p>
                        </li>
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-02.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Omnes ocurreret</a></h6>
                            <p>1x - <span class="price">$60.00</span></p>
                        </li>
                        <li>
                            <a href="#" class="photo"><img src="images/img-pro-03.jpg" class="cart-thumb" alt="" /></a>
                            <h6><a href="#">Agam facilisis</a></h6>
                            <p>1x - <span class="price">$40.00</span></p>
                        </li>
                        <li class="total">
                            <Link to="/cart" class="btn btn-default hvr-hover btn-cart">VIEW CART</Link>
                            <span class="float-right"><strong>Total</strong>: $180.00</span>
                        </li>
                    </ul>
                </li>
            </div>
            {/* End Side Menu */}
        </nav>
        {/* End Navigation */}
    </header>
    {/* End Main Top */}

    {/* Start Top Search */}
    <div class="top-search">
        <div class="container">
            <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                <input type="text" class="form-control" placeholder="Search"/>
                <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
            </div>
        </div>
    </div>
    {/* End Top Search */}
    <>
      {/* <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-lg d-flex">
          <div className="d-flex row">
 
<input type="text" 
className=""
defaultValue='Search for names..'
 onChange={(e) => setQuery(e.target.value.toLowerCase())}
 
id="myInput" 
// ref={myContainer} 
placeholder="Search for names.." title="Type in a name"/>


</div>
          </Modal.Title>
          <div className="text-right  btn ">
    <FontAwesomeIcon onClick={() => setLgShow(false)} icon={faCancel}/>
</div>
        </Modal.Header>
        <Modal.Body>
        
    <h2 class="mt-5">Search List  of___"{query || '....'}"</h2>
          <div className="table-responsive mt-2">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">DelPrice</th>
                
                  {/* <th scope="col">
                   Remove
                  </th>
                  <th scope="col">
                   Update
                  </th> */}
                </tr>
              </thead>
              <tbody>
{
query ?
            DataPwd.filter((item)=>item.name.toLowerCase().includes(query)).map((x)=>
                <tr key={x._id}>
                 <Link to={`/${x._id}`}> <td className="  " ><img src= {x.image} style={{height:'50px'}}/>  </td>
                 </Link>  <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td>{x.DelPrice}</td>
                  </tr> 
) 
: null
}
   
               
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>

        </div>
    )
}
