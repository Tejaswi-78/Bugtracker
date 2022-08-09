

export const getProjectByid =  (state={
    getProjectIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_PROJECT_ID":
          return ({
            getProjectIdResp: action.payload
          });
        case "GET_PROJECT_ID_ERR":
          return({
            getProjectIdResp:action.payload
          })
          case "RESET":
          return({
            getProjectIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerProject =  (
    state={
      registerProjectResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_PROJECT":
            return({
              registerProjectResp:action.payload
            })
          case "REGISTER_PROJECT_ERR":
          return({
            registerProjectResp:action.payload
          })
          case "RESET":
          return({
            registerProjectResp:""
          })
          default:
            return state;
        }
  };

  export const getAllProject =  (state={
    getAllProjectResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_PROJECT":
          return ({
            getAllProjectResp: action.payload
          });
        case "GET_ALL_PROJECT_ERR":
          return({
            getAllProjectResp:action.payload
          })
          case "RESET":
          return({
            getAllProjectResp:""
          })
        default:
          return state;
      }
  };

  export const updateProject =  (state={
    updateProjectResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_PROJECT":
          return ({
            updateProjectResp: action.payload
          });
        case "UPDATE_PROJECT_ERR":
          return({
            updateProjectResp:action.payload
          })
          case "RESET":
          return({
            updateProjectResp:""
          })
        default:
          return state;
      }
  };

  export const deleteProject =  (state={
    deleteProjectResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_PROJECT":
          return ({
            deleteProjectResp: action.payload
          });
        case "DELETE_PROJECT_ERR":
          return({
            deleteProjectResp:action.payload
          })
          case "RESET":
          return({
            deleteProjectResp:""
          })
        default:
          return state;
      }
  };




