import { useState } from 'react';
import TodoControl from '../todoControl/todoControl';
import { Suspense,lazy,memo } from 'react';
import EditTitle from '../editTitle/editTitle';
import {useSelector} from 'react-redux';
const EditDescription = lazy(()=>import("../editDescription/editDescription"))

function ListItem({todo,index,last}) {
  const [showMore,setShowMore]=useState(false);
  const pendingtodo=useSelector(state=>state.pendingTodos.value);
  return (
    <li className="flex justify-between items-baseline w-[95vw] m-auto border-b-1 
                border-b-gray-500 max-md:items-baseline max-md:flex-col max-md:gap-2 py-1
                animate-fadeInTransitiveReverse">
      
      <div>
        <div className="flex">
        <p className="text-2xl font-bold">{index+1})</p>
        <EditTitle todo={pendingtodo[index]} 
                   index={index}
                   />
        </div>
        <button className="text-blue-500 hover:bg-[#007bff45] cursor-pointer px-6 py-1
                           transition-all duration-300 ease-in-out" 
                onClick={()=>setShowMore(!showMore)}>
                        {showMore?"show less":"show more"}
                      </button>
          {
            showMore ? 
              <div>
                <p>• created on : {todo.creationDate.date}</p>
                <p>• at : {todo.creationDate.time}</p>
                <Suspense fallback="loading ...">
                  <EditDescription todo={todo} 
                                   index={index}
                                    />
                </Suspense>
              </div>
            : null
          }
      </div>
        <TodoControl todo={todo}
                     disabledDown={index==last}
                     disabledUp={index==0}
                     index={index}
        />
    </li>
  )
}

export default memo(ListItem)
