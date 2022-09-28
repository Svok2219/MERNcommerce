import React from 'react';

const Products = () => {
    return (
        <div>
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
        </div>
    );
};
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

export default Products;