import { configureStore } from "@reduxjs/toolkit";
import pendingToDoReducer from './slices/pendingTodo'
export const store = configureStore({
        reducer:{
            pendingTodos:pendingToDoReducer
        }
    }
)