import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialValue = [
	{
		id: uuidv4(),
		title: 'Mengerjakan Exercise',
		completed: false,
	},
	{
		id: uuidv4(),
		title: 'Mengerjakan Assingment',
		completed: false,
	},
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: initialValue
  }, reducers: {
    hapusTodo: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      })
    },
    tambahTodo: (state,  action) => {
      const newData = {
        id: uuidv4(),
        ...action.payload,
      }
      state.todos = [...state.todos, newData]
    }
  }
})

export const {hapusTodo, tambahTodo} = todoSlice.actions;
export default todoSlice.reducer;