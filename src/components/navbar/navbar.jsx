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
                  sx={{
                        transition:"all 0.3s ease-in-out",
                        borderBottom:(path=="/"?"1px solid white":"1px solid transparent")}}>
            pending tasks
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/completed")}
                  sx={{transition:"all 0.3s ease-in-out",
                       borderBottom:(path=="/completed"?"1px solid white":"1px solid transparent")}}>
            completed tasks
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/dashboard")}
                  sx={{transition:"all 0.3s ease-in-out",
                       borderBottom:(path=="/dashboard"?"1px solid white":"1px solid transparent")}}>
             dashboard
          </Button>
          <Button variant="contained" 
                  onClick={()=>navigate("/about")}
                  sx={{transition:"all 0.3s ease-in-out",
                       borderBottom:(path=="/about"?"1px solid white":"1px solid transparent")}}>
            about
          </Button>
        </ButtonGroup>
        </Toolbar>
    </AppBar>
    <Outlet />
    </>
  )
}

export default memo(Navbar)
