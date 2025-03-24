import { todoContext } from '../mainApp/mainApp';
import TodoControl from '../todoControl/todoControl';
import styles from './listItem.module.css'
import {useContext, useState} from 'react'
import { Suspense,lazy } from 'react';
import { Button } from '@mui/material';
const UpdateComponent = lazy(()=>import("../updateComponent/updateComponent"));

const handleShowBtnStyle = {
  maxWidth:"150px"
}

function ListItem({moveUp,moveDown,remove,index,last}) {
  const [todos,setTodos]=useContext(todoContext);
  const todo = todos[index];
  function handleShowMore(){
    let T=[...todos];
    T[index].showMore=true
    setTodos([...T]);
  }
  function handleShowLess(){
    let T=[...todos];
    T[index].showMore=false
    setTodos([...T]);
  }
  return (
    <li className={styles.listItem}>
      
      <div className={styles.info}>
        <p className={styles.title}>{` ${todo.title}`}</p>
        <Button sx={handleShowBtnStyle} onClick={todo.showMore ? handleShowLess:handleShowMore}>{todo.showMore ? 'show less':'show more'}</Button>
          {
            todo.showMore ? 
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

export default ListItem
