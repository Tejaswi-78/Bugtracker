
import React from "react"
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar,Container,Nav,Dropdown,Form,Col  } from 'react-bootstrap';
import  { useNavigate } from 'react-router-dom'
import {registerAdmin} from '../Action/adminAction'
import {registerUser} from '../Action/userAction'
import {getLoginByid} from '../Action/loginAction'
import { getAdminByid } from "../Action/adminAction";
import { getUserByid } from "../Action/userAction";
import { getEmployeeByid } from "../Action/employeeAction";
import {getAllProject} from "../Action/projectAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const [fnameInput, setfNameInput] = useState("");
  const [lnameInput, setlNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [pincodeInput, setPincodeInput] = useState("");
  const [contactInput, setContactInput] = useState("");

  const navigate = useNavigate();
  const [isAdmin,setIsAdmin]= useState(false)

  const userLogin = useSelector((state)=>state.getLoginByid.getLoginIdResp)
  // const adminLogin = useSelector((state)=>state.getAdminByEmail.getAdminEmailResp)

  let [authMode, setAuthMode] = useState("signin")

  const handleSignIn=async()=>{
    if(emailInput && passwordInput)
      dispatch(getLoginByid(emailInput));       
  }

  const handleSignUp = async()=>{
    const rand = 1 + (Math.random() * (1000000 - 1));
    if(isAdmin){
      const adminObj={
        id: rand,
        name: fnameInput,
        contact: contactInput,
        login: {
          email: emailInput,
          password: passwordInput,
          role: "ADMIN",
          id: rand
        }
      }
      dispatch(registerAdmin(adminObj))
    }
    else{
      const userObj= {
        id: rand,
        firstName: fnameInput,
        addressEntity: {
          city: cityInput,
          state: stateInput,
          pincode: pincodeInput
        },
        login: {
          email: emailInput,
          password: passwordInput,
          role: "USER",
          id: rand
        },
      lastName: lnameInput
      }
      dispatch(registerUser(userObj))
    }
    setAuthMode("signin")
  }

  useEffect(()=>{
    if(userLogin.status==200 && userLogin.data && userLogin.data.email==emailInput && userLogin.data.password==passwordInput){
        if(userLogin.data.role=="USER"){
            dispatch(getUserByid(userLogin.data.id))
            dispatch(getAllProject())
            navigate('/user');
        }
        else if(userLogin.data.role=="ADMIN"){
            dispatch(getAdminByid(userLogin.data.id))
            navigate('/admin');
        }else if(userLogin.data.role=="EMPLOYEE"){
            dispatch(getEmployeeByid(userLogin.data.id))
            navigate('/employee');
        }
    }
    else if(userLogin){
        alert("User Login failed ")
    }
  },[userLogin])

  // useEffect(()=>{
  //   if(adminLogin.status==200 && adminLogin.data && adminLogin.data[0].email==emailInput && adminLogin.data[0].password==passwordInput){
  //       dispatch(getAdminByid(adminLogin.data[0].id))
  //       navigate('/admin');
  //   }
  //   else if(adminLogin){
  //       alert("admin Login failed ")
  //   }
  // },[adminLogin])


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Bug Tracker<a href="/"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
  
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <br/>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={emailInput}
                onChange={(e)=>setEmailInput(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={passwordInput}
                onChange={(e)=>setPasswordInput(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" onClick={handleSignIn} className="btn btn-primary">
                Submit
              </button>
            </div>
            
          </div>
        </form>
      </div>
      </>
    )
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Bug Tracker<a href="/"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
      <div style={{height: '100vh'}}>
          <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                  Already registered?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                  </span>
                  <br/>
                  <Form.Check 
                  type="radio"
                  id="user"
                  label="User"
                  name="role"
                  inline={true}
                  onChange={()=>{setIsAdmin(false)}}
                  
                  />
                  <Form.Check 
                  type="radio"
                  id="admin"
                  label="Admin"
                  name="role"
                  inline={true}
                  onChange={()=>{setIsAdmin(true)}}
                  />
              </div>
              {!isAdmin?
              <div>
                  <div className="form-group mt-3">
                  <label>First Name</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="First Name"
                      value={fnameInput}
                      onChange={(e)=>setfNameInput(e.target.value)}
                  />
                  </div>
                  <div className="form-group mt-3">
                  <label>Last Name</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Last Name"
                      value={lnameInput}
                      onChange={(e)=>setlNameInput(e.target.value)}
                  />
                  </div>
                  
                  <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email Address"
                      value={emailInput}
                      onChange={(e)=>setEmailInput(e.target.value)}
                  />
                  </div>
                  <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      value={passwordInput}
                      onChange={(e)=>setPasswordInput(e.target.value)}
                  />
                  <div className="form-group mt-3">
                  <label>City</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="City"
                      value={cityInput}
                      onChange={(e)=>setCityInput(e.target.value)}
                  />
                  </div>
                  </div>
                  <div className="form-group mt-3">
                  <label>state</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="State"
                      value={stateInput}
                      onChange={(e)=>setStateInput(e.target.value)}
                  />
                  </div>
                  
                  <div className="form-group mt-3">
                  <label>pincode</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Pincode"
                      value={pincodeInput}
                      onChange={(e)=>setPincodeInput(e.target.value)}
                  />
                  </div>
                  
              </div>
              :
              <div>
              
              <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  value={emailInput}
                  onChange={(e)=>setEmailInput(e.target.value)}
                  />
              </div>
              <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={(e)=>setPasswordInput(e.target.value)}
                  />
              </div>

              <div className="form-group mt-3">
                  <label>Admin Name</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Name"
                      value={fnameInput}
                      onChange={(e)=>setfNameInput(e.target.value)}
                  />
                  </div>
                  <div className="form-group mt-3">
                  <label>Contact</label>
                  <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Contact"
                      value={contactInput}
                      onChange={(e)=>setContactInput(e.target.value)}
                  />
                  </div>
              
              </div>
              }
              <div className="d-grid gap-2 mt-3">
                  <button type="button" onClick={handleSignUp}className="btn btn-primary">
                  Submit
                  </button>
              </div>
              
              </div>
          </form>
          </div>
      </div>
    </>
  )
}

export default  Login;