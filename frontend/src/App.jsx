import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Settings from './pages/Settings.jsx'
import Profile from './pages/Profile.jsx'
import { useEffect } from 'react'
import {Loader} from "lucide-react"
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useAuthStore } from './store/useAuthStore.js'
import { Toaster } from "react-hot-toast"

function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])
  console.log(authUser)

  if(isCheckingAuth && !authUser) return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"/>
    </div>
  )

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to="/signin"/> } />
        <Route path="/signup" element={ !authUser ? <Signup /> : <Navigate to="/" /> } />
        <Route path="/signin" element={ !authUser ? <Signin /> : <Navigate to="/" /> } />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={authUser ? <Profile /> : <Navigate to="/signin" />} />
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
