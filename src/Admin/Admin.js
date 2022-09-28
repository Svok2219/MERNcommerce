import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
// import {FormData} from "formdata-node"

const Admin = () => {
    /* globals Chart:false, feather:false */
    var FormData = require('form-data');
    const [value,setValue]=useState({})
    const [file,setfile]=useState({
      
    })
    const [data,setdata]=useState({})
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
  const{Name,price,InitialStock,DelPrice,Category,Description,image}=value
  const[error,seterror]=useState(false)
  console.log(Name,price,InitialStock,DelPrice,Category,Description,image)
  var form = new FormData();
       form.append('name','some')
   form.append('price','data')
  //  form.append('InitialStock',InitialStock)
  //  form.append('DelPrice',DelPrice)
  //  form.append('Category',Category)
  //  form.append('Description',Description)
  //  form.append('image',image)
   console.log(form)
  // const []
// formData.append('file', file);
// var options = { content: formData };
// console.log(options)
  
const submitHandler= async (e ) =>{
  e.preventDefault();
  const{Name,price,InitialStock,DelPrice,Category,Description,image}=value
  // console.log(value)
  // console.log(JSON.stringify({
  //   name:Name,price:price,InitialStock:InitialStock,DelPrice:DelPrice,Category:Category,Description:Description,image:image
  // }))
   const res = await fetch('http://localhost:300/Products',{
    method:'POST',
    headers:{
    'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:Name,price:price,InitialStock:InitialStock,DelPrice:DelPrice,Category:Category,Description:Description,image:image
    })

  })
   
  if (res) {
 setValue({})  
 console.log(res) 
  }

}


    
    return (
        <div>
           <>
    
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap px-5 py-3 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 text-center text-md-left me-0 px-3" href="#">Koiri Shop</a>
      <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <a className="nav-link px-3" href="#">Sign out</a>
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
                <a className="nav-linkD" href="#">
                  <span data-feather="file"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file mr-1" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg></span>
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="shopping-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart mr-1" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="users"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mr-1" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></span>
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="bar-chart-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 mr-1" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span>
                  Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD " href="#">
                  <span data-feather="layers text-center align-item-center justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers mr-1" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>
                  Integrations
                </a>
              </li>
            </ul>
    
            {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a className="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="file-text"></span>
                  Current month
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="file-text"></span>
                  Last quarter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="file-text"></span>
                  Social engagement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-linkD" href="#">
                  <span data-feather="file-text"></span>
                  Year-end sale
                </a>
              </li>
            </ul> */}
          </div>
        </nav>
    
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="btn-group me-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" className="btn btn-sm btn-outline-secondary ml-3 dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
    
          {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}
    
          <div className='my-2 mb-5'>
            <form onSubmit={submitHandler}  method="post">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Product Name</label>
      <input onBlur={blurHandler} value={Name} type="text" class="form-control" id="" name='Name' placeholder="Product Name"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product <del>Price</del></label>
      <input onBlur={blurHandler} type="number" class="form-control" id="" name='DelPrice' placeholder="del Price"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4">Product Price</label>
      <input onBlur={blurHandler} type="number" class="form-control" id="inputPassword4" name='price' placeholder="Price"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Product Description</label>
    <textarea onBlur={blurHandler} class="form-control" id="exampleFormControlTextarea1" rows="3" name='Description' style={{height:"100%"}}></textarea>
      </div>
  <div class="form-group">
    <label for="inputAddress2">Category</label>
    <select onBlur={blurHandler} name='Category' id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Initial Stock</label>
      <input onBlur={blurHandler} name='InitialStock' type="number" class="form-control" id="inputCity" placeholder='How many pieces do I have of these ?'/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Product Image</label>
      <input  onBlur={blurHandler} name='image' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Url '/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Product Images array</label>
      <input onBlur={blurHandler} name='images' type="text" class="form-control" id="inputCity" placeholder='Enter your pdoduct image Urls (three image is needed) '/>
    </div>
  </div>

  <button type="submit" class="btn btn-secondary text-center my-3">Post the Product <FontAwesomeIcon icon={faPaperPlane}/></button>
</form>
        </div>

         
          <h2>Section title</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                  <th scope="col">Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>text</td>
                  <td>random</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>placeholder</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>placeholder</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>irrelevant</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>text</td>
                  <td>placeholder</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>random</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>text</td>
                </tr>
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