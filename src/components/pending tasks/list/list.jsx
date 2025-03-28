import {lazy,Suspense} from 'react';
import Sort from '../../sort/sort.jsx';
import {useSelector} from 'react-redux';
import { AddTask } from '@mui/icons-material';
import { useState } from 'react';
import {pendingTasks} from '../../../utils/state/store.js'
const ListItem = lazy(()=>import('../listItem/listItem'));
function List({setAddTask}) {
  const pendingTodos = useSelector(pendingTasks);
  const [searchTerm,setSearchTerm]=useState("");
  const filtred = [...pendingTodos].filter((element)=>element.title.includes(searchTerm))
  const searchResults = filtred.length
  return (
    <>
        <Sort setSearchTerm={setSearchTerm} list="pending" />
        {
          searchResults!=0 ?
          <div>
              <ul className="flex flex-col w-[95vw] border-t-1 m-auto animate-fadeInTransitive border-gray-500">
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
        <div className="w-[95vw] m-auto border-t-1 border-t-gray-500 text-center pt-2">{
          pendingTodos.length==0 ? "enter your first task" : "no results found"
        }</div>
        }
        <div className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-sm hover:shadow-blue-600
                       text-white fixed bottom-8 right-8 rounded-full all 0.3s ease flex justify-center items-center p-3 animate-fadeIn" 
             onClick={()=>setAddTask(true)}>
              <AddTask className="scale-120" />
        </div>
        
  </>
  )
}

export default List
