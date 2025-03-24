import { useState } from 'react';
import TodoControl from '../todoControl/todoControl';
import styles from './listItem.module.css'
import { Suspense,lazy,memo } from 'react';
import { Button } from '@mui/material';
const UpdateComponent = lazy(()=>import("../updateComponent/updateComponent"));

const handleShowBtnStyle = {
  width:"150px"
}
function ListItem({todo,moveUp,moveDown,remove,index,last}) {
  const [showMore,setShowMore]=useState(false);
  return (
    <li className={styles.listItem}>
      
      <div className={styles.info}>
        <p className={styles.title}><span>{index+1}/</span> {todo.title}</p>
        <Button sx={handleShowBtnStyle} onClick={()=>setShowMore(!showMore)}>{showMore ? 'show less':'show more'}</Button>
          {
            showMore ? 
            <>
              <div className={styles.infoContainer}>
                <p className={styles.subInfo}>• created on : {todo.creationDate.date}</p>
                <p className={styles.subInfo}>• at : {todo.creationDate.time}</p>
                <p className={styles.description}><span>description :</span>{todo.description}</p>
              </div>
              <Suspense fallback={<div>loading ...</div>}>
                <UpdateComponent discard={()=>setShowMore(false)} index={index} />
              </Suspense> 
            </>
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

export default memo(ListItem)
