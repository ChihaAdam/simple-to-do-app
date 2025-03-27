import { useState } from 'react';
import TodoControl from '../todoControl/todoControl';
import styles from './listItem.module.css'
import { Suspense,lazy,memo } from 'react';
import EditTitle from '../editTitle/editTitle';
import {useSelector} from 'react-redux';
const EditDescription = lazy(()=>import("../editDescription/editDescription"))

const handleShowBtnStyle = {
  width:"150px"
}

function ListItem({todo,index,last}) {
  const [showMore,setShowMore]=useState(false);
  const pendingtodo=useSelector(state=>state.pendingTodos.value);
  return (
    <li className="flex justify-between items-center w-[95vw] m-auto border-b-1 border-b-gray-500 max-md:items-baseline max-md:flex-col max-md:gap-2">
      
      <div className="">
        <div className={styles.header}>
        <p className="text-2xl font-bold">{index+1})</p>
        <EditTitle todo={pendingtodo[index]} index={index}/>
        </div>
        <button className="text-blue-500">{showMore?"show less":"show more"}</button>
          {
            showMore ? 
            <>
              <div className={styles.infoContainer}>
                <p className={styles.subInfo}>• created on : {todo.creationDate.date}</p>
                <p className={styles.subInfo}>• at : {todo.creationDate.time}</p>
                <Suspense fallback="loading ...">
                  <EditDescription todo={todo} 
                                   index={index} />
                </Suspense>
              </div>
            </>
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
