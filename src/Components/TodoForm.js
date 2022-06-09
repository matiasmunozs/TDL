import React, { useState } from 'react'

export default function TodoForm(props) {

    const [input, setInput] = useState("")


const handleSubmit = (e) =>{
e.preventDefault()
props.addTodo(input)
setInput("")
}

    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit} className='todo-form'>


                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)} 
                className='todo-input' 

               placeholder='add a todo' 

               // placeholder='add a todo' 
               //placeholder={todo.completed ? "al dia": "add todo"}



                />

                <button type="submit" className='todo-button'>add todo</button>


            </form>

        </div>
    )
}
