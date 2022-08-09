import axios from 'axios';
import constant from '../Component/constants.json';

export const getLoginByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'login/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_LOGIN_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_LOGIN_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllLogin = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'login/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_LOGIN",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_LOGIN_ERR",
        payload:err.response
      })
    });
};

export const registerLogin = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"login/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_LOGIN",
      payload:resp.data
    })
    alert("login Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_LOGIN_ERR",
      payload:err.response
    })
    alert("login Adding failed")
  });  
};

export const updateLogin = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"login/"+obj.email, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_LOGIN",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_LOGIN_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteLogin = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"login/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_LOGIN",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_LOGIN_ERR",
      payload:err.response
    })
  });  
};
 
export const logout = ()=> async dispatch=> {
    dispatch({
      type:"RESET",
      payload:""
    })
  };