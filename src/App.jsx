import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/home";

import AuthLayout from "./pages/layouts/AuthLayout";
import GuestLayout from "./pages/layouts/GuestLayout";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
export default function App(){
  return (
   <div className="bg-slate-100 min-h-screen ">
    <Routes>
      <Route element={<AuthLayout/>} >
      <Route path="/" element={<Home/>}/>
      </Route>
      <Route>
      <Route element={<GuestLayout/>} ></Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/password-reset/:token" element={<ResetPassword/>}/>
      </Route>
    </Routes>
   </div>
  )
}