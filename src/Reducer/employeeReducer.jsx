

export const getEmployeeByid =  (state={
    getEmployeeIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_EMPLOYEE_ID":
          return ({
            getEmployeeIdResp: action.payload
          });
        case "GET_EMPLOYEE_ID_ERR":
          return({
            getEmployeeIdResp:action.payload
          })
          case "RESET":
          return({
            getEmployeeIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerEmployee =  (
    state={
      registerEmployeeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_EMPLOYEE":
            return({
              registerEmployeeResp:action.payload
            })
          case "REGISTER_EMPLOYEE_ERR":
          return({
            registerEmployeeResp:action.payload
          })
          case "RESET":
          return({
            registerEmployeeResp:""
          })
          default:
            return state;
        }
  };

  export const getAllEmployee =  (state={
    getAllEmployeeResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_EMPLOYEE":
          return ({
            getAllEmployeeResp: action.payload
          });
        case "GET_ALL_EMPLOYEE_ERR":
          return({
            getAllEmployeeResp:action.payload
          })
          case "RESET":
          return({
            getAllEmployeeResp:""
          })
        default:
          return state;
      }
  };

  export const updateEmployee =  (state={
    updateEmployeeResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_EMPLOYEE":
          return ({
            updateEmployeeResp: action.payload
          });
        case "UPDATE_EMPLOYEE_ERR":
          return({
            updateEmployeeResp:action.payload
          })
          case "RESET":
          return({
            updateEmployeeResp:""
          })
        default:
          return state;
      }
  };

  export const deleteEmployee =  (state={
    deleteEmployeeResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_EMPLOYEE":
          return ({
            deleteEmployeeResp: action.payload
          });
        case "DELETE_EMPLOYEE_ERR":
          return({
            deleteEmployeeResp:action.payload
          })
          case "RESET":
          return({
            deleteEmployeeResp:""
          })
        default:
          return state;
      }
  };




  export const forwardBugEmployee =  (state={
    forwardBugResp:""
  }, action) => {
      switch (action.type) {
        case "FORWARD_BUG":
          return ({
            forwardBugResp: action.payload
          });
        case "FORWARD_BUG_ERR":
          return({
            forwardBugResp:action.payload
          })
          case "RESET":
          return({
            forwardBugResp:""
          })
        default:
          return state;
      }
  };