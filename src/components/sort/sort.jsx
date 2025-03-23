import { useContext , useCallback} from 'react';
import styles from './sort.module.css'
import { todoContext } from '../../App';
import { listSort } from '../../utils/sort';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
function Sort() {
  const [todo,setTodo]=useContext(todoContext);
  const [sortType,setSortType]=useLocalStorage("sortType","name");
  const [sortMode,setSortMode]=useLocalStorage("sortMode","1");

  const handleSort=useCallback((type,mode)=>{
    setSortType(type);
    setSortMode(mode);
    const sorted = listSort(todo,sortType,sortMode);
    setTodo([...sorted]);
  },[todo]);

  return (
    <div className={styles.bar}>
        <h4>sort by:</h4>
        <button className={sortType=="name"?styles.selected:styles.notSelected} 
                onClick={()=>handleSort("name",sortMode)}>
        name
        </button>
        <button className={sortType=="date"?styles.selected:styles.notSelected} 
                onClick={()=>handleSort("date",sortMode)}>
        date
        </button>
        <h4>in :</h4>
        <button className={sortMode==1?styles.selected:styles.notSelected} 
                onClick={()=>handleSort(sortType,"1")}>
                    📈
        </button>
        <button className={sortMode==0?styles.selected:styles.notSelected}
                onClick={()=>handleSort(sortType,"0")}>
        📉
        </button>
    </div>
  )
}

export default Sort
