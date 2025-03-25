import {lazy,Suspense} from 'react';
import styles from './list.module.css'
import Sort from '../sort/sort';
import {useSelector} from 'react-redux';
const ListItem = lazy(()=>import('../listItem/listItem'));
function List() {
  const pendingTodos = useSelector((state)=>state.pendingTodos.value);

  return (
    <>
        <Sort />
        {
            pendingTodos.length!=0 ?
          <div>
              <ul className={styles.list}>
              <Suspense fallback={<div>loading...</div>}>
                {pendingTodos.map((element,index)=>
                    
                      <ListItem key={element.id}
                                index={index}
                                todo={element} 
                                last={pendingTodos.length-1} />
                    
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
