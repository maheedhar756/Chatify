import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api" || "https://chatify-nt5p.onrender.com/api",
  withCredentials: true
})