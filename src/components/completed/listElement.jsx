
import { lazy,Suspense } from "react"
const MoreInfo = lazy (()=>import("./moreInfo.jsx"))

function ListElement({todo,index}) {
  return (
    <details className="border-b-1 border-b-gray-500 w-[95vw] flex flex-col items-baseline gap-0.5 py-2 transition-all duration-300 ease-in-out">
      <summary className="leading-6">
        <div className="flex gap-2 float-right">
            <h5 className="text-lg font-bold">{index+1}/</h5>
            <h6>{todo.title}</h6>
        </div>
      </summary>

      <Suspense fallback="loading ...">
          <MoreInfo todo={todo}></MoreInfo>
      </Suspense> 
    </details>
      
  )
}

export default ListElement
