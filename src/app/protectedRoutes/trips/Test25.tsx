'use client'
import { useRef, useState } from "react";

const Test25 = () => {

    const [todo, setTodo] = useState<{ id: number, enteredText: string, completed: boolean }[]>([{ id: 0, enteredText: '', completed: false }]);
    const [editingId, setEditingId] = useState<number | null>(null); // Track the id of the item being edited
    const enteredText = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        const inputText = enteredText.current!.value;

        if (inputText.trim() === "") return;

        if (editingId !== null) {
            // Edit the existing todo
            setTodo(todo.map(item =>
                item.id === editingId
                    ? { ...item, enteredText: inputText }
                    : item
            ));
            setEditingId(null);

        } else {
            // Add a new todo
            const newTodo = {
                id: Math.random(),
                enteredText: inputText,
                completed: false,
            };

            setTodo([...todo, newTodo]);
        }

        enteredText.current!.value = '';
    };

    const deleteTodo = (idToDelete: number) => {
        setTodo(todo.filter(item => item.id !== idToDelete));
    };

    const editTodo = (idToEdit: number) => {
        const todoToEdit = todo.find(item => item.id === idToEdit);
        if (todoToEdit) {
            enteredText.current!.value = todoToEdit.enteredText; // Pre-fill input field
            setEditingId(idToEdit); // Set the id of the item being edited
        }
    };

    return (
        <>
            <input placeholder="Enter todo item" type="text" ref={enteredText} />
            <button onClick={addTodo}>{editingId !== null ? "Update" : "Add"}</button>

            {todo.map((item) => (
                <div key={item.id}>
                    <p>{item.enteredText}</p>
                    <button onClick={() => editTodo(item.id)}>Edit</button>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
            ))}
        </>
    );
};

export default Test25;
