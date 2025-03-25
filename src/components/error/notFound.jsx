import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
function notFound() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1">Error 404 : page not found</Typography>
      <Button onClick={()=>navigate("/")} variant="contained" color="error">return to the main page</Button>
    </div>
  )
}

export default notFound
