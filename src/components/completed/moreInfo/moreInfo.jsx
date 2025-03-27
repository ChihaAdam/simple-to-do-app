import { Box } from "@mui/material"

function MoreInfo({todo}) {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        gap:"10px"
      }}>
        <Box>
        <p>• created on : {todo.creationDate.date}</p>
        <p>• at : {todo.creationDate.time}</p>
        </Box>
        <Box>
        <p>• completed on : {todo.completionDate.date}</p>
        <p>• at : {todo.completionDate.time}</p>
        </Box>
    </Box>
  )
}

export default MoreInfo
