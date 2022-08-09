

export const getAdminByid =  (state={
    getAdminIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ADMIN_ID":
          return ({
            getAdminIdResp: action.payload
          });
        case "GET_ADMIN_ID_ERR":
          return({
            getAdminIdResp:action.payload
          })
          case "RESET":
          return({
            getAdminIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerAdmin =  (
    state={
      registerAdminResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_ADMIN":
            return({
              registerAdminResp:action.payload
            })
          case "REGISTER_ADMIN_ERR":
          return({
            registerAdminResp:action.payload
          })
          case "RESET":
          return({
            registerAdminResp:""
          })
          default:
            return state;
        }
  };

  export const getAllAdmin =  (state={
    getAllAdminResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_ADMIN":
          return ({
            getAllAdminResp: action.payload
          });
        case "GET_ALL_ADMIN_ERR":
          return({
            getAllAdminResp:action.payload
          })
          case "RESET":
          return({
            getAllAdminResp:""
          })
        default:
          return state;
      }
  };

  export const updateAdmin =  (state={
    updateAdminResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_ADMIN":
          return ({
            updateAdminResp: action.payload
          });
        case "UPDATE_ADMIN_ERR":
          return({
            updateAdminResp:action.payload
          })
          case "RESET":
          return({
            updateAdminResp:""
          })
        default:
          return state;
      }
  };

  export const deleteAdmin =  (state={
    deleteAdminResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_ADMIN":
          return ({
            deleteAdminResp: action.payload
          });
        case "DELETE_ADMIN_ERR":
          return({
            deleteAdminResp:action.payload
          })
          case "RESET":
          return({
            deleteAdminResp:""
          })
        default:
          return state;
      }
  };




