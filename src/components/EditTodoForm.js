import React, { useState } from 'react'

export const EditTodoForm = ({updateTodo , item, id}) => {

    const [value, setValue] = useState(item);

    const handleClick = e =>{
        e.preventDefault();

        console.log(value);

        updateTodo(value, id)
    }

  return (
     <form className='TodoForm' onSubmit={handleClick}>
        <input type="text" value={value} className='todo-input' placeholder='task today...' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
     </form>
  )
}


