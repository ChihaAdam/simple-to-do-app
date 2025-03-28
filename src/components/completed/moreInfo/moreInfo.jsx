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
    </div>
  )
}

export default MoreInfo
