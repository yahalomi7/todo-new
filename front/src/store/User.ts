import axios from "axios";

export interface User {
    _id: string;
    username?: string;
    email: string;
    password: string; 
}

const api = axios.create({
    baseURL: "http://localhost:8080/api/users",
    withCredentials: true,
});

export const registerUser = async (userData: { username: string; email: string; password: string; }): Promise<User> => {
  try {
    const response = await api.post<User>("/register", userData);
    if (response.status === 201) {
      return response.data;
    }
    throw new Error(`Failed to register user, status code: ${response.status}`);
  } catch (err) {
    console.error("Error registering user:", err);
    throw err;
  }
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const response = await api.post<User>("/login", { email, password });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Login failed, status code: ${response.status}`);
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
export const logoutUser = async (): Promise<void> => {
    try {
        const response = await api.post("/logout");
        if (response.status !== 200) {
            throw new Error(`Failed to logout, status code: ${response.status}`);
        }
    } catch (err) {
        console.error("Error logging out:", err);
        throw err;
    }
};  
export const updateUser = async (id: string, userData: { username: string; password: string; }): Promise<User> => {
    try {
        const response = await api.patch<User>(`/${id}`, userData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update user, status code: ${response.status}`);
    } catch (err) {
        console.error("Error updating user:", err);
        throw err;
    }
};