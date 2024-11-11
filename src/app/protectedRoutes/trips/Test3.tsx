'use client'
import { useRef, useState } from "react";

const Test3 = () => {

    const [todo, setTodo] = useState<{ id: number, enteredTodo: string, completed: boolean }[]>([]);
    const enteredText = useRef<HTMLInputElement>(null);

    const addTodoToTheList = () => {
        const enteredTextValue = enteredText.current!.value;
        if (enteredTextValue) {
            const newTodo = {
                id: Date.now(),
                enteredTodo: enteredTextValue,
                completed: false
            }
            setTodo([...todo, newTodo])
        }
        console.log(enteredTextValue, "hey eneterdText vlaue")
    }

    const deleteTodoFromtheList = (id: number) => {

        setTodo(todo.filter(item => item.id !== id))


    }



    return (
        <>
            <h1 className="text-center text-xl">  This is test 3 page</h1>
            <h1 className="text-center text-lg">Enter todo for today</h1>
            <br></br>

            <div key="index">
                <input type='text' placeholder="Enter today's todo" ref={enteredText} />
            </div>

            <button onClick={addTodoToTheList}>Add Todo to the list</button>
            <br></br>

            {
                todo.map(
                    (item, index) =>
                        <div key={index}>
                            <h3>{item.enteredTodo}</h3>
                            <button onClick={() => deleteTodoFromtheList(item.id)}>Delete Todo</button>
                        </div>


                )
            }

        </>
    )

}

export default Test3;