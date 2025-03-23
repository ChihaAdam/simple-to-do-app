import ListItem from '../listItem/listItem';
import styles from './list.module.css'
function List({todo,setTodo}) {

  function remove(index){
      setTodo(
        [...todo].filter((_,i)=>index!=i)
      )
  }

  function moveUp(index){
    const aux=[...todo];
    [aux[index],aux[index-1]]=[aux[index-1],aux[index]]
    setTodo([...aux]);
  }

  function moveDown(index){
    moveUp(index+1);
  }

  return (
    <>
        {
            todo.length!=0 ?
            <ul className={styles.list}>
            {todo.map((element,index)=>
                <ListItem key={index}
                          index={index}
                          todo={element} 
                          last={todo.length-1}
                          moveUp={moveUp} 
                          moveDown={moveDown} 
                          remove={remove}
                />
              )
            }
            </ul>
        :<div className={styles.first}>enter your first task</div>
        }
  </>
  )
}

export default List
