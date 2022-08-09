import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { deleteAdmin,updateAdmin,getAdminByid } from "../Action/adminAction";
import {logout} from "../Action/loginAction";
import { getAllEmployee } from "../Action/employeeAction";
import {AddEmployee,EmployeeTable} from "./Employee";
import {AddProject,ProjectTable} from "./Project";
import { getAllProject } from "../Action/projectAction";

const Admin = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAdminUpdateModal,setShowAdminUpdateModal] = useState(false);
    const [showAddEmployeeModal,setShowAddEmployeeModal] = useState(false);
    const [showEmpTable,setShowEmpTable] = useState(false);
    const [showAddProejctModal,setShowAddProejctModal] = useState(false);
    const [showProjectTable,setShowProjectTable] = useState(false);

    const adminData = useSelector((state)=>state.getAdminByid.getAdminIdResp.data)

    const handleDeleteProfile = ()=>{
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteAdmin(adminData.id));
            dispatch(logout());
            alert("your account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditAdmin = (obj) =>{
        const newAdminObj = {
            id: adminData.id,
            name: obj.name ?  obj.name : adminData.name ,
            contact: obj.contact ?  obj.contact : adminData.contact ,
            login: {
              email: obj.email ?  obj.email : adminData.login.email ,
              password: obj.password ? obj.password : adminData.login.password  ,
              role: adminData.login.role,
              id: adminData.id
            }
          }
        dispatch(updateAdmin(newAdminObj));
        setShowAdminUpdateModal(false);
    }

    const AdminUpdateModal = (props) =>{
        const adminObj={
        }
        if(!adminData) return
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update User data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={adminData? adminData.name : null}
                            onChange={(e)=>{adminObj.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminData? adminData.contact : null}
                            onChange={(e)=>{adminObj.contact=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminData.login? adminData.login.email : null}
                            onChange={(e)=>{adminObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminData.login? adminData.login.password : null}
                            onChange={(e)=>{adminObj.password=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditAdmin(adminObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleRefresh=()=>{
        dispatch(getAdminByid(adminData.id));
        dispatch(getAllEmployee());
        dispatch(getAllProject());
    }


    return(
        <>
            <AdminUpdateModal 
                show={showAdminUpdateModal}
                onHide={()=>{setShowAdminUpdateModal(false);handleRefresh()}}
            />
            <AddEmployee 
                show={showAddEmployeeModal}
                onHide={()=>{setShowAddEmployeeModal(false);handleRefresh()}}
            />
            <AddProject 
                show={showAddProejctModal}
                onHide={()=>{setShowAddProejctModal(false);handleRefresh()}}
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
                            <Nav.Link onClick={()=>{setShowAddEmployeeModal(true)}}>Add Employee</Nav.Link>
                            <Nav.Link onClick={()=>{setShowEmpTable(!showEmpTable)}}>view Employee</Nav.Link>
                            <Nav.Link onClick={()=>{setShowAddProejctModal(true)}}>Add Project</Nav.Link>
                            <Nav.Link onClick={()=>{setShowProjectTable(!showProjectTable)}}>view Project</Nav.Link> 
                            
                            <Nav.Link disabled style={{ paddingLeft: '300px' }}>Hi {adminData?adminData.name:null}! Welcome</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowAdminUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
                <br/>
            {
                showEmpTable?
                <EmployeeTable />:
                null
            }
            {
                showProjectTable?
                <ProjectTable />:
                null
            }
        </>
    )
}

export default Admin;