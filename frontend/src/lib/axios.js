import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api" || "https://chatify-sable.vercel.app/api",
  withCredentials: true
})