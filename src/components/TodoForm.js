import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleClick = e =>{
        e.preventDefault();

        console.log(value);

        addTodo(value)

        setValue('')
    }

  return (
     <form className='TodoForm' onSubmit={handleClick}>
        <input type="text" value={value} className='todo-input' placeholder='task today...' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
     </form>
  )
}
