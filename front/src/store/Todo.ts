import axios from "axios";

interface Todo {
    id: string;
    title: string;
    completed?: boolean;
}
export const fetchingallTodos = async (): Promise<Todo[]> => {
    try {
    const response = await axios.get("http://localhost:5000/todos");
        if (response.status === 200) {
            const { data } = response;
            return data; // Return the list of todos
        }    
        throw new Error(`Failed to fetch todos, status code: ${response.status}`);
    } catch (err) {
        console.error("Error fetching todos:", err);
        throw err; // Re-throw the error for further handling
    }
}