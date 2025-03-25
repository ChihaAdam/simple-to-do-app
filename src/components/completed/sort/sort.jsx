
import styles from './sort.module.css'
import { Button,ButtonGroup,Input,Typography } from '@mui/material';
import { useLocalStorage } from '../../../utils/hooks/useLocalStorage';
import { DateRange, SortByAlpha, SortRounded} from '@mui/icons-material';
import {useDispatch} from 'react-redux';
import { sortCompletedByDate,sortCompletedByName } from '../../../utils/state/slices/completedTodo';
function Sort({setSearchTerm}) {
  const [sortType,setSortType]=useLocalStorage("sortCompletedType","name");
  const [sortMode,setSortMode]=useLocalStorage("sortCompletedMode","1");
  const dispatch = useDispatch();
  const handleSort=(type,mode)=>{   
        setSortType(type);
        setSortMode(mode);
        if (type=="name"){
            dispatch(sortCompletedByName(mode));
        }    
        else{
            dispatch(sortCompletedByDate(mode));
        }
  }

  return (
    <div className={`${styles.bar}`}>
        <Typography sx={{fontSize:"16px"}} variant='h6'>sort by :</Typography>
        <ButtonGroup>
        <Button variant={sortType=="name"?"contained":"outlined"}
                onClick={()=>handleSort("name",sortMode)}>
        <SortByAlpha />
        </Button>
        <Button variant={sortType=="date"?"contained":"outlined"}
                onClick={()=>handleSort("date",sortMode)}>
        <DateRange />
        </Button>
        </ButtonGroup>
        <Typography sx={{fontSize:"16px"}} variant='h6 '>in :</Typography>
        <ButtonGroup>
        <Button variant={sortMode=="1"?"contained":"outlined"}
                color="secondary"
                onClick={()=>handleSort(sortType,"1")}>
        <SortRounded sx={{transform:"rotateX(-180deg)"}}/>
        </Button>
        <Button variant={sortMode=="0"?"contained":"outlined"}
                color="secondary"
                onClick={()=>handleSort(sortType,"0")}>
        <SortRounded />
        </Button>
        </ButtonGroup>
        <Input onChange={e=>setSearchTerm(e.target.value)}></Input>
    </div>
  )
}

export default Sort
