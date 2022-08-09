import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Component/Login'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Component/Home";
import Admin from "./Component/Admin";
import EmployeeHome from "./Component/EmployeeHome"
import UserHome from "./Component/UserHome"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<EmployeeHome />} />
        <Route path="/user" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
