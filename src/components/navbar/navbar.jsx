import { AppBar,Typography,Toolbar, CssBaseline,  ButtonGroup,Button } from "@mui/material"
import { ListAlt} from "@mui/icons-material"
import { memo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
const navStyle = {
    width:"100vw",
    display:"flex",
    justifyContent:"space-between",
    '@media (max-width:850px)':{
      flexDirection:"column"
    }
}
function Navbar({openSideBar}) {
  const navigate=useNavigate();
  const location = useLocation();
  const path = location.pathname;
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
          <Button variant="contained" 
                  onClick={()=>navigate("/")} 
                  sx={{borderBottom:(path=="/"?"1px solid white":"none")}}>
            Home
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/pending")}
                  sx={{borderBottom:(path=="/pending"?"1px solid white":"none")}}>
            pending tasks
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/completed")}
                  sx={{borderBottom:(path=="/completed"?"1px solid white":"none")}}>
            completed tasks
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/dashboard")}
                  sx={{borderBottom:(path=="/dashboard"?"1px solid white":"none")}}>
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
