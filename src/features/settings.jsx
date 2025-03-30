import {useDispatch,useSelector } from 'react-redux'
import { changeColor, changeMode } from '../utils/state/slices/style';
import { styling } from '../utils/state/store';

const colors = ["bg-blue-600","bg-green-700","bg-red-600","bg-violet-500","bg-yellow-500",
                "bg-gray-500","bg-cyan-500","bg-orange-500","bg-pink-500","bg-sky-500"]

function Settings() {
  const Dispatch = useDispatch();
  const style = useSelector(styling);
  const colorMode=style.color;
  const mode=style.mode;
  return (
    <div className={`m-5 animate-fadeInTransitive flex flex-col gap-12`}>
        <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold ">color :</h3>
            <div className="grid grid-cols-5 w-fit gap-2">
                {colors.map((color,index)=><div key={index}
                                                className={`cursor-pointer transition-all duration-300 ease-in-out  w-7 h-7 rounded-full 
                                                            ${color} ${colorMode==color? "border-2 scale-120":"border-1"}`}
                                                onClick={()=>Dispatch(changeColor(color))}>
                                               </div>)}
            </div>
        </div>
        <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold ">mode :</h3>
          <div className='flex gap-2 items-center'>
            <input type="radio" 
                   name="mode"
                   className="accent-red-500 transition-all duration-300 ease-in-out size-5 hover:scale-120 cursor-pointer" 
                   checked={mode=="light"}
                   onChange={()=>Dispatch(changeMode('light'))}></input>
            <span className="text-lg">light mode</span>
          </div>
          <div className="flex gap-2 items-center">
            <input type="radio"
                   name="mode" 
                   className="accent-red-500 size-5 hover:scale-120 cursor-pointer transition-all duration-300 ease-in-out"
                   checked={mode=="dark"}
                   onChange={()=>Dispatch(changeMode('dark'))}></input>
            <span className="text-lg">dark mode</span>
          </div>
        </div>
    </div>
  )
}

export default Settings
