import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import {updateProject,getAllProject,getProjectByid} from '../Action/projectAction';
import { getBugByid, updateBug, deleteBug } from "../Action/bugAction";
import {forwardBugEmployee} from "../Action/employeeAction"

export const AddBug = (props) =>{
    const dispatch = useDispatch();
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)
    const handleAddBtn = (obj)=>{
        const newProj = projByIdData;
        newProj.bugs = newProj.bugs.concat(obj);
        dispatch(updateProject(newProj));
        dispatch(getAllProject());
        props.onHide();
    }
    const bugObj={

    }
    return(
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Add Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Bug Description</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder="Bug Name"
                            onChange={(e)=>{bugObj.description=(e.target.value)}}
                        /><br />
                        <Form.Label>Bug Status</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Bug Status"
                            onChange={(e)=>{bugObj.bugStatus=(e.target.value)}}
                        /><br />
                        <Form.Label>Bug CreatedBy</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="CreatedBy"
                            onChange={(e)=>{bugObj.createdBy=(e.target.value)}}
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
                <Button variant="primary" onClick={()=>{handleAddBtn(bugObj);props.onHide()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export const ViewProjBug = ()=>{
    const dispatch = useDispatch();
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)
    const bygByIdData = useSelector((state)=>state.getBugByid.getBugIdResp.data)
    
    const [showBugUpdateModal,setShowBugUpdateModal] = useState(false)

    const saveEditBug = (obj) =>{
        const newBugObj = {
            id: bygByIdData.id,
            bugStatus: obj.bugStatus ? obj.bugStatus : bygByIdData.bugStatus ,
            description: obj.description ? obj.description : bygByIdData.description,
            createdBy: obj.createdBy ? obj.createdBy : bygByIdData.createdBy,
            createdDate:  obj.createdDate ? obj.createdDate : bygByIdData.createdDate
          }
        dispatch(updateBug(newBugObj));
        setShowBugUpdateModal(false);
    }

    const BugUpdateModal = (props) =>{
        const bugObj={
        }
        if(!bygByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Bug Description</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={bygByIdData? bygByIdData.description : null}
                            onChange={(e)=>{bugObj.description=(e.target.value)}}
                        /><br />
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.bugStatus : null}
                            onChange={(e)=>{bugObj.bugStatus=(e.target.value)}}
                        /><br />
                        <Form.Label>Created By</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.createdBy : null}
                            onChange={(e)=>{bugObj.createdBy=(e.target.value)}}
                        /><br />
                        <Form.Label>Created Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.createdDate : null}
                            onChange={(e)=>{bugObj.createdDate=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditBug(bugObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <BugUpdateModal  
                show={showBugUpdateModal}
                onHide={()=>{setShowBugUpdateModal(false)}}
            />
            <h4>{projByIdData ? projByIdData.projectName:null} Bugs</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projByIdData && projByIdData.bugs.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.description}</td>
                                    <td>{val.bugStatus}</td>
                                    <td>{val.createdBy}</td>
                                    <td>{val.createdDate}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                                setShowBugUpdateModal(true);
                                                 dispatch(getBugByid(val.id))
                                            }}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{dispatch(deleteBug(val.id))}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
        </>
    )
}

