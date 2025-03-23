import styles from './input.module.css'
import { useState,useCallback } from 'react'
import getDate from '../../utils/date';
function addInfo(taskToAdd){
    const now=getDate();
    return {
        title:taskToAdd,
        creationDate:{
            date:now.date,
            time:now.time
        }
    }
}
function Input({setTodo,todo}) {
    const [task,setTask]=useState("");
    const [error,setError]=useState("");

    const handleFormSubmit =useCallback((event)=>{
        event.preventDefault();
        if (task.trim()=="") {
            setError("task can't be empty");
            return;
        }
        const newTask=addInfo(task);
        setTodo([...todo,newTask]);
        setTask("");
        setError("");
    },[task]);
    
    return (
        <>
        <form className={styles.form}>
            <input type="text" 
                   className={styles.text}
                   value={task}
                   onChange={(e)=>setTask(e.target.value)}>
            </input>
            <input onClick={handleFormSubmit}
                   className={styles.submit}
                   type="submit" 
                   value="add task">
            </input>
        </form>
        {
            error && <div className={styles.error}>{error}</div>
        }
        </>
    )
}

export default Input
