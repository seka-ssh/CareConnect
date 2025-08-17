import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import TermsConditions from './pages/TermsConditions'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MedicalAI from './pages/MedicalAI'
import MedImageAI from './pages/MedImageAI'
import AskMed from './pages/AskMed'
import MindEase from './pages/MindEase'
import { AppContext } from './context/AppContext'

const App = () => {
  const { token, setToken, userData } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    toast.success('Logged out successfully!')
    navigate('/login')
  }

  return (
    <div className='mx-4 sm:mx-[4%]'>
      <ToastContainer />
      <Navbar token={token} userData={userData} logout={logout} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/medicalai' element={<MedicalAI />} />
        <Route path='/medicalai/ask-med' element={<AskMed />} />
        <Route path='/medicalai/med-image-ai' element={<MedImageAI />} />
        <Route path='/medicalai/mind-ease' element={<MindEase />} />
        <Route path='/about' element={<About />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/termsconditions' element={<TermsConditions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App