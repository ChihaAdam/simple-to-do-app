
import { useState,useCallback } from 'react'
import { TextField,Box ,Button} from '@mui/material';
import getDate from '../../utils/date';

const formStyle = {
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    gap:"10px"
}
const fieldSetStyle = {
    display:"flex",
    flexDirection:"column"
}
function addInfo(task){
    const now=getDate();
    const pure = new Date;
    return {
        id:crypto.randomUUID(),
        title:task.title,
        showMore:false,
        description:task.description,
        creationDate:{
            pureDate:pure.getTime(),
            date:now.date,
            time:now.time
        }
    }
}

function Input({setTodo,todo}) {
    const [task,setTask]=useState({
        title:"",
        description:""
    });
    const descriptionCharactersLimit=120;
    const descriptionCharacters=task.description.length;
    const titleCharacters=task.title.length;
    const titleCharactersLimit=30;
    const titleError =  task.title.trim()==="" || titleCharacters>titleCharactersLimit;
    const descriptionError =  descriptionCharacters>descriptionCharactersLimit;
    const error = ( titleError || descriptionError ) ;
    const handleFormSubmit =useCallback((event)=>{
        event.preventDefault();
        const newTask=addInfo(task);
        setTodo([...todo,newTask]);
        setTask({title:"",description:""});
    },[task]);

    return (
        <Box onSubmit={handleFormSubmit} component="form" sx={formStyle}>
            <Box component="div">
            <TextField sx={fieldSetStyle}
                       value={task.title}
                       onChange={(e)=>setTask({...task,title:e.target.value})}>
            </TextField>
            <label style={{color:titleError ? "red":"black"}}>{titleCharacters}/{titleCharactersLimit}</label>
            </Box>
            <Box component="div">
            <TextField sx={fieldSetStyle}
                       value={task.description}
                       multiline maxRows={4}
                       onChange={(e)=>setTask({...task,description:e.target.value})}>
            </TextField>
            <label style={{color:descriptionError ? "red":"black"}}>{descriptionCharacters}/{descriptionCharactersLimit}</label>
            </Box>
            <Button
                    disabled={error}
                    onClick={handleFormSubmit}
                    variant="contained"> add task</Button>
        </Box>
    )
}

export default Input
