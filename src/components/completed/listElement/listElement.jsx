
import { lazy, useState,Suspense } from "react"
const MoreInfo = lazy (()=>import("../moreInfo/moreInfo.jsx"))

function ListElement({todo,index}) {
  const [showMore,setShowMore]=useState(false);
  return (
    <li key={todo.id} className="border-b-1 border-b-gray-500 w-[95vw] flex flex-col items-baseline gap-0.5 py-2">
    <div className="flex gap-2">
        <h5 className="text-lg font-bold">{index+1}/</h5>
        <h6>{todo.title}</h6>
    </div>
    <button className="text-blue-500 hover:bg-[#007bff45] cursor-pointer px-6
                      transition-all duration-300 ease-in-out" 
          onClick={()=>setShowMore(!showMore)}>
            {showMore?"show less":"show more"}
    </button> 
    {showMore && <Suspense fallback="loading ...">
                    <MoreInfo todo={todo}></MoreInfo>
                 </Suspense>} 
    </li>
      
  )
}

export default ListElement
