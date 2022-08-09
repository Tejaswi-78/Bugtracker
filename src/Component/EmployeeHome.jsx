import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { deleteEmployee,updateEmployee,getEmployeeByid, getAllEmployee } from "../Action/employeeAction";
import { logout } from "../Action/loginAction";
import {ViewBugForEmpHome} from "./Bug";

const EmployeeHome = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showEmployeeUpdateModal,setShowEmployeeUpdateModal] = useState(false)
    const [showBugsTable,setShowBugsTable] = useState(false)

    const employeeData = useSelector((state)=>state.getEmployeeByid.getEmployeeIdResp.data)


    const handleDeleteProfile = ()=>{
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteEmployee(employeeData.id));
            dispatch(logout());
            alert("your account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditEmployee = (obj) =>{
        const newEmployeeObj = {
            id: employeeData.id,
            firstName: obj.firstName ? obj.firstName : employeeData.firstName ,
            lastName: obj.lastName ? obj.lastName : employeeData.lastName ,
            designation: obj.designation ? obj.designation : employeeData.designation ,
            bugEntityList: employeeData.bugEntityList,
            login: {
              email: obj.email ? obj.email : employeeData.login.email ,
              password: obj.password ? obj.password : employeeData.login.password ,
              role: "EMPLOYEE",
              id: employeeData.id
            }
          }
        dispatch(updateEmployee(newEmployeeObj));
        setShowEmployeeUpdateModal(false);
    }

    const EmployeeUpdateModal = (props) =>{
        const employeeObj={
        }
        if(!employeeData) return
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update User data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={employeeData? employeeData.firstName : null}
                            onChange={(e)=>{employeeObj.firstName=(e.target.value)}}
                        /><br />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={employeeData? employeeData.lastName : null}
                            onChange={(e)=>{employeeObj.lastName=(e.target.value)}}
                        /><br />
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={employeeData? employeeData.designation : null}
                            onChange={(e)=>{employeeObj.designation=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={employeeData.login? employeeData.login.email : null}
                            onChange={(e)=>{employeeObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={employeeData.login? employeeData.login.password : null}
                            onChange={(e)=>{employeeObj.password=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditEmployee(employeeObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleRefresh = ()=>{
        dispatch(getEmployeeByid(employeeData.id))
        dispatch(getAllEmployee())
    }

    return(
        <>
            <EmployeeUpdateModal 
                show={showEmployeeUpdateModal}
                onHide={()=>{setShowEmployeeUpdateModal(false)}}
            />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Bug Tracker <a href="/"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={handleRefresh}>Refresh</Nav.Link>
                        <Nav.Link onClick={()=>{setShowBugsTable(!showBugsTable)}}>view Bugs</Nav.Link>
                        {/*<Nav.Link onClick={()=>{setShowEmpTable(!showEmpTable)}}>view Employee</Nav.Link>
                        <Nav.Link onClick={()=>{setShowAddProejctModal(true)}}>Add Project</Nav.Link>
                        <Nav.Link onClick={()=>{setShowProjectTable(!showProjectTable)}}>view Project</Nav.Link> */}
                        
                        <Nav.Link disabled style={{ paddingLeft: '300px' }}>Hi {employeeData?employeeData.firstName:null}! Welcome</Nav.Link> 
                    </Nav>
                        </Navbar.Collapse>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                            Profile  
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>{setShowEmployeeUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                <Dropdown.Item href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Container>
            </Navbar><br/>
            {
                showBugsTable?
                <ViewBugForEmpHome/>:
                null
            }
        </>
    )
}

export default EmployeeHome;