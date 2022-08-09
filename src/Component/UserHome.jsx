import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { logout } from "../Action/loginAction";
import { deleteUser,updateUser,getUserByid,getAllUser } from "../Action/userAction";
import { getAllProject,getProjectByid,updateProject } from "../Action/projectAction";
import {getAllBug} from "../Action/bugAction";
import userEvent from "@testing-library/user-event";

const UserHome = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state)=>state.getUserByid.getUserIdResp.data)
    const [showUserUpdateModal,setShowUserUpdateModal] = useState(false)
    const [showAddBug,setShowAddBug] = useState(false)
    const [bugAddData,setBugAddData] = useState("")
    const [showBugTable,setShowBugTable] = useState(false);
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)
    const projData = useSelector((state)=>state.getAllProject.getAllProjectResp.data)
    const updateProjectData = useSelector((state)=>state.updateProject.updateProjectResp.data)
    const bugsData = useSelector((state)=>state.getAllBug.getAllBugResp.data)

    const handleDeleteProfile = ()=>{
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteUser(userData.id));
            dispatch(logout());
            alert("your account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditUser = (obj) =>{
        const newUserObj = {
            id: userData.id,
            firstName: obj.firstName ?obj.firstName : userData.firstName ,
            addressEntity: {
              id: userData.addressEntity.id,
              city: obj.city ?obj.city : userData.addressEntity.city ,
              state: obj.state ?obj.state : userData.addressEntity.state ,
              pincode: obj.pincode ?obj.pincode : userData.addressEntity.pincode
            },
            login: {
              email: obj.email ?obj.email : userData.login.email ,
              password: obj.password ?obj.password : userData.login.password ,
              role: obj.role ?obj.role : userData.login.role ,
              id: userData.login.id
            },
            lastName: obj.lastName ?obj.lastName : userData.lastName 
          }
        dispatch(updateUser(newUserObj));
        setShowUserUpdateModal(false);
    }

    const UserUpdateModal = (props) =>{
        const userObj={
        }
        if(!userData) return
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
                            placeholder={userData? userData.firstName : null}
                            onChange={(e)=>{userObj.firstName=(e.target.value)}}
                        /><br />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.lastName : null}
                            onChange={(e)=>{userObj.lastName=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData.login? userData.login.email : null}
                            onChange={(e)=>{userObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData.login? userData.login.password : null}
                            onChange={(e)=>{userObj.password=(e.target.value)}}
                        /><br />
                        
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData.addressEntity? userData.addressEntity.city : null}
                            onChange={(e)=>{userObj.city=(e.target.value)}}
                        /><br />
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData.addressEntity? userData.addressEntity.state : null}
                            onChange={(e)=>{userObj.state=(e.target.value)}}
                        /><br />
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData.addressEntity? userData.addressEntity.pincode : null}
                            onChange={(e)=>{userObj.pincode=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditUser(userObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleAddBtn = (obj)=>{
        setBugAddData(obj)
    }
    useEffect(()=>{
        if(!projByIdData) return;
        const newProj = projByIdData;
        newProj.bugs = newProj.bugs.concat(bugAddData);
        console.log(newProj)
        dispatch(updateProject(newProj));
        dispatch(getAllProject());
        },[projByIdData])

    const AddBug = (props) =>{
        const bugObj={
            bugStatus:"CREATED",
            createdBy:userData?userData.firstName:"me"
        }
        var projId=""
        return(
            <>
                <Modal {...props}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Bug</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select onChange={(e)=>{projId=(e.target.value)}} >
                                <option>Choose Project</option>
                                {
                                    projData && projData.map((val)=>{
                                        return(
                                            <option value={val.projectId}> {val.projectName}</option>
                                        )
                                    })
                                }
                            </Form.Select><br/>
                            <Form.Label>Bug Description</Form.Label>
                            <Form.Control
                                type="Text"
                                autoFocus
                                placeholder="Bug Name"
                                onChange={(e)=>{bugObj.description=(e.target.value)}}
                            /><br />
                            <Form.Label>Bug CreatedDate</Form.Label>
                            <Form.Control
                                type="Text"
                                placeholder="E.g 2022-12-15"
                                onChange={(e)=>{bugObj.createdDate=(e.target.value)}}
                            /><br />      
                        </Form.Group>
                        
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary"  onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        dispatch(getProjectByid(projId));
                        handleAddBtn(bugObj);
                        props.onHide()}}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

    const handleRefresh = ()=>{
        dispatch(getUserByid(userData.id))
        dispatch(getAllUser())
        dispatch(getAllProject())
        dispatch(getAllBug())
    }

    const BugTable = () =>{
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>createdBy</th>
                        <th>createdDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bugsData && bugsData.map((val)=>{
                            if(val.createdBy==userData.firstName){
                                return(
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.description}</td>
                                        <td>{val.bugStatus}</td>
                                        <td>{val.createdBy}</td>
                                        <td>{val.createdDate}</td>
                                    </tr>
                                )
                            }
                        }) 
                    }
                </tbody>
            </Table>
        )
    }

    return(
        <>
            <UserUpdateModal 
                show={showUserUpdateModal}
                onHide={()=>{setShowUserUpdateModal(false)}}
            />
            <AddBug 
                show={showAddBug}
                onHide={()=>{setShowAddBug(false)}}
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
                        <Nav.Link onClick={()=>{setShowAddBug(true)}}>Create Bugs</Nav.Link>
                        <Nav.Link onClick={()=>{setShowBugTable(!showBugTable)}}>view Bugs</Nav.Link>
                        {/*<Nav.Link onClick={()=>{setShowAddProejctModal(true)}}>Add Project</Nav.Link>
                        <Nav.Link onClick={()=>{setShowProjectTable(!showProjectTable)}}>view Project</Nav.Link> */}
                        
                        <Nav.Link disabled style={{ paddingLeft: '300px' }}>Hi {userData?userData.firstName:null}! Welcome</Nav.Link> 
                    </Nav>
                        </Navbar.Collapse>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                            Profile  
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>{setShowUserUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                <Dropdown.Item href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Container>
            </Navbar><br/>
            {
                showBugTable?
                <BugTable/>:
                null
            }
        </>
    )
}

export default UserHome;