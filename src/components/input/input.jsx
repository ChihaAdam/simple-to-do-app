
import { useState,useCallback,memo } from 'react'
import { TextField,Box ,Button, Typography} from '@mui/material';
import getDate from '../../utils/date';
import { Close } from '@mui/icons-material';
import { useDispatch} from 'react-redux';
import { addtodo } from '../../utils/state/slices/pendingTodo';
const formStyle = {
    display:"flex",
    alignItems:"flex-end",
    flexDirection:"column",
    gap:"10px",
    backgroundColor:"white",
    boxShadow:"4px 4px 3px hsla(0,0%,50%,0.3)",
    padding:"20px",
    borderRadius:"10px",
    border:"1px solid gray",
    maxWidth:"100%",
    margin:"auto",
    animation:"fadeInTransitive 0.5s ease-in-out"
}
const fieldSetStyle = {
    display:"flex",
    flexDirection:"column",
    alignItems:"baseline"
}
const containerStyle = {
    width:"100vw",
    height:"100vh",
    position:"fixed",
    top:"0px",
    left:"0px",
    display:"flex",
    alignItems:"center",
    backgroundColor:"hsla(0,0%,70%,0.2)",
    backdropFilter:"blur(2px)",
    animation:"fadeIn 0.3s ease-in-out"
}
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

function Input({close}) {
    const [task,setTask]=useState({
        title:"",
        description:""
    });

    const dispatch = useDispatch();
    const descriptionCharactersLimit=120;
    const descriptionCharacters=task.description.length;
    const titleCharacters=task.title.length;
    const titleCharactersLimit=30;
    const titleError =  task.title.trim()==="" || titleCharacters>titleCharactersLimit;
    const descriptionError =  descriptionCharacters>descriptionCharactersLimit;
    const error = ( titleError || descriptionError );


    const handleFormSubmit =useCallback((event)=>{
        event.preventDefault();
        const newTask=addInfo(task);
        dispatch(addtodo(newTask));
        close();
    },[task]);

    return (
        <Box sx={containerStyle}>   
        <Box onSubmit={handleFormSubmit} component="form" sx={formStyle}>
            <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <Typography variant="h5" sx={{fontWeight:"bold"}}>add a new task</Typography>
            <Close onClick={close} sx={{cursor:"pointer"}} />
            </Box>
            <Box component="div" sx={fieldSetStyle}>
            <label>title of the task</label>
            <TextField multiline maxRows={1}
                       value={task.title}
                       sx={{width:"350px"}}
                       onChange={(e)=>setTask({...task,title:e.target.value})}>
            </TextField>
            <label style={{color:titleError ? "red":"black"}}>{titleCharacters}/{titleCharactersLimit}</label>
            </Box>
            <Box component="div" sx={fieldSetStyle}>
            <label>add a short description</label>
            <TextField value={task.description}
                       multiline maxRows={4}
                       sx={{width:"350px"}}
                       onChange={(e)=>setTask({...task,description:e.target.value})}>
            </TextField>
            <label style={{color:descriptionError ? "red":"black"}}>{descriptionCharacters}/{descriptionCharactersLimit}</label>
            </Box>
            <Button
                    disabled={error}
                    onClick={handleFormSubmit}
                    variant="contained"> add task</Button>
        </Box>
        </Box>
    )
}

export default memo(Input)
