import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield,faPaperPlane,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
// import {FormData} from "formdata-node"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Authentication/firebase-config";
const Admin = () => {
const [clicked,setClicked]=useState(false)
// const []
  
const [Data,setData]=useState([])
useEffect(()=>{async function fetchData() {
  fetch('https://mern-com.herokuapp.com/User')
  .then(res=>res.json())
  .then(result=>setData(result.content))
}
fetchData();}
,[Data])

const [cats,setCats]=useState([])
useEffect(()=>{async function fetchData() {
  fetch('https://mern-com.herokuapp.com/Category/getAllCategories')
  .then(res=>res.json())
  .then(result=>setCats(result.content))
}
fetchData();}
,[cats])
console.log(cats)

const removeUser= async (item)=>{
  await fetch(`https://mern-com.herokuapp.com/User/${item}`, {
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json'
    }
})
.then((res)=>res.json())
.then((result)=>{console.log(result.content);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'this DATA has been DELETED',
    showConfirmButton: false,
    timer: 1500
  })
})
}
    
const [DataOrder,setDataOrder]=useState([])
    useEffect(()=>{async function fetchDataPwd() {
      fetch('https://mern-com.herokuapp.com/Orders')          
      .then(response => response.json())
      .then(result =>{ setDataOrder(result.content)});
    }
    fetchDataPwd();}
    ,[DataOrder])
    console.log(DataOrder)

    


const [DataPwd,setDataPwd]=useState([])
  useEffect(()=>{async function fetchDataPwd() {
    fetch('https://mern-com.herokuapp.com/Products')          
    .then(response => response.json())
    .then(data =>{ setDataPwd(data)});
  }
  fetchDataPwd();}
  ,[Data])


  const removeProduct= async (item)=>{ 
    await fetch(`https://mern-com.herokuapp.com/Products/${item}`, {
      method: 'DELETE',
      headers: {
          'Content-type': 'application/json'
      }
  })
  .then((res)=>res.json())
  .then((result)=>{console.log(result.content); Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'this DATA has been DELETED',
    showConfirmButton: false,
    timer: 1500
  })})
  }


  const [pwd,setpwd]=useState()
  const [Pwd,setPwd]=useState()
  const [bool,setBool]=useState(false)
  const [value,setValue]=useState({})

  const UpdateProductModal= (item)=>{
    console.log(item) ;
  setPwd(item)
    setBool(true);
  setpwd(item._id)
  
  }
// console.log(Pwd,bool)
const UpdateProduct= async  (e)=>{
  e.preventDefault();
  setClicked(true)
    const{Name,price,InitialStock,DelPrice,Category,Description,image,sold,CategoryName,GalleryImgUrl,GalleryImgName,imagesZero,imagesOne,imagesTwo}=value
    const images = [{imagesOne:imagesOne,imagesZero:imagesZero,imagesTwo:imagesTwo}]
    console.log(imagesOne,imagesZero,imagesTwo)
    console.log(images)
    //  console.log()
      await fetch(`https://mern-com.herokuapp.com/Products/${Pwd._id}`, {
      method: 'PATCH',
      headers: {
          'Content-type': 'application/json'
      },
      body:JSON.stringify({
        name:Name,price:price,InitialStock:InitialStock,DelPrice:DelPrice,Category:Category,Description:Description,image:image,sold:sold,images:images
      })
      // ,images:[{imagesOne:imagesOne,imagesZero:imagesZero,imagesTwo:imagesZero}]
  })
  .then((res)=>res.json())
  .then((result)=>{console.log(result);setClicked(false); Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your DATA has been PATched',
    showConfirmButton: false,
    timer: 1500
  })})
  
  
  }


  
    var FormData = require('form-data');
  
    const [file,setfile]=useState({
      
    })

   const blurHandler=(e)=>{
  const VALUE={...value}
  VALUE[e.target.name]=e.target.value
  setValue(VALUE)
  
    }
    const onchangeHandler=(e)=>{
      const file=e.target.files[0]
      console.log(file)
      setfile(file)
  }
  const{Name,price,InitialStock,DelPrice,Category,Description,image,CategoryName,GalleryImgUrl,GalleryImgName,images}=value

  const[error,seterror]=useState(false)
  console.log(Name,price,InitialStock,DelPrice,Category,Description,image,CategoryName,images)

  
const submitHandler= async (e ) =>{
  e.preventDefault();
  setClicked(true)
  // const{Name,price,InitialStock,DelPrice,Category,Description,image,images}=value;
  const{Name,price,InitialStock,DelPrice,Category,Description,image,sold,CategoryName,GalleryImgUrl,GalleryImgName,imagesZero,imagesOne,imagesTwo}=value
  const images = [imagesOne,imagesZero,imagesTwo]
  console.log(images)
   const res = await fetch('https://mern-com.herokuapp.com/Products',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:Name,price:price,InitialStock:InitialStock,DelPrice:DelPrice,Category:Category,Description:Description,image:image,sold:0,images:images
    })

  })
   
  if (res) {
//  setValue({})  
 setClicked(false)
//  console.log(res) 
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your DATA has been POSTED',
  showConfirmButton: false,
  timer: 1500
})
  }

}

