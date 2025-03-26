
import { useState } from "react"
import {ListItem,Typography,Button,Box} from "@mui/material";
import styles from './listElement.module.css';
const listElementStyle = {
  borderBottom:"1px solid gray",
  display:"flex",
  flexDirection:"column",
  width:"95vw",
  alignItems:"baseline",
  fontSize:"16px"
}
function ListElement({todo,index}) {
  const [showMore,setShowMore]=useState(false);
  return (
    <ListItem key={todo.id} sx={listElementStyle}>
    <Box sx={{
      display:"flex",
      gap:"10px"
    }}>
        <Typography variant="h5">{index+1}/</Typography>
        <Typography variant="h6"> {todo.title}</Typography>
    </Box>
    <Button onClick={()=>setShowMore(!showMore)}>{showMore?"show less":"show more"}</Button> 
    {showMore && <Box sx={{
                            display:"flex",
                            flexDirection:"column",
                            gap:"10px"
                          }}>
                  <Box>
                      <p className={styles.subInfo}>• created on : {todo.creationDate.date}</p>
                      <p className={styles.subInfo}>• at : {todo.creationDate.time}</p>
                  </Box>
                  <Box>
                  <p className={styles.subInfo}>• completed on : {todo.completionDate.date}</p>
                  <p className={styles.subInfo}>• at : {todo.completionDate.time}</p>
                  </Box>
    </Box>} 
    </ListItem>
      
  )
}

export default ListElement
