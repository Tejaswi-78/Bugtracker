import React,{useState,useEffect} from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { registerProject,deleteProject,updateProject,getProjectByid } from "../Action/projectAction";
import {AddBug,ViewProjBug} from './Bug'

export const AddProject = (props) =>{
    const dispatch = useDispatch();
    const projectObj={
        bugEntityList:[],
    }
    return(
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder="Project Name"
                            onChange={(e)=>{projectObj.projectName=(e.target.value)}}
                        /><br />
                        <Form.Label>Project Type</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Project Type"
                            onChange={(e)=>{projectObj.projectType=(e.target.value)}}
                        /><br />
                        <Form.Label>Technology</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Technology"
                            onChange={(e)=>{projectObj.technology=(e.target.value)}}
                        /><br />  
                        <Form.Label>Client</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder="Client"
                            onChange={(e)=>{projectObj.client=(e.target.value)}}
                        /><br />      
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{dispatch(registerProject(projectObj));props.onHide()}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export const ProjectTable = () =>{
    
    const dispatch = useDispatch();
    const allProjData = useSelector((state)=>state.getAllProject.getAllProjectResp.data)
    const projByIdData = useSelector((state)=>state.getProjectByid.getProjectIdResp.data)

    const [showProjectUpdateModal,setShowProjectUpdateModal] =useState(false)
    const [showAddBugModal,setShowAddBugModal] =useState(false)
    const [showViewProjBugModal,setShowViewProjBugModal] =useState(false)

    const saveEditProject = (obj) =>{
        const newProjectObj = {
            projectId: projByIdData.projectId,
            projectName: obj.projectName ? obj.projectName : projByIdData.projectName ,
            projectType: obj.projectType ? obj.projectType : projByIdData.projectType ,
            technology: obj.technology ? obj.technology : projByIdData.technology ,
            client: obj.client ? obj.client : projByIdData.client ,
            bugs:projByIdData.bugs
          }
        dispatch(updateProject(newProjectObj));
        setShowProjectUpdateModal(false);
    }

    const ProjectUpdateModal = (props) =>{
        const projectObj={
        }
        if(!projByIdData) return;
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Project data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Project Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={projByIdData? projByIdData.projectName : null}
                            onChange={(e)=>{projectObj.projectName=(e.target.value)}}
                        /><br />
                        <Form.Label>Project Type</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={projByIdData? projByIdData.projectType : null}
                            onChange={(e)=>{projectObj.projectType=(e.target.value)}}
                        /><br />
                        <Form.Label>Technology</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={projByIdData? projByIdData.technology : null}
                            onChange={(e)=>{projectObj.technology=(e.target.value)}}
                        /><br />
                        <Form.Label>Cient</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={projByIdData? projByIdData.client : null}
                            onChange={(e)=>{projectObj.client=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditProject(projectObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <ProjectUpdateModal 
                show={showProjectUpdateModal}
                onHide={()=>{setShowProjectUpdateModal(false)}}
            />
            <AddBug 
                show={showAddBugModal}
                onHide={()=>{setShowAddBugModal(false)}}
            />
            <h3>Projects</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Project Name</th>
                        <th>Project Type</th>
                        <th>Technology</th>
                        <th>Client</th>
                        <th>Bugs</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProjData && allProjData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.projectId}</td>
                                    <td>{val.projectName}</td>
                                    <td>{val.projectType}</td>
                                    <td>{val.technology}</td>
                                    <td>{val.client}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                            dispatch(getProjectByid(val.projectId));
                                            setShowViewProjBugModal(!showViewProjBugModal)
                                        }}>VIew</Button> &nbsp;&nbsp;
                                        {/* <Button variant="success"  onClick={()=>{
                                            setShowAddBugModal(true);
                                            dispatch(getProjectByid(val.projectId));
                                        }}>Add</Button> */}
                                    
                                    </td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                            setShowProjectUpdateModal(true);
                                            dispatch(getProjectByid(val.projectId))
                                            }}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{dispatch(deleteProject(val.projectId))}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {
                showViewProjBugModal?
                <ViewProjBug />:
                null
            }
            
        </>
    )
}