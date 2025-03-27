
import { ListAlt, Menu} from "@mui/icons-material"
import { memo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate=useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
    <main className="mb-4 bg-blue-600 text-white flex justify-between w-[100vw] p-4">
          <section className="flex gap-2 items-center justify-center">
            <ListAlt className="text-4xl" />
          <h1 className="text-4xl">to do list app</h1>
          </section>
          <section class="flex gap-6 items-center">
          <button onClick={()=>navigate("/")}>
            pending tasks
          </button>
          <button variant="contained" 
                  onClick={()=>navigate("/completed")}>
            completed tasks
          </button>
          <button 
                  onClick={()=>navigate("/dashboard")}>
             dashboard
          </button>
          <button variant="contained" 
                  onClick={()=>navigate("/about")}>
            about
          </button>
          <Menu />
          </section>
    </main>
    <Outlet />
    </>
  )
}

export default memo(Navbar)
