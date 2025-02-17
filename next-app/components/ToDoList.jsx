"use client"
import { createTodo } from '@/actions/todo';
import React from 'react'

export default function ToDoList() {
    const [todos, setTodos] = React.useState([]);
    const [todoTitle, setTodoTitle] = React.useState('');

    function addTodo() {
        setTodos([...todos, {title: todoTitle}]);

        createTodo(todoTitle);
    }

  return (
    <div>
        <div>
            <input type="text" value={todoTitle} onInput={
                (e) => setTodoTitle(e.target.value)
            } placeholder='Add todo' className='px-4 py-2 border border-gray-700 rounded' />
            <button className='bg-red-600 text-white rounded px-4 py-2' onClick={addTodo}>Add Todo</button>
        </div>
        <ul>
            {
                todos.map((t, i) => (
                    <li key={i}>
                        {t.title}
                    </li>
                ))
            }
        </ul>
    
    </div>
  )
}
