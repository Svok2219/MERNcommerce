import { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "./firebase-config";
import { Link, useNavigate } from "react-router-dom";
import FooterComp from "../Components/FooterComponents";
import { UserContext } from "../App";
import { Outlet, Navigate } from "react-router-dom";
import HeaderComp from "../Components/HeaderComponent";
import Swal from "sweetalert2";

function Authentication(params) {
  const [openReg, setopenReg] = useState(false);
  const regOpen = () => {
    setopenReg(true);
    // setopenLogin(false)
  };
  const loginOpen = () => {
    setopenReg(false);
    // setopenLogin(true)
  };

  const [Loggedin, setLoggedin, cartItems] = useContext(UserContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    realName: "",
    userName: "",
    Email: "",
    password: "",
    Address: ""
  });

  let name, value;
  const changeFunc = event => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const navigate = useNavigate();

  const postData = async e => {
    e.preventDefault();
    const { realName, Email, password, Address, userName, BirthDate } = user;
    console.log(realName, Email, password, Address, userName, BirthDate);

    try {
      const user = await createUserWithEmailAndPassword(auth, Email, password);

      console.log(user);
      localStorage.setItem("User", `${user.user.email}`);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have successfully Loged In",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      alert(error.message);
    }

    const res = await fetch("https://koiricom-server.onrender.com/User", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        FullName: realName,
        MobileNumber: userName,
        Email: Email,
        BirthDate: BirthDate,
        Address: Address
      })
    });

    if (res) {
      console.log(res);
      setUser({
        realName: "",
        userName: "",
        Address: "",
        Email: "",
        password: ""
      });
      // navigate(-1);
    }
  };
  const varrify = localStorage.getItem("User") === "shuvo@koiri.com";
  console.log(varrify);
  const login = async e => {
    const { realName, Email, password, Address, userName } = user;
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, Email, password);
      // setLoggedin(user.user.email);
      // navigate(-1);
      // alert('Congratulations! You are logged in...Please refresh or Go back to the preveious page ')
      localStorage.setItem("User", `${user.user.email}`);
      console.log(user.user.email);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You have successfully Loged In",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.setItem("User", null);
  };

  if (!Loggedin || Loggedin === false) {
    return (
      <>
        <HeaderComp />
        <div className="my-5 mx-5">
          <ul
            class="nav nav-pills nav-justified mb-3 d-md-flex"
            id="ex1"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                onClick={() => loginOpen()}
                type="button"
                class="btn btn-secondary w-75"
              >
                Login
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                onClick={() => regOpen()}
                type="button"
                class="btn btn-outline-secondary w-75"
              >
                Register
              </button>
            </li>
          </ul>

          <div class="tab-content">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="tab-login"
            >
              <form method="POST" class="text-center  ">
                {/* <div class="text-center mb-3" >
      <p>Sign in with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div> */}

                {/* <p class="text-center">or:</p> */}
                {!openReg ? (
                  <>
                    <div class="form-outline mb-4">
                      <input
                        onChange={changeFunc}
                        name="Email"
                        type="email"
                        id="loginName"
                        class="form-control"
                      />
                      {/* <label class="form-label" for="loginName">Email or username</label> */}
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        onChange={changeFunc}
                        name="password"
                        type="password"
                        id="loginPassword"
                        class="form-control"
                      />
                      {/* <label class="form-label" for="loginPassword">Password</label> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div class="form-outline mb-4">
                      <input
                        defaultValue={user.realName}
                        onChange={changeFunc}
                        name="realName"
                        type="text"
                        id="registerName"
                        class="form-control"
                      />
                      <label class="form-label" for="registerName">
                        Name
                      </label>
                    </div>

                    {/* Username input */}
                    <div class="form-outline mb-4">
                      <input
                        defaultValue={user.userName}
                        onChange={changeFunc}
                        name="userName"
                        type="number"
                        id="registerUsername"
                        class="form-control"
                      />
                      <label class="form-label" for="registerUsername">
                        Mobile Number
                      </label>
                    </div>

                    {/* Email input */}
                    <div class="form-outline mb-4">
                      <input
                        defaultValue={user.Email}
                        onChange={changeFunc}
                        type="email"
                        name="Email"
                        id="registerEmail"
                        class="form-control"
                      />
                      <label class="form-label" for="registerEmail">
                        Email
                      </label>
                    </div>

                    {/* Password input */}
                    <div class="form-outline mb-4">
                      <input
                        defaultValue={user.password}
                        onChange={changeFunc}
                        name="password"
                        type="password"
                        id="registerPassword"
                        class="form-control"
                      />
                      <label class="form-label" for="registerPassword">
                        Password
                      </label>
                    </div>

                    {/* Repeat Password input */}
                    <div class="form-outline mb-4 text-center justify-content-center">
                      <input
                        defaultValue={user.Address}
                        onChange={changeFunc}
                        name="Address"
                        type="text"
                        id="registerRepeatPassword"
                        class="form-control"
                      />
                      <label class="form-label" for="registerRepeatPassword">
                        Address
                      </label>
                    </div>

                    {/* <div class="row"> */}
                    {/* <div class="form-outline mb-4 col-md-6 d-flex justify-content-center"> */}
                    <div class="form-outline w-full mb-4">
                      <input
                        defaultValue={user.BirthDate}
                        onChange={changeFunc}
                        type="date"
                        id="birthday"
                        name="BirthDate"
                      />
                      <br />
                      <label class="form-label" for="BirthDate">
                        Birthday
                      </label>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </>
                )}

                {/* 2 column grid layout */}
                <div class="row mb-4">
                  <div class="col-md-6 d-flex justify-content-center">
                    <div class="form-check mb-3 mb-md-0 ">
                      {/* <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked /> */}
                      {/* <label class="form-check-label" for="loginCheck"> Remember me </label> */}
                    </div>
                  </div>

                  <div class="col-md-6 d-flex justify-content-center">
                    {/* Simple link */}
                    {/* <a href="#!">Forgot password?</a> */}
                  </div>
                </div>

                {/* Submit button */}
                {openReg ? (
                  <button
                    onClick={postData}
                    class="btn btn-secondary btn-block mb-4"
                  >
                    Sign up
                  </button>
                ) : (
                  <button
                    onClick={login}
                    class="btn btn-secondary btn-block mb-4"
                  >
                    Sign in
                  </button>
                )}
                {/* Register buttons */}
                <div class="text-center">
                  {/* <p>Not a member? <a href="#!" onClick={logout}>Register</a></p> */}
                </div>
              </form>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="tab-register"
            >
              <form>
                <div class="text-center mb-3">
                  <p>Sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>

                <p class="text-center">or:</p>

                {/* Name input */}
                {!loginOpen && regOpen}
                <div>
                  {/* Checkbox */}
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="registerCheck"
                      checked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label class="form-check-label" for="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>
                </div>
                {/* Submit button */}
                {/* <button type="" class="btn btn-secondary btn-block mb-3">Sign in</button> */}
              </form>
            </div>
          </div>
          {/* Pills content */}
        </div>

        <FooterComp />
      </>
    );
  } else {
    navigate(-1);
  }
  // if () {
  //   <FooterComp />;
  // }
}

export default Authentication;
