import { useLocalStorage } from './utils/hooks/useLocalStorage'
import styles from './App.module.css'
import List from './components/list/list'
import Input from './components/input/input'

function App() {
  const [todo,setTodo]=useLocalStorage("todoAppTasks",[])

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>to do app (basic)</h1>
      <Input setTodo={setTodo} todo={todo} />
      <List todo={todo} setTodo={setTodo} />
    </main>
  )
}

export default App
