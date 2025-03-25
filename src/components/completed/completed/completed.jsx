import { useSelector } from "react-redux"
import { List,ListItem,Button, Typography, Box } from "@mui/material";
import Sort from "../sort/sort";
import styles from './completed.module.css'
import ListElement from "../listElement/listElement";
const listStyle = {
  borderTop:"1px solid gray"
}

function Completed() {
  const completed = useSelector(state=>state.completedTodo.value);
  return (
    <div className={styles.container}>
    <Sort />
    <List sx={listStyle}>
      {
        completed.map((todo,index)=><ListElement key={todo.id} todo={todo} index={index}/>)
      }
    </List>
    {
      completed.length==0 && <div className={styles.empty}>you don't have completed tasks yet</div>
    }
    </div>
  )
}

export default Completed
