import { useContext, useState,useCallback } from 'react'
import styles from './UpdateComponent.module.css' 
import { todoContext } from '../../App'

function UpdateComponent({discard,index}) {
  const [todo,setTodo]=useContext(todoContext);
  const [updated,setUpdated]=useState("");

  const handleChange =useCallback((event)=>{
    event.preventDefault();
    let T = [...todo];
    T[index].title=updated.trim();
    setTodo([...T]);
    discard();
  },[updated]);
  
  return (
    <form className={styles.form}>

        <input type="text" 
               className={styles.text}
               onChange={(e)=>setUpdated(e.target.value)}>
        </input>

        <input type="button"
               className={styles.discard}
               value="❌" 
               onClick={discard}>
        </input>

        <input type="submit"
               value="✔️" 
               className={styles.submit}
               disabled={updated.trim()===""} 
               onClick={(event)=>handleChange(event)}>
        </input>

    </form>
  )
}

export default UpdateComponent
