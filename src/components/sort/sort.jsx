import { useContext} from 'react';
import styles from './sort.module.css'
import { todoContext } from '../mainApp/mainApp.jsx';
import { listSort } from '../../utils/sort';
import { Button,Typography } from '@mui/material';
import { useLocalStorage } from '../../utils/hooks/useLocalStorage';
function Sort() {
  const [todo,setTodo]=useContext(todoContext);
  const [sortType,setSortType]=useLocalStorage("sortType","name");
  const [sortMode,setSortMode]=useLocalStorage("sortMode","1");

  const handleSort=(type,mode)=>{
    const sorted = listSort(todo,type,mode);
        setSortType(type);
    setSortMode(mode);
    setTodo([...sorted]);
  }

  return (
    <div className={styles.bar}>
        <Typography variant='h6'>sort by :</Typography>
        <Button variant={sortType=="name"?"contained":"outlined"}
                onClick={()=>handleSort("name",sortMode)}>
        name
        </Button>
        <Button variant={sortType=="date"?"contained":"outlined"}
                onClick={()=>handleSort("date",sortMode)}>
        date
        </Button>
        <Typography variant='h6'>in :</Typography>
        <Button variant={sortMode=="1"?"contained":"outlined"}
                color="secondary"
                onClick={()=>handleSort(sortType,"1")}>
                    📈
        </Button>
        <Button variant={sortMode=="0"?"contained":"outlined"}
                color="secondary"
                onClick={()=>handleSort(sortType,"0")}>
        📉
        </Button>
    </div>
  )
}

export default Sort