export const ViewBugForEmp = ()=>{
    const dispatch = useDispatch();
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)
    const bygByIdData = useSelector((state)=>state.getBugByid.getBugIdResp.data)
    const empByIdData = useSelector((state)=>state.getEmployeeByid.getEmployeeIdResp.data)
    const [showBugUpdateModal,setShowBugUpdateModal] = useState(false)

    const saveEditBug = (obj) =>{
        const newBugObj = {
            id: bygByIdData.id,
            bugStatus: obj.bugStatus ? obj.bugStatus : bygByIdData.bugStatus ,
            description: obj.description ? obj.description : bygByIdData.description,
            createdBy: obj.createdBy ? obj.createdBy : bygByIdData.createdBy,
            createdDate:  obj.createdDate ? obj.createdDate : bygByIdData.createdDate
          }
        dispatch(updateBug(newBugObj));
        setShowBugUpdateModal(false);
    }

    const BugUpdateModal = (props) =>{
        const bugObj={
        }
        if(!bygByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Bug Description</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={bygByIdData? bygByIdData.description : null}
                            onChange={(e)=>{bugObj.description=(e.target.value)}}
                        /><br />
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.bugStatus : null}
                            onChange={(e)=>{bugObj.bugStatus=(e.target.value)}}
                        /><br />
                        <Form.Label>Created By</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.createdBy : null}
                            onChange={(e)=>{bugObj.createdBy=(e.target.value)}}
                        /><br />
                        <Form.Label>Created Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.createdDate : null}
                            onChange={(e)=>{bugObj.createdDate=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditBug(bugObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    return(
        <>
            <BugUpdateModal  
                show={showBugUpdateModal}
                onHide={()=>{setShowBugUpdateModal(false)}}
            />
            <h4>{empByIdData ? empByIdData.firstName:null} Bugs</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empByIdData && empByIdData.bugEntityList.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.description}</td>
                                    <td>{val.bugStatus}</td>
                                    <td>{val.createdBy}</td>
                                    <td>{val.createdDate}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                                setShowBugUpdateModal(true);
                                                 dispatch(getBugByid(val.id))
                                            }}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{dispatch(deleteBug(val.id))}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
        </>
    )
}

export const ViewBugForEmpHome = ()=>{
    const dispatch = useDispatch();
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)
    const bygByIdData = useSelector((state)=>state.getBugByid.getBugIdResp.data)
    const empByIdData = useSelector((state)=>state.getEmployeeByid.getEmployeeIdResp.data)
    const empData = useSelector((state)=>state.getAllEmployee.getAllEmployeeResp.data)

    const [showBugUpdateModal,setShowBugUpdateModal] = useState(false)
    const [showForwardBugModal,setShowForwardBugModal] = useState(false)
    const [forwardBugData,setorwardBugData] = useState();

    const saveEditBug = (obj) =>{
        const newBugObj = {
            id: bygByIdData.id,
            bugStatus: obj.bugStatus ? obj.bugStatus : bygByIdData.bugStatus ,
            description: bygByIdData.description,
            createdBy: bygByIdData.createdBy,
            createdDate:  bygByIdData.createdDate
          }
        dispatch(updateBug(newBugObj));
        setShowBugUpdateModal(false);
    }

    const BugUpdateModal = (props) =>{
        const bugObj={
        }
        if(!bygByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={bygByIdData? bygByIdData.bugStatus : null}
                            onChange={(e)=>{bugObj.bugStatus=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditBug(bugObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const ForwardBugModal = (props) =>{
        var empId=[]

        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Bug</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Select onChange={(e)=>{empId=(e.target.value)}}  >
                            <option>Choose Employee to assign</option>
                            {
                                empData && empData.map((val)=>{
                                    return(
                                        <option value={val.id}> {val.firstName} </option>
                                    )
                                })
                            }
                        </Form.Select>&nbsp;&nbsp;
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    dispatch(forwardBugEmployee(empId,forwardBugData));
                    props.onHide();
                }}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <BugUpdateModal  
                show={showBugUpdateModal}
                onHide={()=>{setShowBugUpdateModal(false)}}
            />
            <ForwardBugModal  
                show={showForwardBugModal}
                onHide={()=>{setShowForwardBugModal(false)}}
            />
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Created By</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empByIdData && empByIdData.bugEntityList && empByIdData.bugEntityList.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.description}</td>
                                    <td>{val.bugStatus}</td>
                                    <td>{val.createdBy}</td>
                                    <td>{val.createdDate}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                                setShowBugUpdateModal(true);
                                                 dispatch(getBugByid(val.id))
                                            }}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{setorwardBugData(val);setShowForwardBugModal(true)}}>Forward</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </Table>
        </>
    )
}


