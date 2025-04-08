
import {useState} from 'react'
import {Close} from '@mui/icons-material';
import {useDispatch} from 'react-redux';
import {addtodo} from '../../utils/state/slices/pendingTodo';

const descriptionCharactersLimit=500;
const titleCharactersLimit=30;

function inputElement({close}) {
    const [task,setTask]=useState({
        title:"",
        description:""
    });

    const dispatch = useDispatch();
    
    const descriptionCharacters=task.description.length;
    const titleCharacters=task.title.length;
    
    const titleError =  task.title.trim()==="" || titleCharacters>titleCharactersLimit;
    const descriptionError =  descriptionCharacters>descriptionCharactersLimit;
    const error = ( titleError || descriptionError );

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        dispatch(addtodo(task));
        close();
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center 
                        bg-[hsla(0,0%,10%,0.3)] backdrop-blur-[2px] animate-fadeIn">   
        <form onSubmit={handleFormSubmit} 
             className="bg-white dark:bg-gray-800 border-1 rounded-lg p-6 flex flex-col gap-6 shadow-xl animate-fadeInTransitive w-[clamp(40vw,350px,90vw)]">
            <div className="flex justify-between w-full">
                <h2 className="font-bold text-2xl">Add a new task</h2>
                <Close onClick={close} className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out" />
            </div>
            <div className="flex flex-col gap-2">
                <label>title of the task</label>
                <input  value={task.title}
                        className=" outline-0 border-b-2 border-b-gray-500 focus:border-b-blue-500"
                        onChange={(e)=>setTask({...task,title:e.target.value})}>
                </input>
                
                <label className={`${titleError?"text-red-500":"text-black dark:text-white"}`}>{titleCharacters}/{titleCharactersLimit}</label>
            </div>
            <div className="flex flex-col gap-2">
                <label>add a short description</label>
                <textarea value={task.description}
                        rows="4"
                        className="p-2 outline-0 border-1 resize-none rounded-md focus:border-blue-500"
                        onChange={(e)=>setTask({...task,description:e.target.value})}>
                </textarea>
                <label className={`${descriptionError?"text-red-500":"text-black dark:text-white"}`}>
                    {descriptionCharacters}/{descriptionCharactersLimit}
                </label>
            </div>
            <button className="bg-blue-600 text-white py-1 text-lg rounded-lg 
                             hover:bg-blue-700 transition-all duration-300 
                             ease-in-out cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={error}
                    onClick={handleFormSubmit}
                    variant="contained"> add task</button>
        </form>
        </div>
    )
}

export default inputElement
