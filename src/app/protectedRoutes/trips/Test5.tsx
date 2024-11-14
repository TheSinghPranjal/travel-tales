'use client'
import { useEffect, useRef, useState } from "react";

const Test5 = () => {

    const enteredText = useRef<HTMLInputElement>(null)
    const [ticket, setTicket] = useState<{ id: number, ticketValue: string, completed: boolean }[]>([])

    const [light, setLight] = useState<string>('green');

    const addTicket = () => {
        const enteredTextValue = enteredText.current!.value;
        console.log(enteredTextValue, " hey eneteredTextVal")
        if (enteredTextValue) {
            const newTicket = {
                id: Date.now(),
                ticketValue: enteredTextValue,
                completed: false
            }

            setTicket([...ticket, newTicket])

            if (enteredText.current) {
                enteredText.current.value = ''
            }



        }
    }

    const deleteTicket = (id: number) => {
        setTicket(ticket.filter(item => item.id !== id))

    }

    useEffect(() => {
        if (light === 'red') {
            setLight('green')
        }
        else if (light === 'green') {
            setLight('yellow')
        }
        else (light === 'yellow')
        {
            setLight('red')
        }
    })

    return (
        <>
            <div>Test 5</div>

            <input placeholder="Enter text fot the ticket" type='text' ref={enteredText} />
            <button onClick={addTicket}>
                Click to add ticket
            </button>

            {ticket.map((item, index) =>
                <div key={index}>
                    {item.ticketValue}
                    <button onClick={() => deleteTicket(item.id)}> Delete Ticket</button>

                </div>
            )}




            <h1>
                Making of Traffic Light
            </h1>

            <div>

            </div>


        </>
    )
}

export default Test5;