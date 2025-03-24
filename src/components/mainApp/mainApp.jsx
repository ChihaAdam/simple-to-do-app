import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import styles from './mainApp.module.css'
import { Suspense,lazy } from 'react'
import Input from '../input/input'
import { createContext} from 'react'
import Loading from '../static/loadingScreen/loading'
import Navbar from '../navbar/navbar'
const List =lazy(()=>import('../list/list'));
export const todoContext=createContext();
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
      </todoContext.Provider>
    </main>
    </>
  )
}

export default MainApp