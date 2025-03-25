
import styles from './mainApp.module.css'
import { Suspense,lazy, memo,useState } from 'react'

import { createContext} from 'react'
import Loading from '../static/loadingScreen/loading'
import Navbar from '../navbar/navbar'
import { AddTask } from '@mui/icons-material'
const List =lazy(()=>import('../list/list'));
const Input =lazy(()=>import("../input/input"))
export const todoContext=createContext();
const Add={
  position:"fixed",
  top:"90%",
  left:"95%",
  backgroundColor:"rgb(0, 97, 182)",
  color:"white",
  width:"55px",
  height:"55px",
  padding:"10px",
  borderRadius:"50%",
  cursor:"pointer",
  transition:"all 0.3s ease-in-out",
  '&:hover':{
    backgroundColor:'hsl(208, 100.00%, 45.70%)',
    boxShadow:"0px 0px 5px 4px hsla(208, 100.00%, 55.70%,0.7)"
  }
}
function MainApp() {
  const [addTask,setAddTask]=useState(false);
  return (
    <>
    <Navbar />
    <main className={styles.main}>
          <Suspense fallback={<Loading />}>
            <List />
          </Suspense>
          <AddTask sx={Add} onClick={()=>!addTask && setAddTask(true)}/>
          {addTask && <Suspense fallback="loading"><Input close={()=>setAddTask(false)} /></Suspense>}
    </main>
    </>
  )
}

export default memo(MainApp)