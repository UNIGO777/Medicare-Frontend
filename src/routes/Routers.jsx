import React, { Suspense, lazy } from "react"

import { Route, Routes } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./ProtectRoute";


const Signup = lazy(() => import("../pages/Signup"));
const Services = lazy(() => import("../pages/Services"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const DoctorDetails = lazy(() => import("../pages/doctors/DoctorDetails"));
const Doctors = lazy(() => import("../pages/doctors/Doctors"));
const Contact = lazy(() => import("../pages/Contact"));


const Routers = () => {
    const user = true
    return (
        <>
            <ToastContainer position="top-left" />
            <Suspense fallback={<div className="w-full h-screen grid place-items-center">
                <div className="text-center"><ClipLoader loading={true} color="#00000" size={20} />
                <h1>loading</h1></div>
            </div>}>
                <Routes>
                    
                    <Route path="/signup" element={ <Signup /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/" element={ <Home/> } />
                    <Route path="/services" element={ <Services /> } />
                    <Route path="/doctorDetails" element={ <DoctorDetails /> } />
                    <Route path="/doctors" element={ <Doctors /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    

                </Routes>
            </Suspense>
        </>
    )
}

export default Routers