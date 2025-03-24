import { useContext,useCallback, lazy,Suspense } from 'react';
import styles from './list.module.css'
import { todoContext } from '../mainApp/mainApp.jsx';
import Sort from '../sort/sort';
const ListItem = lazy(()=>import('../listItem/listItem'));
function List() {
  const [todo,setTodo] =useContext(todoContext);

  const remove = useCallback((index)=>{
    setTodo(
      [...todo].filter((_,i)=>index!=i)
    )
  },[todo]);

  const moveUp=useCallback((index)=>{
    const aux=[...todo];
    [aux[index],aux[index-1]]=[aux[index-1],aux[index]]
    setTodo([...aux]);
  },[todo])

  const moveDown=useCallback((index)=>{
    moveUp(index+1);
  },[todo])

  return (
    <>
        {
            todo.length!=0 ?
          <div>
            <Sort />
              <ul className={styles.list}>
              <Suspense fallback={<div>loading...</div>}>
                {todo.map((element,index)=>
                    
                      <ListItem key={element.id}
                                index={index}
                                todo={element} 
                                last={todo.length-1}
                                moveUp={moveUp} 
                                moveDown={moveDown} 
                                remove={remove}
                    />
                    
                  )
                }
              </Suspense>
              </ul>
          </div>
        :<div className={styles.first}>enter your first task</div>
        }
  </>
  )
}

export default List
