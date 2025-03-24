import { useContext, useState,useCallback } from 'react'
import { todoContext } from '../mainApp/mainApp.jsx';
import { TextField,Box ,Button, ButtonGroup} from '@mui/material';
import { Close, Update } from '@mui/icons-material';

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

        <ButtonGroup>
        <Button color="warning"
                variant='contained'
                onClick={discard}>
          <Close />
        </Button>

        <Button variant='contained'
                disabled={updated.trim()===""} 
                onClick={(event)=>handleChange(event)}>
        <Update />
        </Button>
        </ButtonGroup>

    </Box>
  )
}

export default UpdateComponent
