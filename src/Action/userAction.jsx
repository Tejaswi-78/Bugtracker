import axios from 'axios';
import constant from '../Component/constants.json';

export const getUserByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'user/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_USER_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_USER_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllUser = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'user/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_USER",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_USER_ERR",
        payload:err.response
      })
    });
};

export const registerUser = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"user/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_USER",
      payload:resp.data
    })
    alert("user Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_USER_ERR",
      payload:err.response
    })
    alert("user Adding failed")
  });  
};

export const updateUser = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"user/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_USER",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_USER_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteUser = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"user/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_USER",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_USER_ERR",
      payload:err.response
    })
  });  
};
 