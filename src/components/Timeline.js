import React from 'react'
import { useState, useEffect } from 'react'


const Timeline = () => {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [todo, setTodo] = useState("");
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    function handleInputChange(e) {
        setTodo(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        if (todo !== "") {
            setTodos([
                ...todo,
                {
                    id: todo.length + 1,
                    text: todo.trim()
                }
            ])
        }
        setTodo("");
    }

    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(removeItem)
    }
    console.log(todos)
    return (
        <div className="App1">
            <h1>Timeline</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="todo" placeholder="Create a new todo" value={todo} onChange={handleInputChange} />
            </form>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                        {" "}
                        <button onClick={() => handleDeleteClick(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Timeline;
