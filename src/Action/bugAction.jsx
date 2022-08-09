import axios from 'axios';
import constant from '../Component/constants.json';

export const getBugByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'bug/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_BUG_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_BUG_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllBug = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'bug/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_BUG",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_BUG_ERR",
        payload:err.response
      })
    });
};

export const registerBug = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"bug/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_BUG",
      payload:resp.data
    })
    alert("bug Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_BUG_ERR",
      payload:err.response
    })
    alert("bug Adding failed")
  });  
};

export const updateBug = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"bug/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_BUG",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_BUG_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteBug = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"bug/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_BUG",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_BUG_ERR",
      payload:err.response
    })
  });  
};
 