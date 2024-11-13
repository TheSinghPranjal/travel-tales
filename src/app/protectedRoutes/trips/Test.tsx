'use client'

import { useEffect, useRef, useState } from 'react'
import './trips.css'

export interface BoxProperties {
    key: number;
    value: string;
}

const Test = () => {

    const [array, setAaray] = useState([])

    // const [todo, setTodo] = useState()



    const pushToArray = (val: number) => {

        const item = [];

        item.push(() => {

        })


        console.log(item, 'Item')

    }

    useEffect(() => {

    }
    )


    const boxProperties: BoxProperties[] = [
        {
            key: 1,
            value: '00',

        },
        {
            key: 2,
            value: '01',

        },
        {
            key: 3,
            value: '02',
        },
        {
            key: 4,
            value: '10',
        },
        {
            key: 5,
            value: '11',
        },
        {
            key: 6,
            value: '12',
        },
        {
            key: 7,
            value: '20',
        },
        {
            key: 8,
            value: '21',
        },
        {
            key: 9,
            value: '22',
        }

    ]


    const [todo, setTodo] = useState<{ id: number, text: string, completed: boolean }[]>([]);
    const inputText = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        const enteredText = inputText.current?.value;
        if (enteredText && enteredText.trim()) {
            const newTodo = {
                id: Date.now(),
                text: enteredText,
                completed: false
            };
            setTodo((prev) => [...prev, newTodo]);

            if (inputText.current) {
                inputText.current.value = '';
            }
        }
    };

    const deleteTodo = (index: number) => {
        setTodo((prev) => prev.filter((_, i) => i !== index));
    };

    const addToDo33 = () => {
        const value = inputText?.current?.value;
        if (value) {
            const newTodo = {
                id: Date.now(),
                text: value,
                completed: false
            }
            setTodo((prev) => [...prev, newTodo])

        }
        if (inputText?.current) {
            inputText.current.value = ''
        }


    }



    const addTodo2 = () => {
        const enteredTodo = inputText?.current?.value
        if (enteredTodo) {
            const newTodo = {
                id: Date.now(),
                text: enteredTodo,
                completed: false
            }
            setTodo((prev) => [...prev, newTodo])
        }


        if (inputText.current) {
            inputText.current.value = ''
        }


    }

    const deleteTodo2 = (index: any) => {
        setTodo((prev) => prev.filter((_, i) => (i !== index)))

    }

    const [editingIndex, setEditingIndex] = useState<number | null>(null); // State for tracking which todo is being edited
    const [editingText, setEditingText] = useState<string>(''); //



    const editTodo = (index: number) => {
        const selectedTodo = todo[index];
        setEditingIndex(index);
        setEditingText(selectedTodo.text);
    };

    const saveEditedTodo = (index: number) => {
        setTodo((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, text: editingText } : todo
            )
        );
        setEditingIndex(null);
        setEditingText('');
    };



    return (
        <>
            {/* <div>
                <input ref={inputText} placeholder="Enter a TODO" />
                <button onClick={addToDo33} style={{ border: '2px', backgroundColor: 'green' }}>
                    Add TODO
                </button>

                <div>
                    <h1>List of TODOs</h1>
                    <ul>
                        {todo.map((item, index) => (
                            <li key={item.id}>
                                {item.text}
                                <button onClick={() => deleteTodo2(index)}>Delete</button>
                                <button onClick={() => editTodo(index)}>Edit</button>



                            </li>
                        ))}
                    </ul>
                </div>
            </div> */}

            <div>
                <input ref={inputText} placeholder="Enter a TODO" />
                <button onClick={addTodo} style={{ border: '2px', backgroundColor: 'green' }}>
                    Add TODO
                </button>

                <div>
                    <h1>List of TODOs</h1>
                    <ul>
                        {todo.map((item, index) => (
                            <li key={item.id}>
                                {editingIndex === index ? ( // Check if the current item is being edited
                                    <>
                                        <input
                                            value={editingText}
                                            onChange={(e) => setEditingText(e.target.value)}
                                        />
                                        <button onClick={() => saveEditedTodo(index)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        {item.text}
                                        <button onClick={() => deleteTodo(index)}>Delete</button>
                                        <button onClick={() => editTodo(index)}>Edit</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>










            {/* {boxProperties.map((item, key) => (
                <div key={key}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => { pushToArray(key) }} className="border-class" style={{}}>
                            {item.value}

                        </button>

                    </div>
                </div>


            ))} */}


            {/* <div style={{ marginTop: '20px' }}>
  
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={pushToArray} className="border-class" style={{}}>

                    </button>
                    <button className="border-class" style={{

                    }}>

                        01

                    </button>
                    <button className="border-class" style={{

                    }}>
                        02

                    </button>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="border-class" style={{}}>
                        10
                    </button>
                    <button className="border-class" style={{

                    }}>

                        11

                    </button>
                    <button className="border-class" style={{

                    }}>
                        12

                    </button>

                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="border-class" style={{}}>
                        20
                    </button>
                    <button className="border-class" style={{

                    }}>

                        21

                    </button>
                    <button className="border-class" style={{

                    }}>
                        22

                    </button>

                </div>
            </div> */}



        </>

    )

}

export default Test