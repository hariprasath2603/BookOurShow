import { axiosInstance } from "./index.js";

export const RegisterUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/register", values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (values) => {
  try {
    const response = await axiosInstance.post("/users/login", values);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/users/currentUser");
    return response.data;
  } catch (error) {
    return error;
  }
};