const categroySubmit= async (e)=>{
  e.preventDefault();
  // const{Name,price,InitialStock,DelPrice,Category,Description,image,CategoryName,GalleryImgUrl,GalleryImgName}=value
  setClicked(true);  
   const res = await fetch('https://mern-com.herokuapp.com/Category',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
     Category:CategoryName
    })

  })
   
  if (res) {
//  setValue({})  
 setClicked(false)
 Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your DATA has been POSTED',
  showConfirmButton: false,
  timer: 1500
})
//  console.log(res11) 
  }
}


const GallerySubmit= async (e)=>{
  e.preventDefault();
  setClicked(true);
  const{Category,imgnamegallary,imageurlgallary}=value
  // console.log(Category,imgnamegallary,imageurlgallary)
   const res = await fetch('https://mern-com.herokuapp.com/Gallery',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
     Gimage:imageurlgallary,Gname:imgnamegallary,Category:Category
    })

  })
   
  if (res) {
//  setValue({})  
 setClicked(false)
 Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your DATA has been POSTED',
  showConfirmButton: false,
  timer: 1500
})

//  console.log(res) 
  }
}


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (x) => {setShow(true); setPwd(x);    setBool(true);
};


const logout = async () => {
  await signOut(auth);
  localStorage.setItem('User', null)
  window.location.reload(false)
};


const handleUpdateOrderStatus = async (Pwd)=> {
  console.log(Pwd._id)
  await fetch(`https://mern-com.herokuapp.com/Orders/${Pwd._id}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
      OrderStatus:"Approved"
    })
    // ,images:[{imagesOne:imagesOne,imagesZero:imagesZero,imagesTwo:imagesZero}]
})
.then((res)=>res.json())
.then((result)=>{console.log(result);setClicked(false); Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your DATA has been Patched',
  showConfirmButton: false,
  timer: 1500
})})
.catch((err)=>alert(err))
}
   
const handleCancelOrderStatus = async (Pwd)=> {
  console.log(Pwd._id)
  await fetch(`https://mern-com.herokuapp.com/Orders/${Pwd._id}`, {
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body:JSON.stringify({
      OrderStatus:"Canceled"
    })
    // ,images:[{imagesOne:imagesOne,imagesZero:imagesZero,imagesTwo:imagesZero}]
})
.then((res)=>res.json())
.then((result)=>{console.log(result);setClicked(false); Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your DATA has been Patched',
  showConfirmButton: false,
  timer: 1500
})})
}
return (
        <div>
           <>
    
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap px-5 py-3 shadow">
      <Link  className="navbar-brand col-md-3 col-lg-2 text-center text-md-left me-0 px-3" to="/">Koiri Shop</Link>
      <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#" onClick={logout}>Sign out</a>
        </div>
      </div>
    </header>
    
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky pt-3">
            <ul className="nav flex-column mt-0 mt-md-5">
              <li className="nav-item">
                <a className="nav-linkD active text-muted" aria-current="page" href="#">
                  <span data-feather="home">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home mr-1" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  </span>
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#Orders">
                  <span data-feather="file"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file mr-1" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></span>
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#Products">
                  <span data-feather="shopping-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart mr-1" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#Customers">
                  <span data-feather="users"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-1" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#Category">
                  <span data-feather="bar-chart-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 mr-1" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD " href="#Gallery">
                  <span data-feather="layers text-center align-item-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers mr-1" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>
                  Gallery
                </a>
              </li>
            </ul>
    
           
          </div>
        </nav>
    
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            {/* <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary ml-3 dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div> */}
          </div>
    
          {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
          <h1 className="h2">Post a Product</h1>
          <div className='my-2 mb-5' id="Products">
           
            <form onSubmit={submitHandler}  method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Product Name</label>
      <input onBlur={blurHandler} defaultvalue={Name} type="text" class="form-control" id="" name='Name' placeholder="Product Name" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product <del>Price</del></label>
      <input onBlur={blurHandler} type="number" class="form-control" id="" name='DelPrice' placeholder="del Price" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product Price</label>
      <input onBlur={blurHandler} type="number" class="form-control" id="inputPassword4" name='price' placeholder="Price" required/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Product Description</label>
    <textarea onBlur={blurHandler} class="form-control" id="exampleFormControlTextarea1" rows="3" name='Description' style={{height:"100%"}} required></textarea>
      </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <select onBlur={blurHandler} name='Category' id="inputState" class="form-control" required>
       {cats.map((c)=>
        <option value={c._id}>{c.name}</option>
        )}
      </select>  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Initial Stock</label>
      <input onBlur={blurHandler} name='InitialStock' type="number" class="form-control" id="inputCity" placeholder='How many pieces do I have of these ?' required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Product Image</label>
      <input  onBlur={blurHandler} name='image' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Url ' required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[0]</label>
      <input onBlur={blurHandler} name='imagesZero' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) '  required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[1]</label>
      <input onBlur={blurHandler} name='imagesOne' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) '  required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[2]</label>
      <input onBlur={blurHandler} name='imagesTwo' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) '  required/>
    </div>
  </div>

  <button type="submit" class="btn btn-secondary text-center my-3">Post the Product 
  {clicked ? 
        <b><i class="fas fa-spinner fa-pulse text-info font-weight-bolder"></i></b>
:
  <FontAwesomeIcon icon={faPaperPlane}/>
    }  </button>
