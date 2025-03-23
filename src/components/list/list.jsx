import { useContext,useCallback } from 'react';
import ListItem from '../listItem/listItem';
import styles from './list.module.css'
import { todoContext } from '../../App';
import Sort from '../sort/sort';
import { Suspense } from 'react';
import Loading from '../static/loadingScreen/loading';
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
            <Suspense loading={<Loading />}>
              <ul className={styles.list}>
              {todo.map((element,index)=>
                  <ListItem key={index}
                            index={index}
                            todo={element} 
                            last={todo.length-1}
                            moveUp={moveUp} 
                            moveDown={moveDown} 
                            remove={remove}
                  />
                )
              }
              </ul>
            </Suspense>
          </div>
        :<div className={styles.first}>enter your first task</div>
        }
  </>
  )
}

export default List
