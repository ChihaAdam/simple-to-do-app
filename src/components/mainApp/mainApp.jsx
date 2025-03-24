import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import styles from './mainApp.module.css'
import { Suspense,lazy, memo } from 'react'

import { createContext} from 'react'
import Loading from '../static/loadingScreen/loading'
import Navbar from '../navbar/navbar'
import { AddTask } from '@mui/icons-material'
const List =lazy(()=>import('../list/list'));
const Input =lazy(()=>import("../input/input"))
export const todoContext=createContext();
const PlusOneStyle={
  color:"white",
  backgroundColor:"blue",

}
function MainApp() {
  const [todo,setTodo]=useLocalStorage("todoAppTasks",[]);
  
  return (
    <>
    <Navbar />
    <main className={styles.main}>
      <todoContext.Provider value={[todo,setTodo]}>
          <Input setTodo={setTodo} todo={todo} />
          <Suspense fallback={<Loading />}>
            <List todo={todo} setTodo={setTodo} />
          </Suspense>
          <AddTask />
      </todoContext.Provider>
    </main>
    </>
  )
}

export default memo(MainApp)