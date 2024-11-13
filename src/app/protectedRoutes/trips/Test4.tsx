'use client'
import { useRef, useState } from "react";



const Test4 = () => {

    const inputText = useRef<HTMLInputElement>(null);
    const [todo, setTodo] = useState<{ id: number, enteredText: string, completed: boolean }[]>([]);

    const [editableText, setEditableText] = useState<string>('');

    const addTodo = () => {

        const enteredTextValue = inputText.current!.value;
        console.log(enteredTextValue, "hey EnteeredTextValue");

        if (enteredTextValue) {
            const newTodo = {
                id: Date.now(),
                enteredText: enteredTextValue,
                completed: false
            }

            setTodo([...todo, newTodo])
        }


        if (inputText.current) {
            inputText.current.value = ''
        }


    }



    const deleteTodo = (id: any) => {
        console.log(id, ' heyyy id')
        setTodo(todo.filter(item => {
            console.log(item, 'item.id')
            return (item.id !== id)
        }))
    }

    const editTodo = (item: any) => {
        console.log(item, 'Item')
        const textToEdit = item.enteredText;
        setEditableText(textToEdit);


        // setEditableText(editableText = )

    }




    return (
        <>


            <h1>HEY TEST FOUR</h1>

            <input type='text' placeholder="Enter the text for Todo" ref={inputText} />
            <button onClick={addTodo}> Add todo to the list</button>

            {
                todo.map(
                    (item, index) =>
                        <div key={index}>
                            <h3>{item.enteredText}</h3>
                            <button onClick={() =>
                                deleteTodo(item.id)
                            }>Delete Todo</button>
                            <button onClick={() => editTodo(item)}>Edit Todo</button>
                        </div>
                )
            }

        </>
    )
}

export default Test4;