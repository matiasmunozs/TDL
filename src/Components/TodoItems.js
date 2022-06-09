
import React from 'react'

export default function TodoItems(props) {

    const {todo, removeTodo} = props

  return (
    <div className='todo-row'>{todo.text}
     <div className='iconsContainer icon'
     
     onClick={() => removeTodo(props.todo.id)}

     > 
      x      
      </div>
    </div>
    
  )
}
