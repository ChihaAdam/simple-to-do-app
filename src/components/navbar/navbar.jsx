import { AppBar,Typography,Toolbar, CssBaseline,  ButtonGroup,Button } from "@mui/material"
import { ListAlt} from "@mui/icons-material"
import { memo } from "react"
import { Outlet } from "react-router-dom"
const navStyle = {
    width:"100vw",
    display:"flex",
    justifyContent:"space-between",
    '@media (max-width:850px)':{
      flexDirection:"column"
    }
}
function Navbar({openSideBar}) {
  return (
    <>
      <CssBaseline />
    <AppBar position="relative" sx={{width:"100vw"}}>
        <Toolbar sx={navStyle}> 
        <Typography variant="h4"><ListAlt onClick={openSideBar} /> To do list app</Typography>
        <ButtonGroup variant="outlined" sx={{
          display:"flex",
          '@media (max-width:500px)':{
            flexDirection:"column"
          }
        }}>
          <Button variant="contained">
            Home
          </Button>
          <Button variant="contained">
            pending tasks
          </Button>
          <Button variant="contained">
            completed tasks
          </Button>
          <Button variant="contained">
            dashboard
          </Button>
        </ButtonGroup>
        </Toolbar>
    </AppBar>
    <Outlet />
    </>
  )
}

export default memo(Navbar)
