import { useSelector } from "react-redux"
import Sort from "../../sort/sort.jsx";
import styles from './completed.module.css'
import ListElement from "../listElement/listElement";
import {completedTasks} from '../../../utils/state/store.js'
import { useState } from "react";

function Completed() {
  const completed = useSelector(completedTasks);
  const [searchTerm,setSearchTerm]=useState("");
  const filtred = [...[...completed].filter((element)=>element.title.includes(searchTerm))]
  const searchResults = filtred.length
  return (
    <div className={styles.container}>
    <Sort setSearchTerm={setSearchTerm} list="completed"/>
    <ul className="border-t-1 border-t-gray-500">
      {
        filtred.map((todo,index)=><ListElement key={todo.id} todo={todo} index={index}/>)
      }
    </ul>
    {
      completed.length==0 ? <div className={styles.empty}>you don't have completed tasks yet</div> :
      searchResults==0 && <div className={styles.empty}>No results found</div>
    }
    </div>
  )
}

export default Completed
