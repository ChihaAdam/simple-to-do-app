
import { Button,Box } from '@mui/material'
const gap = {
  display:"flex",
  gap:"10px"
}
function TodoControl({disabledUp,disabledDown,moveUp,moveDown,remove}) {
  return (
    <Box sx={gap}>
        <Button 
            onClick={remove} 
            color="error"
            variant='contained'>
                delete
        </Button>
        <Button 
            disabled={disabledUp}
            onClick={moveUp} 
            color="success"
            variant='contained'>
        move up
        </Button>
        <Button 
            disabled={disabledDown}
            onClick={moveDown}
            color="success"
            variant='contained'>
         move down
        </Button>
    </Box>
  )
}

export default TodoControl