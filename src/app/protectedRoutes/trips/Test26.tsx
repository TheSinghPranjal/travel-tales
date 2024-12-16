'use client'
import { useRef, useState } from "react";

const Test26 = () => {

    const [todo, setTodo] = useState<{ id: number, enteredText: string, completed: boolean }[]>([]);
    const inputText = useRef<any>();
    const [editingId, setEditingId] = useState<number>();

    const addTodo = () => {
        const inputFieldText = inputText.current!.value;

        if (editingId) {
            setTodo(todo.map(item =>
                item.id === editingId ?
                    { ...item, enteredText: inputFieldText } : item
            ))
        }

        else if (inputFieldText) {
            const newTodo = {
                id: Math.random(),
                enteredText: inputFieldText,
                completed: false
            }

            setTodo([...todo, newTodo])
        }

        inputText.current!.value = ''
    }

    const deleteTodo = (id: number) => {
        setTodo(todo.filter(item => item.id !== id))
    }

    const editTodo = (id: number) => {
        const todoToEdit = todo.find(item => (item.id === id))
        if (todoToEdit) {
            inputText.current.value = todoToEdit.enteredText;
            setEditingId(id)
        }
    }

    return (
        <>

            <input placeholder="Enter Todo Here" ref={inputText} />
            <button onClick={addTodo}> Add Todo</button>

            {
                todo.map((item, index) =>
                    <>
                        <div key={index}>{item.enteredText}</div>
                        <button onClick={() => deleteTodo(item.id)}>Delete todo</button>
                        <button onClick={() => editTodo(item.id)}>Edit todo</button>
                    </>
                )
            }

        </>
    )

}

export default Test26;