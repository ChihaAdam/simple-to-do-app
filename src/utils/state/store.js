import { configureStore } from "@reduxjs/toolkit";
import pendingToDoReducer from './slices/pendingTodo'
import completedTodoReducer from './slices/completedTodo'

export const store = configureStore({
        reducer:{
            pendingTodos:pendingToDoReducer,
            completedTodo:completedTodoReducer
        }
    }
)