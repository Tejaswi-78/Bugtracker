import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { registerEmployee, getEmployeeByid, updateEmployee } from "../Action/employeeAction";
import {ViewBugForEmp} from "./Bug"
import { getAllBug,getBugByid } from "../Action/bugAction";
export const AddEmployee = (props) =>{
    const rand = 1 + (Math.random() * (1000000 - 1));
    const dispatch = useDispatch();
    const employeeObj={
        id:rand,
        bugEntityList:[],
        login:{
            id:rand,
            role:"EMPLOYEE"
        }
    }
    return(
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder="First Name"
                            onChange={(e)=>{employeeObj.firstName=(e.target.value)}}
                        /><br />
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Last Name"
                            onChange={(e)=>{employeeObj.lastName=(e.target.value)}}
                        /><br />
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Designation"
                            onChange={(e)=>{employeeObj.designation=(e.target.value)}}
                        /><br />  
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Email"
                            onChange={(e)=>{employeeObj.login.email=(e.target.value)}}
                        /><br />  
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Password"
                            onChange={(e)=>{employeeObj.login.password=(e.target.value)}}
                        /><br />        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{dispatch(registerEmployee(employeeObj));props.onHide()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export const EmployeeTable = () =>{
    const allEmpData = useSelector((state)=>state.getAllEmployee.getAllEmployeeResp.data)
    const empByIdData = useSelector((state)=>state.getEmployeeByid.getEmployeeIdResp.data)
    const allBugData = useSelector((state)=>state.getAllBug.getAllBugResp.data)
    const bugByIdData = useSelector((state)=>state.getBugByid.getBugIdResp.data)
    
    
    const dispatch = useDispatch();
    const [showViewBugForEmp,setShowViewBugForEmp] = useState(false);
    const [showAssigneModal,setShowAssigneModal] = useState(false);

    
    useEffect(()=>{
        if(bugByIdData){
            const newEmp = empByIdData;
            newEmp.bugEntityList = newEmp.bugEntityList.concat(bugByIdData);
            dispatch(updateEmployee(newEmp));
        }

    },[bugByIdData])
    const AssignBugModal = (props) =>{
        var bugId={}
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Assign Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Select onChange={(e)=>{bugId=(e.target.value)}} >
                            <option>Choose bug to Assign</option>
                            {
                                allBugData && allBugData.map((val)=>{
                                    return(<option value={val.id}>{val.description}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                        dispatch(getBugByid(bugId))
                        //assignBug(bugId);
                        props.onHide();

                        }}>
                        Assign
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <AssignBugModal  
                show={showAssigneModal}
                onHide={()=>{setShowAssigneModal(false)}}
            />
            <h3>Employees</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Designation</th>
                        <th>Bugs</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allEmpData && allEmpData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.firstName}</td>
                                    <td>{val.lastName}</td>
                                    <td>{val.designation}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                            dispatch(getEmployeeByid(val.id));
                                            setShowViewBugForEmp(!showViewBugForEmp);
                                        }}>View</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{
                                            // setShowAddBugModal(true);
                                            dispatch(getAllBug());
                                            dispatch(getEmployeeByid(val.id));
                                            setShowAssigneModal(true);
                                        }}>Assign</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                showViewBugForEmp?
                <ViewBugForEmp/>:
                null
            }

        </>
    )
}