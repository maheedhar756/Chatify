import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatify-nt5p.onrender.com/api" || "http://localhost:5001/api",
  withCredentials: true
})