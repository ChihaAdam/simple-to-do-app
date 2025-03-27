
import { lazy, useState,Suspense } from "react"
import {ListItem,Typography,Button,Box} from "@mui/material";
const MoreInfo = lazy (()=>import("../moreInfo/moreInfo.jsx"))
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
    {showMore && <Suspense fallback="loading ...">
                    <MoreInfo todo={todo}></MoreInfo>
                 </Suspense>} 
    </ListItem>
      
  )
}

export default ListElement
