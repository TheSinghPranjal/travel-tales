'use client'
import { useRef, useState } from "react";

const Test5 = () => {

    const enteredText = useRef<HTMLInputElement>(null)
    const [ticket, setTicket] = useState<{ id: number, ticketValue: string, completed: boolean }[]>([])

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

        </>
    )
}

export default Test5;