import styles from './pendingTodo.module.css';
import { Suspense,lazy, memo,useState } from 'react';
import Loading from '../../static/loadingScreen/loading';
import { AddTask } from '@mui/icons-material';
const List =lazy(()=>import('../list/list'));
const Input =lazy(()=>import("../input/input"));
function PendingTodo() {
  const [addTask,setAddTask]=useState(false);
  return (
    <main className={styles.main}>
          <Suspense fallback={<Loading />}>
            <List addTask={addTask} setAddTask={setAddTask} />
          </Suspense>  
          {addTask && <Suspense fallback="loading"><Input close={()=>setAddTask(false)} /></Suspense>}
    </main>
  )
}

export default memo(PendingTodo)