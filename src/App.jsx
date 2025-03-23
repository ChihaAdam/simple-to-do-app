import { useLocalStorage } from './utils/hooks/useLocalStorage'
import styles from './App.module.css'
import List from './components/list/list'
import Input from './components/input/input'
import { createContext} from 'react'
export const todoContext=createContext();
function App() {
  const [todo,setTodo]=useLocalStorage("todoAppTasks",[])
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>to do app (basic)</h1>
      <todoContext.Provider value={[todo,setTodo]}>
          <Input setTodo={setTodo} todo={todo} />
          <List todo={todo} setTodo={setTodo} />
      </todoContext.Provider>
    </main>
  )
}

export default App
