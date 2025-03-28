import { useState ,useRef} from 'react'
import { Close, Edit, Update } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { editTakDescription } from '../../../utils/state/slices/pendingTodo';
function EditDescription({todo,index}) {
  const [edit,setEdit]=useState(false);
  const dispatch=useDispatch();
  const [text,setText]=useState(todo.description);
  const numberOfCharacters=text.length;
  const allowedCharacters = 500;
  const disabled =numberOfCharacters>allowedCharacters;
  const handleSubmit = ()=>{
    dispatch(editTakDescription({
      index:index,
      newDescription:text
    }))
    setEdit(false);
  }
  const inputRef = useRef(null);
  return (
        <div className="flex flex-col gap-2 relative">
        <label className="font-bold">description :</label>
        <textarea className={`resize-none border-1 border-gray-400 ${!edit? "outline-0":""}`}
                value={text}
                readOnly={!edit}
                rows="4"
                onChange={e=>setText(e.target.value)}
                ref={inputRef}>
        </textarea>
        {edit && <div>{numberOfCharacters}/{allowedCharacters}</div>}
        {
        !edit ? <Edit className="absolute top-[45%] left-[105%] opacity-50 hover:opacity-100 cursor-pointer" 
                      onClick={()=>{
                                  setEdit(true);
                                  inputRef.current.focus();
                              }} />
             : <div className="rounded-lg overflow-hidden w-fit">
                <button className="bg-blue-600 text-white py-1 px-4 hover:bg-blue-700 
                                   transition-all duration-300 ease-in-out cursor-pointer border-r-1 border-r-white 
                                   disabled:bg-gray-400 disabled:cursor-auto"
                        onClick={handleSubmit}
                        disabled={disabled}>
                        <Update className="scale-120" />
                </button>
                <button className="bg-red-600 text-white py-1 px-4  hover:bg-red-700 
                                   transition-all duration-300 ease-in-out cursor-pointer"
                         onClick={()=>setEdit(false)} >        
                        
                        <Close className="scale-130" />
                </button>
             </div>
        }
    </div>

  )
}

export default EditDescription