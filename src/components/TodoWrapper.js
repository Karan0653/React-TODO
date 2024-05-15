import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos,{id:uuidv4(), task:todo, complete:false, isEditing: false}])
        
    }
    // console.log(todos);



    const toggleComplete = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodo = id => {
      setTodos(todos.map( todo => todo.id === id? {...todo, isEditing: true} : todo))
    }

    const updateTodo = (item, id) => {
      setTodos(todos.map( todo => todo.id === id? {...todo,isEditing:false,task:item}: todo))
    }

  

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo = {addTodo} />
        {todos.map( todo => 
         todo.isEditing ?<EditTodoForm key={todo.id} updateTodo={ updateTodo} item={todo.task} id={todo.id}/> : <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
        ) }
    </div>
  )
}
