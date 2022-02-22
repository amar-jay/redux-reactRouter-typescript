import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSelectorType } from './hooks';


export interface todoType {
  id: number;
  name: string;
  description: string;
  completed?: boolean;
}
export interface initialStateType {
  data: todoType[];
}
const initialState: initialStateType = {data: []};

export const todosReducer = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodo: (state, action: PayloadAction<todoType>) => { state.data.push(action.payload); },
    // TODO: toggleTodos
    deleteTodo: (state, action: PayloadAction<todoType>) => {
      state.data.splice(state.data.findIndex(t => t.id === action.payload.id), 1); }
  }
});

export const { addTodo, deleteTodo } = todosReducer.actions;

export const selectTodos = (state: AppSelectorType) => state;

export default todosReducer.reducer;

