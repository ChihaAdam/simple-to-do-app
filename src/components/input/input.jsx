
import { useState,useCallback } from 'react'
import { TextField,Box ,Button} from '@mui/material';
import getDate from '../../utils/date';

const formStyle = {
    display:"flex",
    alignItems:"center",
    gap:"10px"
}

function addInfo(taskToAdd){
    const now=getDate();
    const pure = new Date;
    return {
        id:crypto.randomUUID(),
        title:taskToAdd,
        creationDate:{
            pureDate:pure.getTime(),
            date:now.date,
            time:now.time
        }
    }
}

function Input({setTodo,todo}) {
    const [task,setTask]=useState("");
    const error = (task.trim()==="") ;

    const handleFormSubmit =useCallback((event)=>{
        event.preventDefault();
        if (task.trim()=="") {
            setError("task can't be empty");
            return;
        }
        const newTask=addInfo(task);
        setTodo([...todo,newTask]);
        setTask("");
    },[task]);

    return (
        <Box onSubmit={handleFormSubmit} component="form" sx={formStyle}>
            <TextField color={error?"error":"primary"}
                       value={task}
                       onChange={(e)=>setTask(e.target.value)}>
            </TextField>
            <Button component="submit"
                    disabled={error}
                    variant="contained"> add task</Button>
        </Box>
    )
}

export default Input
