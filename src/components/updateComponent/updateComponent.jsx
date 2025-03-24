import { useContext, useState,useCallback } from 'react'
import { todoContext } from '../mainApp/mainApp.jsx';
import { TextField,Box ,Button} from '@mui/material';

const formStyle = {
  display:"flex",
  alignItems:"center",
  gap:"10px"
} 

function UpdateComponent({discard,index}) {
  const [todo,setTodo]=useContext(todoContext);
  const [updated,setUpdated]=useState("");

  const handleChange =useCallback((event)=>{
    event.preventDefault();
    let T = [...todo];
    T[index].title=updated.trim();
    setTodo([...T]);
    discard();
  },[updated]);
  
  return (
    <Box sx={formStyle} component="form" onSubmit={handleChange}>

        <TextField onChange={(e)=>setUpdated(e.target.value)}>
        </TextField>

        <Button color="warning"
                variant='contained'
                onClick={discard}>
          discard
        </Button>

        <Button variant='contained'
                disabled={updated.trim()===""} 
                onClick={(event)=>handleChange(event)}>
        update
        </Button>

    </Box>
  )
}

export default UpdateComponent