</form>


<h2 class="mt-5">List of Products (Update & Delete)</h2>
          <div className="table-responsive mt-2">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">DelPrice</th>
                  <th scope="col">InitialStock</th>
                  <th scope="col">
                   Remove
                  </th>
                  <th scope="col">
                   Update
                  </th>
                </tr>
              </thead>
              <tbody>
              {DataPwd.map((x)=>
                <tr key={x._id}>
                  <td>{x.name}</td>
                  <td>{x.price}</td>
                  <td>{x.DelPrice}</td>
                  {/* <td>{x.Description}</td> */}
                  {/* <td>{x.Category}</td> */}
                  <td>{x.InitialStock}</td>
              
                  <td>
                  <i onClick={() => removeProduct(x._id)} class="fas fa-minus "></i>
                  </td>
                  <td data-toggle="modal" data-target="#exampleModal">
                    <FontAwesomeIcon icon={faPencilAlt} onClick={()=>handleShow(x)}/>
                  </td>
                  </tr>
)}
               
              </tbody>
            </table>
          </div>
        </div>

        <h2 class="mt-5" id="Category">Post A Category</h2>
     <div className=' d-block d-md-flex justify-content-center align-items-center' >
        <form class="form-inline my-4 text-center" onSubmit={categroySubmit}>
        <div class="form-group mx-sm-3 mb-2">
          <label for="CategoryPost" class="sr-only">Category</label>
          <input onBlur={blurHandler} type="text" class="form-control" id="" name='CategoryName' placeholder="Post a Category" required/>
        </div>
        <button type="submit" class="btn btn-secondary mb-2">Post a Category     
        {clicked && 
        <b><i class="fas fa-spinner fa-pulse text-info font-weight-bolder"></i></b>
}
</button>
        </form>
        </div>

        <h2 class="mt-5" id="Gallery">Gallery Image</h2>
        <form onSubmit={GallerySubmit} >
  <div class="form-group">
    <label for="exampleInputEmail1">Image Url</label>
    <input  onBlur={blurHandler} type="text" name="imageurlgallary" class="form-control"  placeholder="Enter image url" required/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Image Name</label>
    <input  onBlur={blurHandler} type="text" name="imgnamegallary" class="form-control"  placeholder="Enter image name" required/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <select onBlur={blurHandler} name='Category' id="inputState" class="form-control" required>
    {cats.map((c)=>
        <option value={c._id}>{c.name}</option>
        )}
      </select>  </div>
 
  <button type="submit" class="btn btn-secondary px-3 py-2">Post GalleryImg        {clicked && 
        <b><i class="fas fa-spinner fa-pulse text-info font-weight-bolder"></i></b>
}</button>
</form>

          <h2 class="mt-5">List of Users</h2>
          <div className="table-responsive mt-2" id="Customers">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">FullName</th>
                  <th scope="col">MobileNumber</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">
                  {/* <i onClick={() => removeFromCart(item)} class="fas fa-minus "></i> */}
                   Remove
                  </th>
                </tr>
              </thead>
              <tbody>
  
           {Data.map((x)=>
                <tr key={x._id}>
                  <td>{x.FullName}</td>
                  <td>{x.MobileNumber}</td>
                  <td>{x.Address}</td>
                  <td>{x.Email}</td>
                  <td>
                    <i onClick={()=>removeUser(x._id)} class="fas fa-minus "></i>
                  </td>
                  </tr>
)}
               
              </tbody>
            </table>
          </div>


          <>
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}
{bool? 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title><h4>Update the Product 
            {/* <br/> <b>{Pwd.name}</b> */}
            </h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <section >
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Update the Product </label>
      {console.log(Pwd.images[0])}
      <input onBlur={blurHandler}  type="text" class="form-control" id="" name='Name'  defaultValue={Pwd.name} required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product <del>Price</del></label>
      <input onBlur={blurHandler}  type="number" class="form-control" id="" name='DelPrice' defaultValue={Pwd.DelPrice} required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product Price</label>
      <input onBlur={blurHandler}  type="number" class="form-control" id="inputPassword4" name='price' placeholder="Price" defaultValue={Pwd.price} required/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Product Description</label>
    <textarea onBlur={blurHandler}  class="form-control" id="exampleFormControlTextarea1" rows="3" name='Description' style={{height:"100%"}} defaultValue={Pwd.Description} required></textarea>
      </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <select onBlur={blurHandler}  name='Category' id="inputState" class="form-control" required>
    {cats.map((c)=>
        <option value={c._id}>{c.name}</option>
        )}
        <option value={Pwd.Category._id} selected>{Pwd.Category.name}</option>
      </select>  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Initial Stock</label>
      <input onBlur={blurHandler}  name='InitialStock' type="number" class="form-control" id="inputCity" placeholder='How many pieces do I have of these ?' defaultValue={Pwd.InitialStock} required/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Product Image</label>
      <input  onBlur={blurHandler}  name='image' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Url ' defaultValue={Pwd.image} required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[0]</label>
      <input onBlur={blurHandler} name='imagesZero' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) ' defaultValue={Pwd.images[0]} required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[1]</label>
      <input onBlur={blurHandler} name='imagesOne' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) ' defaultValue={Pwd.images[1]} required/>
    </div>
    <div class="form-group col-md-7">
      <label for="inputState">Product Images array[2]</label>
      <input onBlur={blurHandler} name='imagesTwo' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) ' defaultValue={Pwd.images[2]}  required/>
    </div>
  </div>

  <a  onClick={UpdateProduct}  class="btn btn-secondary text-center my-3 px2 py-3 font-weight-bold">Update the Product 
  {clicked ? 
        <b><i class="fas fa-spinner fa-pulse text-info font-weight-bolder"></i></b>
:
  <FontAwesomeIcon icon={faPaperPlane}/>
  }</a></section>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
