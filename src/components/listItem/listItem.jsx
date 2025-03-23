import TodoControl from '../todoControl/todoControl';
import styles from './listItem.module.css'
import {useState} from 'react'
import { Suspense,lazy } from 'react';
const UpdateComponent = lazy(()=>import("../updateComponent/updateComponent"));
function ListItem({todo,moveUp,moveDown,remove,index,last}) {
  const [showMore,setShowMore]=useState(false);
  return (
    <li className={styles.listItem}>
      <div className={styles.number}>{index+1}</div>
      <div className={styles.info} onClick={()=>showMore==false && setShowMore(true)}>
        <p className={styles.title}>{` ${todo.title}`}</p>
        <p className={styles.subInfo}>• created on : {todo.creationDate.date}</p>
        <p className={styles.subInfo}>• at : {todo.creationDate.time}</p>
        {
          showMore ? 
          <Suspense fallback={<div>loading ...</div>}>
            <UpdateComponent discard={()=>setShowMore(false)} index={index} />
          </Suspense> 
          : null
        }
      </div>
        <TodoControl disabledDown={index==last}
                     disabledUp={index==0}
                     moveDown={()=>moveDown(index)}
                     moveUp={()=>moveUp(index)}
                     remove={()=>remove(index)}
        />
    </li>
  )
}

export default ListItem
