import { useSelector } from "react-redux"
import {List} from "@mui/material";
import Sort from "../../sort/sort.jsx";
import styles from './completed.module.css'
import ListElement from "../listElement/listElement";
import {completedTasks} from '../../../utils/state/store.js'
import { useState } from "react";
const listStyle = {
  borderTop:"1px solid gray",
}

function Completed() {
  const completed = useSelector(completedTasks);
  const [searchTerm,setSearchTerm]=useState("");
  const filtred = [...[...completed].filter((element)=>element.title.includes(searchTerm))]
  const searchResults = filtred.length
  return (
    <div className={styles.container}>
    <Sort setSearchTerm={setSearchTerm} list="completed"/>
    <List sx={listStyle}>
      {
        filtred.map((todo,index)=><ListElement key={todo.id} todo={todo} index={index}/>)
      }
    </List>
    {
      completed.length==0 ? <div className={styles.empty}>you don't have completed tasks yet</div> :
      searchResults==0 && <div className={styles.empty}>No results found</div>
    }
    </div>
  )
}

export default Completed
