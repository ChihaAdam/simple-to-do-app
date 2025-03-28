import { Suspense,lazy, memo,useState } from 'react';
import Loading from '../../static/loadingScreen/loading';
const List =lazy(()=>import('../list/list'));
const InputElement =lazy(()=>import("../input/input"));
function PendingTodo() {
  const [addTask,setAddTask]=useState(false);
  return (
    <main className="flex flex-col gap-6 w-[95vw] m-auto">
          <Suspense fallback={<Loading />}>
            <List setAddTask={setAddTask} />
          </Suspense>  
          {addTask && <Suspense fallback="loading"><InputElement  close={()=>setAddTask(false)} /></Suspense>}
    </main>
  )
}

export default memo(PendingTodo)