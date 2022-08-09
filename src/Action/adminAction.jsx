import axios from 'axios';
import constant from '../Component/constants.json';

export const getAdminByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'admin/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_ADMIN_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ADMIN_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllAdmin = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'admin/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_ADMIN",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_ADMIN_ERR",
        payload:err.response
      })
    });
};

export const registerAdmin = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"admin/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_ADMIN",
      payload:resp.data
    })
    alert("admin Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_ADMIN_ERR",
      payload:err.response
    })
    alert("admin Adding failed")
  });  
};

export const updateAdmin = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"admin/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_ADMIN",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_ADMIN_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteAdmin = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"admin/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_ADMIN",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_ADMIN_ERR",
      payload:err.response
    })
  });  
};
 