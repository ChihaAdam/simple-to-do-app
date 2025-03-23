import styles from './TodoControl.module.css'
function TodoControl({disabledUp,disabledDown,moveUp,moveDown,remove}) {
  return (
    <div className={styles.buttons}>
        <button 
            onClick={remove} 
            className={styles.remove}>
                delete
        </button>
        <button 
            disabled={disabledUp}
            onClick={moveUp} 
            className={styles.move}>
            
                ☝️
        </button>
        <button 
            disabled={disabledDown}
            onClick={moveDown}
            className={styles.move}>
                👇
        </button>
    </div>
  )
}

export default TodoControl