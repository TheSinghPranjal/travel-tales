'use client'
import { current } from "@reduxjs/toolkit";
import { useRef, useState } from "react";

const Test25 = () => {

    const [todo, setTodo] = useState<{ id: number, enteredText: string, completed: boolean }[]>([{ id: 0, enteredText: '', completed: false }]);
    const enteredText = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        const inputText = enteredText.current!.value
        console.log(inputText, 'hey input text')
        const newTodo = {
            id: Math.random,
            enteredText: inputText,
            completed: false,
        }

        setTodo([...todo, newTodo])

        // setTodo()

    }

    const deleteTodo = (idToDelete: number) => {
        console.log(idToDelete, 'hey idToDelete')
    }

    return (
        <>

            <input placeholder="Enter todo item" type="text" ref={enteredText} />
            <button onClick={addTodo}> Add</button>

            {
                todo.map((item, index) =>
                    <div key={index}>
                        <p >{item.enteredText}</p>
                        <button onClick={() => deleteTodo(item.id)}> Delete</button>
                    </div>

                )
            }
        </>
    )

}

export default Test25;