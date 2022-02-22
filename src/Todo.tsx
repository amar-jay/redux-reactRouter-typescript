import React from 'react'
import styles from './styles/Todo.module.css';
import {
  deleteTodo,
  addTodo,
  selectTodos,
} from './app/todosReducer';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { todoType } from './app/todosReducer';


function Todo() {
    // const [todos, setTodos] = useState<todoType[]>([])
    // prevoius todos = current todos.data
    const dispatch = useAppDispatch();
    const {todos} = useAppSelector(selectTodos);

    const handleTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let rawData = new FormData(e.currentTarget);
        const data:todoType = JSON.parse(JSON.stringify(Object.fromEntries(rawData)))

        // dont add data if name is empty
        if(data.name.length > 0){
        data.id = todos.data.length + 1
            dispatch(addTodo(data))
          // setTodos([...todos, data])
        } else {
          alert('Stop faking you aint John Cena. let me see you!!')
        }
    }

    const removeTodo = (todo: todoType) => {
      dispatch(deleteTodo(todo))
     // setTodos(todos.filter(t => t.id !== todo.id))
    }

    const completeTodo = (event: React.BaseSyntheticEvent, todo: todoType) => {
      // dispatch(completedTodo(todo))
      if (event.target.className !== styles.completed) event.target.className = styles.completed 
      else event.target.className = styles.notcompleted

    }
  return (
    <div>
        <form onSubmit={(post) => handleTodo(post)} className={styles.form}>
             <h1>Todo</h1>
            <input type="text" name='name' placeholder='name' onFocus={(e) => e.target.value = ""}/>
            <input type="text" name='description' placeholder='description' onFocus={(e) => e.target.value = ""}/>
            <button >Add</button>
        </form>
        <ul className={styles.todos}>
            {todos.data.map((todo, index) => {
                return (
                    <li key={index}>

                        <p onClick={(e) => completeTodo(e, todo)}>{todo.name}</p>
                        <span>{todo.description}</span>
                    <button onClick={() => removeTodo(todo)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    </div>


    )
  }

    export default Todo
