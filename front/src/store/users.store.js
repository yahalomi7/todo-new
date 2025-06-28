import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
    users: [],

    // Fetch all users from the API
    fetchUsers: async () => {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            set({ users: data });
        } catch (error) {
            console.error('Failed to fetch users:', error);
        }
    },

    // Add a new user
    addUser: async (user) => {
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            const newUser = await res.json();
            set((state) => ({ users: [...state.users, newUser] }));
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    },

    // Remove user by ID
    removeUser: async (id) => {
        try {
            await fetch(`/api/users/${id}`, {
                method: 'DELETE',
            });
            set((state) => ({
                users: state.users.filter(user => user.id !== id),
            }));
        } catch (error) {
            console.error('Failed to remove user:', error);
        }
    },

    // Update a user (e.g., change name or role)
    updateUser: async (id, updatedFields) => {
        try {
            const res = await fetch(`/api/users/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFields),
            });
            const updatedUser = await res.json();
            set((state) => ({
                users: state.users.map(user =>
                    user.id === id ? updatedUser : user
                ),
            }));
        } catch (error) {
            console.error('Failed to update user:', error);
        }
    },
}));
