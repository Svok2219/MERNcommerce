import * as React from 'react';
import HeaderComp from "../Components/HeaderComponent"
import FooterComp from "../Components/FooterComponents"
import { UserContext } from '../App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { signOut } from 'firebase/auth';
import { auth } from '../Authentication/firebase-config';
    <><script src="js/jquery-3.2.1.min.js"></script><script src="js/popper.min.js"></script><script src="js/bootstrap.min.js"></script><script src="js/jquery.superslides.min.js"></script><script src="js/bootstrap-select.js"></script><script src="js/inewsticker.js"></script><script src="js/bootsnav.js."></script><script src="js/images-loded.min.js"></script><script src="js/isotope.min.js"></script><script src="js/owl.carousel.min.js"></script><script src="js/baguetteBox.min.js"></script><script src="js/form-validator.min.js"></script><script src="js/contact-form-script.js"></script><script src="js/custom.js"></script></>
    
function MyAcount(params) {
    const[Loggedin,setLoggedin,cartItems,BuyNow,cartBool] =React.useContext(UserContext);
    const[buyerData,setbuyerData]=React.useState({})
    // async function fetchData() {
    fetch(`http://localhost:300/User/getone/${Loggedin.email}`)
    .then((res)=>res.json())
    .then((result)=>{setbuyerData(result.user[0]) })

    const[buyerDataOrders,setbuyerDataOrders]=React.useState()
    React.useEffect(()=>{async function fetchDataPwd() {
   await fetch(`http://localhost:300/Orders/${Loggedin.email}`)
    .then((res)=>res.json())
    .then((result)=>{setbuyerDataOrders(result.content) ; 
        // console.log(result.content)
    })
}
fetchDataPwd();}
,[])
    // console.log(buyerDataOrders)

    const[OrderDescription,setOrderDescription]=React.useState()
    const orderDetailHandler =(y)=>{
        fetch(`http://localhost:300/Orders/Description/${y}`)
        .then((res)=>res.json())
        .then((result)=>{setOrderDescription(result.content) 
            //  console.log(result)
            })
    
    //     React.useEffect(()=>{async function fetchDataPwd() {
    //    await fetch(`http://localhost:300/Orders/Description/${y}`)
    //     .then((res)=>res.json())
    //     .then((result)=>{setOrderDescription(result.content) ; console.log(result)})
    // }
    // fetchDataPwd();}
    // ,[])
    }
    // console.log(OrderDescription)

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = async () => {
        await signOut(auth);
        localStorage.setItem('User', null)
        window.location.reload(false)
      };
 return (
<div>
    <HeaderComp/>
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>My Account</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">My Account</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container rounded bg-white mt-5 mb-5" style={{overflowX:"hidden"}}>
    <div class="row">
        <div class="col-md-2 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"/><span class="font-weight-bold">{Loggedin.displayName || buyerData.FullName}</span><span class="text-black-50">{Loggedin.email}</span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">FullName</label><input type="text" class="form-control" placeholder="first name" value={Loggedin.displayName || buyerData.FullName}/></div>
                    <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control" value={Loggedin.email} placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={buyerData.MobileNumber}/></div>
                    <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1" value={buyerData.Address}/></div>
                    <div class="col-md-12"><label class="labels">Birth Date</label><input type="text" class="form-control" placeholder="enter address line 2" value={buyerData.BirthDate}/></div>
             
                </div>
   
            </div>
        </div>
        {/* {console.log(buyerDataOrders)} */}
        <div class="col-md-5 overflower" >
        <h3><u>Your Orders History</u></h3>
            {!buyerDataOrders ? <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
<div></div><div></div><div></div>
</div></div></div> :
        <div class="  bg-light">
         
                          {
                          buyerDataOrders.length===0?<h3>No Order History</h3> :

                          buyerDataOrders.map((x)=>
                          <h4 onClick={handleShow} className='text-center'>OrderID: <h7  onClick={()=>orderDetailHandler(x._id)} class="text-dark orderDetailButton">{x._id}</h7></h4>
                        //   x.map(element => 
                           
                        //     <div class="media mb-2 border-bottom" key={element.Description._id}>
                        //     <div class="media-body"> <a >{element.Description.name}</a>
                        //         <div class="small text-muted">Price: ${element.Description.price} <span class="mx-2">|</span> Qty: {element.Description.qty} <span class="mx-2">|</span> Subtotal: ${element.Description.price*element.Description.qty}</div>
                        //     </div>
                        //     </div>
                        // )
                                   
                                    )}
                                   
           </div>}
        
           <Modal show={show} onHide={handleClose}>
           {!OrderDescription ? <div class="d-flex justify-content-center "> <div class="loadingio-spinner-pulse-v3puu1fwgxe "><div class="ldio-06fbmar2z23g">
<div></div><div></div><div></div>
</div></div></div> : <>
       
        <Modal.Header >
          <Modal.Title class="d-flex justify-content-center align-items-center"><p>Total Payable Amount : ${OrderDescription.Payment}</p>          <Button className="ml-3" variant="dark" >
           {OrderDescription.OrderStatus}
          </Button></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {OrderDescription.Description.map((element)=>
            <div class="media mb-2 border-bottom" key={element._id}>
                             <div class="media-body"> <a >{element.name}</a>
                                 <div class="small text-muted">Price: ${element.price} <span class="mx-2">|</span> Qty: {element.qty} <span class="mx-2">|</span> Subtotal: ${element.price*element.qty}</div>
                             </div>
                             </div>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>

        </>}
      </Modal>

        </div>
    </div>
</div>

<div className='d-flex justify-content-center align-items-center'>
<button type="button" class="btn btn-outline-secondary px-5 py-2 my-3" onClick={logout}>Log Out</button>
</div>
    <><div class="instagram-box">
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
    </div><FooterComp /><a href="#" id="back-to-top" title="Back to top">&uarr;</a></>

</div>

 )   
}
export default MyAcount;