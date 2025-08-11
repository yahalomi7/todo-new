import mongoose ,{Document,Schema,Model} from 'mongoose';
export interface ITodo extends Document {
  title: string,
  completed?: boolean,
  createdAt?: Date
}

const todoSchema:Schema<ITodo> = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Todo:Model<ITodo> = mongoose.model<ITodo>('Todo', todoSchema);

export default Todo;
