import axios from 'axios';
import constant from '../Component/constants.json';

export const getProjectByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'project/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_PROJECT_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_PROJECT_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllProject = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'project/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_PROJECT",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_PROJECT_ERR",
        payload:err.response
      })
    });
};

export const registerProject = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"project/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_PROJECT",
      payload:resp.data
    })
    alert("project Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_PROJECT_ERR",
      payload:err.response
    })
    alert("project Adding failed")
  });  
};

export const updateProject = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"project/"+obj.projectId, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_PROJECT",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_PROJECT_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteProject = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"project/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_PROJECT",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_PROJECT_ERR",
      payload:err.response
    })
  });  
};
 