import React, { useState } from 'react'
export default function TodoForm(props) {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
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

                placeholder={props.completed ? "ADD TODO": "ALL TALKS COMPLETED!, PLEASE ADD MORE"}
                />
                <button type="submit" className='todo-button'>add todo</button>


            </form>

        </div>
    )
}
