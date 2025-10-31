import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import {Link} from "react-router-dom"
import AuthImagePattern from "../components/AuthImagePattern"
import { MessageSquare, User, Mail, Eye, EyeOff, Lock, LoaderCircle } from "lucide-react"
import toast from "react-hot-toast"

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required")
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters")
    return true
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const success = validateForm()

    if(success === true){
      signup(formData)
    }
  }
  
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center duration-700 hover:scale-110">
                <MessageSquare className="size-6 text-primary"/>
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="flex border p-2 rounded-xl ">
                <User />
                <input
                  type="text"
                  className="w-full pl-2 border-0 focus:outline-none"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="flex border p-2 rounded-xl">
                <Mail />
                <input
                  type="email"
                  className="w-full pl-2 border-0 focus:outline-none"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="flex border p-2 rounded-xl">
                <Lock />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-2 border-0 focus:outline-none"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <span
                onClick={() => setShowPassword(!showPassword)}
                className="inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full transition-colors" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <LoaderCircle className="size-5 animate-spin text-gray-400"/>
                  <span className="text-gray-400">Loading...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/signin" className="link link-primary font-semibold hover:text-teal-500">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  )
}

export default Signup
