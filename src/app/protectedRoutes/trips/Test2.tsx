'use client'
import { useRef, useState } from "react";

const Test2 = () => {
    var nameRef = useRef<HTMLInputElement>(null);
    const [todo, setTodo] = useState<any[]>([]);

    const addTodo2 = () => {
        const enteredText = nameRef.current?.value;
        if (enteredText) {
            const newTodo = {
                text: enteredText,
                id: Math.random() // or you could use a library like uuid for unique ids
            }
            setTodo((prev) => [...prev, newTodo]);
            if (nameRef.current) {
                nameRef.current.value = '';
            }
        }
    }

    const deleteTodo = (id: number) => {
        setTodo(todo.filter(item => item.id !== id));
    }

    return (
        <>
            <div style={{ paddingTop: '40px' }}>
                <input type='text' placeholder="enter todo" ref={nameRef} />
                <button onClick={addTodo2}>Add</button>
            </div>

            {todo.map((item) => (
                <div key={item.id}> {/* Use item.id as the unique key */}
                    <div>{item.text}</div>
                    <button onClick={() => deleteTodo(item.id)}>Delete</button> {/* Pass item.id to delete function */}
                </div>
            ))}
        </>
    )
}

export default Test2;