: null}
</>

{/* {bool?  
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      <div className='my-2 mb-5'>
            <section >
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Update the Product{Pwd.name}</label>
      {console.log(pwd)}
      <input onBlur={blurHandler}  type="text" class="form-control" id="" name='name'/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product <del>Price</del></label>
      <input onBlur={blurHandler}  type="number" class="form-control" id="" name='DelPrice' />
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product Price</label>
      <input onBlur={blurHandler}  type="number" class="form-control" id="inputPassword4" name='price' placeholder="Price"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Product Description</label>
    <textarea onBlur={blurHandler}  class="form-control" id="exampleFormControlTextarea1" rows="3" name='Description' style={{height:"100%"}}></textarea>
      </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <select onBlur={blurHandler}  name='Category' id="inputState" class="form-control">
        <option >63346d6dbe4f2e8bbb404514</option>
        <option selected>....</option>
      </select>  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Initial Stock</label>
      <input onBlur={blurHandler}  name='InitialStock' type="number" class="form-control" id="inputCity" placeholder='How many pieces do I have of these ?'/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Product Image</label>
      <input  onBlur={blurHandler}  name='image' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Url '/>
    </div>
 
  </div>

  <a  onClick={UpdateProduct}  class="btn btn-secondary text-center my-3 px2 py-3 font-weight-bold">Update the Product <FontAwesomeIcon icon={faPaperPlane}/></a>
</section>
        </div>

      </div>
  
    </div>
  </div>
</div>
:null} */}
<h2 class="mt-5" id='Orders'>List of Orders (Approve & Cancel)</h2>
          <div className="table-responsive mt-2">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">DelPrice</th>
                  <th scope="col">InitialStock</th>
                  <th scope="col">
                   Cancel
                  </th>
                  <th scope="col">
                   Approve
                  </th>
                </tr>
              </thead>
              <tbody>
              {DataOrder.map((x)=>
                <tr key={x._id}>
                  <td>{x.CustomerName}</td>
                  <td>{x.Payment}</td>
                  <td>{x._id}</td>
                  <td>{x.OrderStatus}</td>
                  {/* <td>{x.Description}</td> */}
                  {/* <td>{x.Category}</td> */}
                
              
                  <td>
                  <i
                  //  onClick={() => removeProduct(x._id)}
                   class="fas fa-minus " onClick={()=>handleCancelOrderStatus(x)}></i>
                  </td>
                  <td class=" cursor-pointer">
                    <FontAwesomeIcon icon={faPencilAlt} onClick={()=>handleUpdateOrderStatus(x)} 
                    // onClick={()=>handleShow(x)}
                    />
                  </td>
                  </tr>
)}
               
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
    
    
      </>  
        </div>
    );
};

export default Admin;