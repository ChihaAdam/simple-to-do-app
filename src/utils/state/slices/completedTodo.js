import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../../localStorage";
import getDate from '../../date.js'
import { sortByDate,sortByName } from "../../sort.js";
function addInfo(task){
    const now=getDate();
    const pure = new Date;
    return {
        ...task,
        completionDate:{
            pureDate:pure.getTime(),
            date:now.date,
            time:now.time
        },
    }
}

const initialState={
    value:getFromLocal('completedTodo') || []
}

const completedTodoSlice = createSlice({
    name:"completedTodo",
    initialState,
    reducers:{
        completeTodo:(state,task)=>{
            state.value.push(addInfo(
                                     task.payload
                            ));
            setToLocal('completedTodo',
                        state.value);
        },
        sortCompletedByName:(state,mode)=>{
            state.value=sortByName(state.value,mode.payload);
            setToLocal('completedTodo',state.value);
        },
        sortCompletedByDate:(state,mode)=>{
            state.value=sortByDate(state.value,mode.payload);
            setToLocal('completedTodo',state.value);
        }
    }
})

export const  {completeTodo,
               sortCompletedByName,
               sortCompletedByDate} = completedTodoSlice.actions;

export default completedTodoSlice.reducer