import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
import { DateRange, SortByAlpha, SortRounded} from '@mui/icons-material';
import { useDispatch} from 'react-redux';
import { sortPendingByDate,sortPendingByName } from '../../utils/state/slices/pendingTodo';
import { sortCompletedByDate,sortCompletedByName } from '../../utils/state/slices/completedTodo';
function Sort({setSearchTerm,list}) {
  const [sortType,setSortType]=useLocalStorage("sortType","name");
  const [sortMode,setSortMode]=useLocalStorage("sortMode","1");
  const dispatch = useDispatch();

  const handleSort=(type,mode)=>{   
        setSortType(type);
        setSortMode(mode);
        if (list=="pending"){
                if (type=="name"){
                        dispatch(sortPendingByName(mode));
                }    
                else{
                        dispatch(sortPendingByDate(mode));
                }
        }
        else{
                if (type=="name"){
                        dispatch(sortCompletedByName(mode));
                }    
                    else{
                        dispatch(sortCompletedByDate(mode));
                }
        }
  }

  return (
    <div className="w-[95vw] m-auto flex gap-3">
        <h4>sort by :</h4>
        <div className="flex border-1 border-blue-400 rounded-lg overflow-hidden">
        <button className={`px-4 py-1 border-r-1 border-r-blue-400 cursor-pointer transition-all 
                            duration-300 ease-in-out ${sortType=="name"?"bg-blue-700 text-white":"hover:bg-blue-100"}`}
                onClick={()=>handleSort("name",sortMode)}>
        <SortByAlpha />
        </button>
        <button className={`px-4 py-1 cursor-pointer transition-all duration-300 
                            ease-in-out ${sortType=="date"?"bg-blue-700 text-white":"hover:bg-blue-100"}`}
                onClick={()=>handleSort("date",sortMode)}>
        <DateRange />
        </button>
        </div>
        <h6>in :</h6>
        <div className="flex border-1 border-violet-700 rounded-lg overflow-hidden">
        <button className={`px-4 py-1 border-r-1 border-r-violet-400 cursor-pointer transition-all 
                            duration-300 ease-in-out ${sortMode=="1"?"bg-violet-700 text-white":"hover:bg-violet-100"}`}
                onClick={()=>handleSort(sortType,"1")}>
        <SortRounded sx={{transform:"rotateX(-180deg)"}} />
        </button>
        <button className={`px-4 py-1 border-r-1 border-r-violet-400 cursor-pointer transition-all 
                            duration-300 ease-in-out ${sortMode=="0"?"bg-violet-700 text-white":"hover:bg-violet-100"}`}
                onClick={()=>handleSort(sortType,"0")}>
        <SortRounded />
        </button>
        </div>
        <input type="text" className="outline-0 border-b-1 border-b-gray-400 focus:border-b-blue-500 focus:border-b-2" onChange={e=>setSearchTerm(e.target.value)}></input>
    </div>
  )
}

export default Sort
