import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import Swal from 'sweetalert2';
import '../assets/css/Todo.css'
import todoData from '../assets/data/todoData';

const TodoList = (props) => {

    const [state, setState] = useState({ items: [] })
    const [currentState, setCurrentState] = useState({ currentItem: [] })

    useEffect(() => {
        setState({ items: todoData });
    }, [])

    useEffect(() => {
        setCurrentState({
            currentItem: {
                text: '',
                key: '',
                completed: false
            }
        })
    }, [])


    useEffect(() => {
        // console.log("Loading")
    }, [state.items])

    useEffect(() => {
        // console.log("Loading")
    }, [currentState.currentItem])

    const handleChange = (e) => {
        setCurrentState({
            currentItem: {
                text: e.target.value,
                key: Date.now(),
                completed: false
            }
        })

        console.log(currentState.currentItem.text)
    }

    const addItem = (e) => {
        e.preventDefault();
        const newItem = currentState.currentItem;
        if (newItem.text !== "") {
            const newItems = [...state.items, newItem]
            setState({ items: newItems })
            setCurrentState({
                currentItem: {
                    text: '',
                    key: '',
                    completed: false
                }
            })
        }
    }

    const deleteItem = (key) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const filteredItems = state.items.filter(item => item.key !== key);
                setState({
                    items: filteredItems
                })

                Swal.fire({
                    title: 'Removedfrom list',
                    icon: 'success',
                    showClass: {
                        popup: 'animated fadeInDown faster'
                    },
                    hideClass: {
                        popup: 'animated fadeOutUp faster'
                    }
                })
            }
        })


    }

    const setUpdate = (text, key) => {
        const items = state.items;
        items.map(item => {
            if (item.key === key) {
                item.text = text
            }
            return items
        })
        setState({
            items: items
        })
    }

    return (
        <div className="request">
            <header>
                <form id="todoForm" onSubmit={addItem}>
                    <input
                        type="text"
                        placeholder="Enter new todo"
                        value={currentState.currentItem.text}
                        onChange={handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </header>
            <TodoItem
                items={state.items}
                deleteItem={deleteItem}
                setUpdate={setUpdate}
            />
        </div>
    )
}

export default TodoList