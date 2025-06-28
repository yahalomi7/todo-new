import { create } from 'zustand';

export const useTodoStore = create((set, get) => ({
    todos: [],

    // Fetch all todos from API
    fetchTodos: async () => {
        try {
            const res = await fetch('/api/todo');
            const data = await res.json();
            set({ todos: data });
        } catch (error) {
            console.error('Failed to fetch todos:', error);
        }
    },

    // Add a todo via API
    addTodo: async (todo) => {
        try {
            const res = await fetch('/api/todo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(todo),
            });
            const newTodo = await res.json();
            set((state) => ({ todos: [...state.todos, newTodo] }));
        } catch (error) {
            console.error('Failed to add todo:', error);
        }
    },

    // Remove a todo via API
    removeTodo: async (id) => {
        try {
            await fetch(`/api/todo/${id}`, {
                method: 'DELETE',
            });
            set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) }));
        } catch (error) {
            console.error('Failed to remove todo:', error);
        }
    },

    // Toggle a todo via API
    toggleTodo: async (id) => {
        const todo = get().todos.find(t => t.id === id);
        if (!todo) return;

        try {
            const res = await fetch(`/api/todo/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !todo.completed }),
            });
            const updatedTodo = await res.json();
            set((state) => ({
                todos: state.todos.map(t =>
                    t.id === id ? updatedTodo : t
                ),
            }));
        } catch (error) {
            console.error('Failed to toggle todo:', error);
        }
    },
}));
