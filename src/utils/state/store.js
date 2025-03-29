import { configureStore } from "@reduxjs/toolkit";
import pendingToDoReducer from './slices/pendingTodo'
import completedTodoReducer from './slices/completedTodo'
import stylingReducer from './slices/style'
export const store = configureStore({
        reducer:{
            pendingTodos:pendingToDoReducer,
            completedTodo:completedTodoReducer,
            style:stylingReducer
        }
    }
)
export const completedTasks = (state)=>state.completedTodo.value;
export const pendingTasks = (state)=>state.pendingTodos.value;
export const styling = (state)=>state.style.value;