

export const getBugByid =  (state={
    getBugIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_BUG_ID":
          return ({
            getBugIdResp: action.payload
          });
        case "GET_BUG_ID_ERR":
          return({
            getBugIdResp:action.payload
          })
          case "RESET":
          return({
            getBugIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerBug =  (
    state={
      registerBugResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_BUG":
            return({
              registerBugResp:action.payload
            })
          case "REGISTER_BUG_ERR":
          return({
            registerBugResp:action.payload
          })
          case "RESET":
          return({
            registerBugResp:""
          })
          default:
            return state;
        }
  };

  export const getAllBug =  (state={
    getAllBugResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_BUG":
          return ({
            getAllBugResp: action.payload
          });
        case "GET_ALL_BUG_ERR":
          return({
            getAllBugResp:action.payload
          })
          case "RESET":
          return({
            getAllBugResp:""
          })
        default:
          return state;
      }
  };

  export const updateBug =  (state={
    updateBugResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_BUG":
          return ({
            updateBugResp: action.payload
          });
        case "UPDATE_BUG_ERR":
          return({
            updateBugResp:action.payload
          })
          case "RESET":
          return({
            updateBugResp:""
          })
        default:
          return state;
      }
  };

  export const deleteBug =  (state={
    deleteBugResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_BUG":
          return ({
            deleteBugResp: action.payload
          });
        case "DELETE_BUG_ERR":
          return({
            deleteBugResp:action.payload
          })
          case "RESET":
          return({
            deleteBugResp:""
          })
        default:
          return state;
      }
  };


  