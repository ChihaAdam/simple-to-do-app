
import { Done, MoveDown, MoveUp } from '@mui/icons-material'
import { Button,ButtonGroup } from '@mui/material'
import { useDispatch } from 'react-redux'
import { movetodoDown, movetodoup,remove } from '../../../utils/state/slices/pendingTodo'
import { completeTodo } from '../../../utils/state/slices/completedTodo'

function TodoControl({todo,disabledUp,disabledDown,index}) {
  const dispatch = useDispatch();
  return (
    <ButtonGroup>
        <Button
            onClick={()=>{dispatch(completeTodo(todo));
                          dispatch(remove(index));
                    }} 
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