import {useState ,useRef} from 'react'
import { Close, Edit, Update } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { editTaskTitle } from '../../../utils/state/slices/pendingTodo';
function EditTitle({todo,index}) {
  const dispatch = useDispatch();
  const [edit,setEdit]=useState(false);
  const [text,setText]=useState(todo.title);
  const numberOfCharacters=text.length;
  const allowedCharacters = 30;
  const disabled = (text.trim()==="") || numberOfCharacters>allowedCharacters;
  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(()=>editTaskTitle({
      index:index,
      newText:text
    }))
    setEdit(false);
  }
  const inputRef = useRef(null);
  return (
    <div>
        <div className="flex gap-2 ">
        <input className={`py-1 px-2 ${edit && "border-1 border-gray-500"}`}
                value={text}
                readOnly={!edit}
                onChange={e=>setText(e.target.value)}
                ref={inputRef}>
        </input>
    {
        !edit ? <Edit className="opacity-50 hover:opacity-100 cursor-pointer" onClick={()=>{
                                                            setEdit(true);
                                                            inputRef.current.focus();
                                                        }} />
             : <div className="rounded-lg overflow-hidden">
                <button className="py-1 px-4 text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300
                  ease-in-out cursor-pointer disabled:bg-gray-400 border-r-1 border-r-white"
                        disabled={disabled}
                        onClick={handleSubmit}>
                    <Update />   
                </button>
                <button className="py-1 px-4 text-white bg-red-500 hover:bg-red-700 transition-all duration-300
                                    ease-in-out cursor-pointer"
                        onClick={()=>setEdit(false)}>
                <Close />
                </button>
             </div>
    }
    </div>
    {edit && <div>{numberOfCharacters}/{allowedCharacters}</div>}
    </div>
  )
}

export default EditTitle