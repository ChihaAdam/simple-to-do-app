import TodoControl from '../todoControl/todoControl';
import UpdateComponent from '../updateComponent/updateComponent';
import styles from './listItem.module.css'
import {useState} from 'react'
function ListItem({todo,moveUp,moveDown,remove,index,last}) {
  const [showMore,setShowMore]=useState(false);
  return (
    <li className={styles.listItem}>
      <div className={styles.info} onClick={()=>showMore==false && setShowMore(true)}>
        <p>{`${index+1}/ ${todo.title}`}</p>
        <p className={styles.subInfo}>created on :{todo.creationDate.date}</p>
        <p className={styles.subInfo}>at :{todo.creationDate.time}</p>
        {
          showMore ? <UpdateComponent discard={()=>setShowMore(false)} index={index} /> : null
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
