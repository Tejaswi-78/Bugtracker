

export const getLoginByid =  (state={
    getLoginIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_LOGIN_ID":
          return ({
            getLoginIdResp: action.payload
          });
        case "GET_LOGIN_ID_ERR":
          return({
            getLoginIdResp:action.payload
          })
          case "RESET":
          return({
            getLoginIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerLogin =  (
    state={
      registerLoginResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_LOGIN":
            return({
              registerLoginResp:action.payload
            })
          case "REGISTER_LOGIN_ERR":
          return({
            registerLoginResp:action.payload
          })
          case "RESET":
          return({
            registerLoginResp:""
          })
          default:
            return state;
        }
  };

  export const getAllLogin =  (state={
    getAllLoginResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_LOGIN":
          return ({
            getAllLoginResp: action.payload
          });
        case "GET_ALL_LOGIN_ERR":
          return({
            getAllLoginResp:action.payload
          })
          case "RESET":
          return({
            getAllLoginResp:""
          })
        default:
          return state;
      }
  };

  export const updateLogin =  (state={
    updateLoginResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_LOGIN":
          return ({
            updateLoginResp: action.payload
          });
        case "UPDATE_LOGIN_ERR":
          return({
            updateLoginResp:action.payload
          })
          case "RESET":
          return({
            updateLoginResp:""
          })
        default:
          return state;
      }
  };

  export const deleteLogin =  (state={
    deleteLoginResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_LOGIN":
          return ({
            deleteLoginResp: action.payload
          });
        case "DELETE_LOGIN_ERR":
          return({
            deleteLoginResp:action.payload
          })
          case "RESET":
          return({
            deleteLoginResp:""
          })
        default:
          return state;
      }
  };




