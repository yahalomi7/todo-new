import axios from "axios";

export interface Todo {
    _id: string;
    title: string;
    completed?: boolean;
}
const api = axios.create({
  baseURL: "http://localhost:8080/api",
});
export const fetchingallTodos = async (): Promise<Todo[]> => {
    try {
    const response = await api.get<Todo[]>("/todo");
        if (response.status === 200) {
            const { data } = response;
            console.log("Fetched todos:", data);
            return data; // Return the list of todos
        }    
        throw new Error(`Failed to fetch todos, status code: ${response.status}`);
    } catch (err) {
        console.error("Error fetching todos:", err);
        throw err; // Re-throw the error for further handling
    }
}
export const deleteTodo = async (id: string): Promise<void> => {
    try {
        const response = await api.delete(`/todo/${id}`);
        if (response.status === 200) {
            console.log(`Todo with id ${id} deleted successfully`);
        } else {
            throw new Error(`Failed to delete todo, status code: ${response.status}`);
        }
    } catch (err) {
        console.error(`Error deleting todo with id ${id}:`, err);
        throw err; // Re-throw the error for further handling
    }
}
export const createTodo = async (title: string): Promise<Todo> => {
    try {
        const response = await api.post<Todo>("/todo", { title });
        if (response.status === 201) {
            console.log("Todo created successfully:", response.data);
            return response.data;
        }
        throw new Error(`Failed to create todo, status code: ${response.status}`);
    } catch (err) {
        console.error("Error creating todo:", err);
        throw err; // Re-throw the error for further handling
    }
}