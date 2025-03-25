import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../../localStorage";
import { sortByName,sortByDate } from "../../sort";
import getDate from '../../date.js'
function addInfo(task){
    const now=getDate();
    const pure = new Date;
    return {
        id:crypto.randomUUID(),
        title:task.title,
        description:task.description,
        creationDate:{
            pureDate:pure.getTime(),
            date:now.date,
            time:now.time
        }
    }
}

const initialState={
    value:getFromLocal('pendingTodo') || []
}

const pendingTodoSlice = createSlice({
    name:"pendingto",
    initialState,
    reducers:{
        addtodo:(state,task)=>{
            state.value.push(addInfo(
                                     task.payload
                            ));
            setToLocal('pendingTodo',state.value);
        },
        movetodoup:(state,taskIndex)=>{
            const index = taskIndex.payload;
            [state.value[index],state.value[index-1]]=[state.value[index-1],state.value[index]]
            setToLocal('pendingTodo',state.value);
        },
        movetodoDown:(state,taskIndex)=>{
            const index = taskIndex.payload;
            [state.value[index],state.value[index+1]]=[state.value[index+1],state.value[index]]
            setToLocal('pendingTodo',state.value);
        }, 
        remove:(state,taskIndex)=>{
            const index = taskIndex.payload;
            state.value=state.value.filter((_,i)=>i!=index);
            setToLocal('pendingTodo',state.value);
        },
        sortPendingByName:(state,mode)=>{
            state.value=sortByName(state.value,mode.payload);
            setToLocal('pendingTodo',state.value);
        },
        sortPendingByDate:(state,mode)=>{
            state.value=sortByDate(state.value,mode.payload);
            setToLocal('pendingTodo',state.value);
        },
        editTaskTitle:(state,info)=>{
            const {index,newTitle}=info.payload;
            state.value[index].title=newTitle;
            setToLocal('pendingTodo',state.value);
        },
        editTakDescription:(state,info)=>{
            const {index,newDescription}=info.payload;
            state.value[index].description=newDescription;
            setToLocal('pendingTodo',state.value);
        }
    }
})
export const  {addtodo,
               movetodoup,
               movetodoDown,
               remove,
               sortPendingByName,
               sortPendingByDate,
               editTaskTitle,
               editTakDescription
              } = pendingTodoSlice.actions;

export default pendingTodoSlice.reducer