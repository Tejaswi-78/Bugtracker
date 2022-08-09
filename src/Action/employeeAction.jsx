import axios from 'axios';
import constant from '../Component/constants.json';

export const getEmployeeByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'employee/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_EMPLOYEE_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_EMPLOYEE_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllEmployee = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'employee/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_EMPLOYEE",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_EMPLOYEE_ERR",
        payload:err.response
      })
    });
};

export const registerEmployee = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"employee/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_EMPLOYEE",
      payload:resp.data
    })
    alert("employee Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_EMPLOYEE_ERR",
      payload:err.response
    })
    alert("employee Adding failed")
  });  
};

export const updateEmployee = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"employee/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_EMPLOYEE",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_EMPLOYEE_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteEmployee = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"employee/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_EMPLOYEE",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_EMPLOYEE_ERR",
      payload:err.response
    })
  });  
};
 
export const forwardBugEmployee = (id,obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"forward_bug/"+id, obj)
  .then((resp)=>{
    dispatch({
      type:"FORWARD_BUG",
      payload:resp.data
    })
    alert("Forwarded");
  })
  .catch((err)=>{
    dispatch({
      type:"FORWARD_BUG_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};