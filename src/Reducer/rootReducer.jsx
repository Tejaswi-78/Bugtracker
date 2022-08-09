import { combineReducers } from "redux";

import {getProjectByid,registerProject,getAllProject,updateProject,deleteProject} from "./projectReducer";
import {getAdminByid,registerAdmin,getAllAdmin,updateAdmin,deleteAdmin} from "./adminReducer";
import {getEmployeeByid,registerEmployee,getAllEmployee,updateEmployee,deleteEmployee,forwardBugEmployee} from "./employeeReducer";
import {getLoginByid,registerLogin,getAllLogin,updateLogin,deleteLogin} from "./loginReducer";
import { getUserByid,registerUser,getAllUser,updateUser,deleteUser } from "./userReducer";
import{getBugByid,registerBug,getAllBug,updateBug,deleteBug} from './bugReducer'
const rootReducer = combineReducers({
  getProjectByid,
  registerProject,
  getAllProject,
  updateProject,
  deleteProject,
  getAdminByid,
  registerAdmin,
  getAllAdmin,
  updateAdmin,
  deleteAdmin,
  getLoginByid,
  registerLogin,
  getAllLogin,
  updateLogin,
  deleteLogin,
  getEmployeeByid,
  registerEmployee,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
  forwardBugEmployee,
  getUserByid,
  registerUser,
  getAllUser,
  updateUser,
  deleteUser,
  getBugByid,
  registerBug,
  getAllBug,
  updateBug,
  deleteBug
})

export default rootReducer;