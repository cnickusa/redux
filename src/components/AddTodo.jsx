import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
    const [todoContent, setTodoContent] = useState('');
    const dispatch = useDispatch('');

    function createTodo() {
        if(!todoContent.trim()) return alert('Input is empty!');

        let newTodo = {
            id: Date.now(),
            body: todoContent,
            status: false
        };

        dispatch(addTodo(newTodo));

        setTodoContent('');
    }

    return (
        <div>
            <h3>Create TODO</h3>
            <input type="text" onChange={e => setTodoContent(e.target.value)} value={todoContent}></input>
            <button onClick={createTodo}>Add</button>
        </div>
    );
};

export default AddTodo;