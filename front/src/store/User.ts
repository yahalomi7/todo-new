import axios from "axios";

export interface User {
    _id: string;
    username: string;
    email: string;
    password: string; 
}

const api = axios.create({
    baseURL: "http://localhost:8080/api/users",
});

export const registerUser = async (userData: Omit<User, 'id'>): Promise<User> => {
    try {
        const response = await api.post<User>("/", userData);
        if (response.status === 201) {
            return response.data;
        }
        throw new Error(`Failed to register user, status code: ${response.status}`);
    } catch (err) {
        console.error("Error registering user:", err);
        throw err;
    }
};