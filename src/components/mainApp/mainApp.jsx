import { useLocalStorage } from '../../utils/hooks/useLocalStorage'
import styles from './mainApp.module.css'
import { Suspense,lazy } from 'react'
import Input from '../input/input'
import { createContext} from 'react'
import Loading from '../static/loadingScreen/loading'
const List =lazy(()=>import('../list/list'));
export const todoContext=createContext();
function MainApp() {
  const [todo,setTodo]=useLocalStorage("todoAppTasks",[]);
  
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>to do app (basic)</h1>
      <todoContext.Provider value={[todo,setTodo]}>
          <Input setTodo={setTodo} todo={todo} />
          <Suspense fallback={<Loading />}>
            <List todo={todo} setTodo={setTodo} />
          </Suspense>
      </todoContext.Provider>
    </main>
  )
}

export default MainApp