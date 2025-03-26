import {lazy,Suspense} from 'react';
import styles from './list.module.css'
import Sort from '../sort/sort';
import {useSelector} from 'react-redux';
import { AddTask } from '@mui/icons-material';
import { useState } from 'react';
import {pendingTasks} from '../../../utils/state/store.js'
const ListItem = lazy(()=>import('../listItem/listItem'));
function List({setAddTask}) {
  const pendingTodos = useSelector(pendingTasks);
  const [searchTerm,setSearchTerm]=useState("");
  const filtred = [...[...pendingTodos].filter((element)=>element.title.includes(searchTerm))]
  const searchResults = filtred.length
  return (
    <>
        <Sort setSearchTerm={setSearchTerm} />
        {
          searchResults!=0 ?
          <div>
              <ul className={styles.list}>
              <Suspense fallback={<div>loading...</div>}>
                {filtred.map((element,index)=>
                      <ListItem key={element.id}
                                index={index}
                                todo={element} 
                                last={pendingTodos.length-1} />          
                  )
                }
              </Suspense>
              </ul>
          </div>
        :
        <div className={styles.empty}>{
          pendingTodos.length==0 ? "enter your first task" : "no results found"
        }</div>
        }
        <AddTask className={styles.add} onClick={()=>setAddTask(true)} />
  </>
  )
}

export default List
