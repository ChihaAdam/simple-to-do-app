import { useContext, useState } from 'react'
import styles from './UpdateComponent.module.css' 
import { todoContext } from '../../App'

function UpdateComponent({discard,index}) {
  const [todo,setTodo]=useContext(todoContext);
  const [updated,setUpdated]=useState("");
  function handleChange(event){
        event.preventDefault();
        let T = [...todo];
        T[index].title=updated.trim();
        setTodo([...T]);
        discard();
  }
  return (
    <form className={styles.form}>

        <input type="text" 
               className={styles.text}
               onChange={(e)=>setUpdated(e.target.value)}>
        </input>

        <input type="button"
               className={styles.button}
               value="❌" 
               onClick={discard}>
        </input>

        <input type="submit"
               value="✔️" 
               className={styles.button}
               disabled={updated.trim()===""} 
               onClick={(event)=>handleChange(event)}>
        </input>

    </form>
  )
}

export default UpdateComponent
