import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal,setToLocal } from "../../localStorage";
const initialState = {
    value:{
        mode:getFromLocal("viewMode") || "light",
        color:getFromLocal("color") || "bg-blue-600"
    }
}

const stylingSlice = createSlice({
    name:"stylingSlice",
    initialState,
    reducers:{
        changeMode:(state,action)=>{
            const newMode=action.payload;
            state.value.mode=newMode;
            setToLocal("viewMode",state.value);
        },
        changeColor:(state,action)=>{
            const newColor=action.payload;
            state.value.color=newColor;
            setToLocal("color",state.value.color);
        }
    }
})


export const {changeMode,changeColor}=stylingSlice.actions;

export default stylingSlice.reducer;