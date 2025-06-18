import Todo from '../schema/todo.schema.js'; // Include .js if using ES modules

// GET: Fetch all todos
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching todos', error: err.message });
  }
};

// POST: Add new todo
export const addTodo = async (req, res) => {
  const { title, completed } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean value' });
  }

  try {
    const newTodo = new Todo({ title, completed });
    await newTodo.save();

    res.status(201).json({ message: 'Todo added successfully', todo: newTodo });
  } catch (err) {
    res.status(500).json({ message: 'Error adding todo', error: err.message });
  }
};

// PUT: Update todo by ID
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean value' });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
  } catch (err) {
    res.status(500).json({ message: 'Error updating todo', error: err.message });
  }
};

// DELETE: Remove todo by ID
export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully', todo: deletedTodo });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting todo', error: err.message });
  }
};
