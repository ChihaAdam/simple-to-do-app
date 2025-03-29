import {useDispatch } from 'react-redux'
import { changeColor } from '../utils/state/slices/style';
const colors = ["bg-blue-600","bg-green-700","bg-red-600","bg-violet-500","bg-yellow-500",
                "bg-gray-500","bg-cyan-500","bg-orange-500","bg-pink-500","bg-sky-500"]
function Settings() {
  const Dispatch = useDispatch();
  return (
    <div className='m-5'>
        <div className="flex gap-3 items-start">
            <label className="text-lg font-bold ">color :</label>
            <div className="grid grid-cols-5 w-fit gap-2">
                {colors.map((color,index)=><div key={index}
                                                className={`cursor-pointer border-1 w-7 h-7 rounded-full ${color}`}
                                                onClick={()=>Dispatch(changeColor(color))}>
                                               </div>)}
            </div>
        </div>
    </div>
  )
}

export default Settings
