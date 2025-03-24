
import { Done, MoveDown, MoveUp } from '@mui/icons-material'
import { Button,Box, ButtonGroup } from '@mui/material'
const gap = {
  display:"flex",
  width:"220px",
  justifyContent:"space-between",
}
function TodoControl({disabledUp,disabledDown,moveUp,moveDown,remove}) {
  return (
    <ButtonGroup>
        <Button
            onClick={remove} 
            color="primary">
        <Done />
        </Button>
        {
          !disabledUp &&
          <Button 
            onClick={moveUp} 
            color="secondary">
          <MoveUp />
        </Button>
        }
        {
          !disabledDown &&
          <Button 
            onClick={moveDown}
            color="secondary">
         <MoveDown />
        </Button>
        }
    </ButtonGroup>
  )
}

export default TodoControl