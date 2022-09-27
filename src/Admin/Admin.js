import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCoffee,faPlus,faUserCog, faUserShield,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
const Admin = () => {
    /* globals Chart:false, feather:false */

    const [value,setValue]=useState({})
    const [file,setfile]=useState(null)
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
  const{FullName,phone,Position,University,Bagaan}=value
  const[error,seterror]=useState(false)
  
  const  submitHandler=(e)=>{
    e.preventDefault()
    // console.log(value)
     const formdata=new FormData()
     formdata.append('file',file)
     formdata.append('FullName',FullName)
     formdata.append('Phone',phone)
     formdata.append('Position',Position)
     formdata.append('University',University)
     formdata.append('Bagaan',Bagaan)
     
      fetch('https://utsa-official-server.herokuapp.com/addMember',{
        method:'POST',
      body:formdata
      })
      .then(res=>res.json())
      .then(data=>{setdata(data)
      setstate(!state)
    console.log(data)})
      .catch(err=>{console.log(err)
      setstate(!state)
    seterror(!error)})
  
    }
    console.log(data)
    const[state,setstate]=useState(false)
    const onstate=()=>{
  setstate(!state)
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
    


          <div className='d-flex justify-content-center align-items-center mt-5'>
<form class="well form-horizontal  col-md-5  ajustify-contnt-center text-center" onSubmit={submitHandler}  method="post"  id="contact_form" >
<fieldset>
<div className="">
  {!data.result && state && <div class="text-center text-light mt-5" >
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>}

{error && !data.result && <h4 style={{fontWeight:"25px"}} className="text-danger font-weight-bold text-center p-3 mt-2">An Error Ocurred,Retry</h4>}

{data.result && <h4 style={{fontWeight:"25px"}} className="text-dark font-weight-bold text-center p-3 mt-5">ডাটা পাঠান হয়েছে সাকসেসফুলি</h4>}
{}
{file ?<div class="file" >
<label for="file" class="fileLabel2">
    <b>{file.name}</b>
  </label>
    <input onChange={onchangeHandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:'none'}}/>
   
</div>
:<div class="file" >
<label for="file" class="fileLabel  ">
{/* <FontAwesomeIcon icon={faCamera}/> */}

  </label>
    <input onChange={onchangeHandler} class="fileInput w-100" id="file" type="file" name="Picture" style={{display:"none"}}/>
   
</div>
}
        <hr/>
    </div>

<div class="form-group">
  <div class=" inputGroupContainer">
  <label class=" control-label">Full Name</label>  
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler}  name="FullName" placeholder="Full Name" class="form-control"  type="text"/>
    </div>
  </div>
</div>


<div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label" >Mobile number</label> 
    <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler} name="phone" placeholder="Mobile Number" class="form-control"  type="text"/>
    </div>
  </div>
</div>

  <div class="form-group"> 
    <div class=" selectContainer">
    <label className="control-label">Position in the Team:</label>
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
    <select onBlur={blurHandler} name="Position" class="form-control ">
      <option value="">Select His/Her Position</option>
      <option>Department of Engineering</option>
      <option>Department of Agriculture</option>
      <option >Accounting Office</option>
      <option >Tresurer's Office</option>

    </select>
  </div>
</div>
</div>
  

<div class="form-group">
  <div class=" inputGroupContainer">
  <label class=" control-label">University</label>  
  <div class="input-group">
  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
  <input onBlur={blurHandler}  name="University" placeholder="বিশবিদ্যাল্যয়ের নাম" class="form-control"  type="text"/>
    </div>
  </div>
</div>


       <div class="form-group">
    <div class=" inputGroupContainer">
    <label class=" control-label">Address</label>  
    <div class="input-group">
        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
  <input onBlur={blurHandler} name="Bagaan" placeholder="বাগানের নাম" class="form-control"  type="text"/>
    </div>
    </div>
  </div>

<br/>
<div class="form-group">
    <button type="submit" class="btn btn-secondary" onClick={onstate} >SUBMIT <FontAwesomeIcon icon={faPaperPlane}/></button>
</div>
</fieldset>
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