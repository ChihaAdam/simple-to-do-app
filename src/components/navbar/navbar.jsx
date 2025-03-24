import { AppBar,Typography,Toolbar, CssBaseline } from "@mui/material"
import { ListAlt } from "@mui/icons-material"

const navStyle = {
    width:"100vw",
    display:"flex",
    gap:"20px"
}
function Navbar() {
  return (
    <>
        <CssBaseline />
    <AppBar position="relative" sx={{width:"100vw"}}>
        
        <Toolbar sx={navStyle}>
        <ListAlt />
        <Typography variant="h4">To do list app</Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar
