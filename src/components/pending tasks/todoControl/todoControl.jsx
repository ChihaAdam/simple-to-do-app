
import { Done, MoveDown, MoveUp } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { movetodoDown, movetodoup,remove } from '../../../utils/state/slices/pendingTodo'
import { completeTodo } from '../../../utils/state/slices/completedTodo'

function TodoControl({todo,disabledUp,disabledDown,index}) {
  const dispatch = useDispatch();
  return (
    <div className="rounded-md overflow-hidden">
        <button className="px-4 py-1 transition-all duration-300 ease-in-out bg-blue-600 text-white
                           hover:bg-blue-700 cursor-pointer"
                title="complete task"
                onClick={()=>{dispatch(completeTodo(todo));
                              dispatch(remove(index));
                        }} 
         >
        <Done className="scale-120"/>
        </button>
        {
          !disabledUp &&
          <button className="px-4 py-1 transition-all duration-300 ease-in-out bg-green-700 text-white 
                           hover:bg-green-800  cursor-pointer"
                  title="move task up"
                  onClick={()=>dispatch(movetodoup(index))} 
          >
          <MoveUp className="scale-120" />
        </button>
        }
        {
          !disabledDown &&
          <button className="px-4 py-1 transition-all duration-300 ease-in-out bg-green-700 text-white
                           hover:bg-green-800 cursor-pointer"
                  title="move task down"
                  onClick={()=>dispatch(movetodoDown(index))} 
          >
         <MoveDown className="scale-120"/>
        </button>
        }
    </div>
  )
}

export default TodoControl