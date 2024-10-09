/* eslint-disable no-unused-vars */
import axios from "axios";

const local = "http://localhost:5000";

const production = "https://simple-ecommerce-backend.onrender.com";

const api = axios.create({
  baseURL: `${production}/api`,
  withCredentials: true,
});

export default api;
