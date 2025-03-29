
import { ListAlt, Menu} from "@mui/icons-material"
import { memo,useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {styling} from '../../utils/state/store.js'

const paths=[{
  name:"pending tasks",
  path:"/"
},
{
  name:"completed tasks",
  path:"/completed"
},
{
  name:"dashboard",
  path:"/dashboard"
},
{
  name:"settings",
  path:"/settings"
},
{
  name:"about",
  path:"/about"
}]
function Navbar() {
  const navigate=useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const [shown,setShown]=useState(false);
  const style = useSelector(styling);
  const color = style.color;
  return (
    <>
    <main className={`mb-5 p-4 ${color} text-white flex justify-between `}>
          <section className="flex gap-2 items-center justify-center">
            <ListAlt />
            <h1 className="text-4xl font-bold">to do list app</h1>
          </section>
          <section className="flex gap-6 items-center">
          {
            paths.map((element,index)=>
            <button key={index} 
                    className={`p-2 hover:bg-[#00000020] cursor-pointer transition duration-300 ease-in-out active:bg-[hsla(0,0%,100%,0.4)] border-b-transparent hidden lg:block
                                ${element.path==pathName ? "border-b-2 border-b-white":""}`}
                    onClick={()=>navigate(element.path)}>
                    {element.name}
            </button>)
          }
          <section className="lg:hidden block">
            <Menu className="cursor-pointer" onClick={()=>setShown(!shown)} />
            <ul className={`fixed right-2 bg-gray-200 z-10 ${shown ? "block":"hidden"} animate-fadeIn`}>
              {
                paths.map((element,index)=>
                  <li key={index} 
                className={` text-black p-2 hover:bg-gray-300 cursor-pointer transition duration-300 ease-in-out active:bg-gray-400 border-b-transparent
                            ${element.path==pathName ? "bg-gray-400":""}`}
                onClick={()=>navigate(element.path)}>
                {element.name}
                    </li>
                )
              }
            </ul>
          </section>
          </section>
    </main>
    <Outlet />
    </>
  )
}

export default memo(Navbar)
