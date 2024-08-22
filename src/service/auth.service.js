import api from "./api";
import TokenService from "./token.service";

const API_URL = "http://localhost:5000/api/v1/auth";

const register = async (email, username, password) => {
  return await api.post(API_URL + "/signup", { email, username, password });
};

const login = async (username, password) => {
  try {
    const response = await api.post(API_URL + "/signin", {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.accessToken)
      );
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Assume `response.data.user` contains user info
    }
    return response;
  } catch (error) {
    console.error("Login Error:", error);
    throw error; // Rethrow error to be handled by calling function
  }
};

const AuthService = {
  register,
  login,
};

export default AuthService;
