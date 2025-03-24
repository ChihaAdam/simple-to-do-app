import { useContext, useState ,useRef} from 'react'
import styles from './editTitle.module.css'
import { todoContext } from '../mainApp/mainApp'
import { Close, Edit, Update } from '@mui/icons-material';
import { Button, ButtonGroup } from '@mui/material';
function EditTitle({todo,index}) {
  const [edit,setEdit]=useState(false);
  const [todos,setTodos]=useContext(todoContext);
  const [text,setText]=useState(todo.title);
  const numberOfCharacters=text.length;
  const allowedCharacters = 30;
  const disabled = (text.trim()==="") || numberOfCharacters>allowedCharacters;
  const handleSubmit = (event)=>{
    let T = [...todos];
    T[index]={...T[index],title:text.trim()}
    setTodos([...T]);
    setEdit(false);
  }
  const inputRef = useRef(null);
  return (
    <div className={styles.container}>
        <div className={styles.inputt}>
        <input className={`${styles.title} ${edit? styles.editMode:null}`}
                value={text}
                readOnly={!edit}
                onChange={e=>setText(e.target.value)}
                ref={inputRef}>
        </input>
    {
        !edit ? <Edit className={styles.pen} onClick={()=>{
                                                            setEdit(true);
                                                            inputRef.current.focus();
                                                        }} />
             : <ButtonGroup>
                <Button disabled={disabled}
                        variant="contained"
                        onClick={handleSubmit}>
                    <Update />   
                </Button>
                <Button variant="contained" color="error" onClick={()=>setEdit(false)}>
                <Close />
                </Button>
             </ButtonGroup>
    }
    </div>
    {edit && <div>{numberOfCharacters}/{allowedCharacters}</div>}
    </div>
  )
}

export default EditTitle