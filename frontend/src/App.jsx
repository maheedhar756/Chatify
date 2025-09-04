import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Settings from './pages/Settings.jsx'
import Profile from './pages/Profile.jsx'
import { useEffect } from 'react'
import {ScaleLoader} from "react-spinners"
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useAuthStore } from './store/useAuthStore.js'

function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log(authUser)

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
      <ScaleLoader
        barCount={6}
        margin={4}
        radius={10}
        speedMultiplier={1.5}
        color="#00ff00"
      />
    </div>
  )

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to="/login"/> } />
        <Route path="/signup" element={ !authUser ? <Signup /> : <Navigate to="/" /> } />
        <Route path="/login" element={ !authUser ? <Login /> : <Navigate to="/" /> } />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
