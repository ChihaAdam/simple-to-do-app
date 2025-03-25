
import { Done, MoveDown, MoveUp } from '@mui/icons-material'
import { Button,ButtonGroup } from '@mui/material'
import { useDispatch } from 'react-redux'
import { movetodoDown, movetodoup,remove } from '../../utils/state/slices/pendingTodo'
const gap = {
  display:"flex",
  width:"220px",
  justifyContent:"space-between",
}
function TodoControl({disabledUp,disabledDown,index}) {
  const dispatch = useDispatch()
  return (
    <ButtonGroup>
        <Button
            onClick={()=>dispatch(remove(index))} 
            color="primary">
        <Done />
        </Button>
        {
          !disabledUp &&
          <Button 
          onClick={()=>dispatch(movetodoup(index))} 
            color="secondary">
          <MoveUp />
        </Button>
        }
        {
          !disabledDown &&
          <Button 
            onClick={()=>dispatch(movetodoDown(index))} 
            color="secondary">
         <MoveDown />
        </Button>
        }
    </ButtonGroup>
  )
}

export default TodoControl