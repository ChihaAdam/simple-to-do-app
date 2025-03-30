function MoreInfo({todo}) {
  return (
    <div className="flex flex-col gap-2">
        <div>
        <p>• created on : {todo.creationDate.date}</p>
        <p>• at : {todo.creationDate.time}</p>
        </div>
        <div>
        <p>• completed on : {todo.completionDate.date}</p>
        <p>• at : {todo.completionDate.time}</p>
        </div>
        <div>
          <p>description :</p>
          <textarea className="outline-0 border-1 border-gray-500 resize-none" rows="4" value={todo.description} readOnly ></textarea>
        </div>
    </div>
  )
}

export default MoreInfo
