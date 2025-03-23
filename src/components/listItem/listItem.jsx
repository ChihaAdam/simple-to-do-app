import styles from './listItem.module.css'
function ListItem({todo,moveUp,moveDown,remove,index,last}) {
  return (
    <li className={styles.listItem}>
      <div className={styles.info}>
        <p>{`${index+1}/ ${todo.title}`}</p>
        <p className={styles.subInfo}>created on :{todo.creationDate.date}</p>
        <p className={styles.subInfo}>at :{todo.creationDate.time}</p>
      </div>
      <div className={styles.buttons}>
        <button 
              onClick={()=>remove(index)} 
              className={styles.remove}>
                delete
        </button>
        <button 
              disabled={index===0}
              onClick={()=>moveUp(index)} 
              className={styles.move}>
              
                ☝️
        </button>
        <button 
              disabled={index==last}
              onClick={()=>moveDown(index)}
              className={styles.move}>
                👇
        </button>
      </div>
    </li>
  )
}

export default ListItem
