import React from 'react'
import {Route , BrowserRouter , Routes} from 'react-router-dom'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import OtpPage from './pages/OtpPage'
import OtpVerification from './pages/OtpVerification'
import RenderPage from './pages/RenderPage'
import Middleware from './pages/Middleware'
import RestroDashboardPage from './pages/RestroDashboardPage'
import DashboardMiddleware from './pages/DashboardMiddleware'

function App() {
  return (
<BrowserRouter>

  <Routes>
    <Route path="/" element={<Middleware />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} /> */}
    <Route  path='/login'  element={<LoginPage />}/>
    <Route  path='/register'  element={<RegisterPage />}/>
    <Route  path='/send-otp/:id'  element={<OtpPage />}/>
    <Route  path='/verify-otp'  element={<OtpVerification />}/>
    <Route  path='/get/dashboard'  element={<DashboardMiddleware />}/>
   
    

  </Routes>
</BrowserRouter>
  )
}

export default App
