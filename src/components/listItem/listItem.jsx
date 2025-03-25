import { useState } from 'react';
import TodoControl from '../todoControl/todoControl';
import styles from './listItem.module.css'
import { Suspense,lazy,memo } from 'react';
import { Button, Typography } from '@mui/material';
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
    <li className={styles.listItem}>
      
      <div className={styles.info}>
        <div className={styles.header}>
        <Typography variant="h5">{index+1}</Typography>
        <EditTitle todo={pendingtodo[index]} index={index}/>
        </div>
        <Button sx={handleShowBtnStyle} onClick={()=>setShowMore(!showMore)}>{showMore ? 'show less':'show more'}</Button>
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
        <TodoControl disabledDown={index==last}
                     disabledUp={index==0}
                     index={index}
        />
    </li>
  )
}

export default memo(ListItem)
