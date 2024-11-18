'use client'
import { useRef, useState } from "react";
import { newDate } from "react-datepicker/dist/date_utils";

const Test8 = () => {
    const enteredText = useRef<HTMLInputElement>(null);
    const [ticket, setTicket] = useState<{ id: number, ticketDetail: string, completed: boolean }[]>([])

    const addTicket = () => {
        const enteredTextValue = enteredText.current!.value;
        console.log(enteredTextValue, " hey enteredTextVal")
        if (enteredTextValue) {
            const newTicket = {
                id: Math.random(),
                ticketDetail: enteredTextValue,
                completed: false,
            }
            setTicket((prev) => [...prev, newTicket]);
        }
        enteredText.current!.value = '';

    }

    const deleteTicket = (itemId: any) => {
        console.log(itemId, 'heyId')

        setTicket(ticket.filter(
            item => {
                console.log(item, 'item')
                console.log(item.id, 'item.id')
                return (item.id !== itemId)
            }
            // item => item.id !== itemId
        ))
    }

    const editTicket = (itemId: any) => {
        console.log(itemId, 'hey edit id')
        const newTicket = ticket.map(
            (item) => item.id === itemId ? { ...item, ticketDetail: "edited ticket" } : item
        )
        setTicket(newTicket)
    }

    return (
        <>

            <input ref={enteredText} placeholder='enter Test 8 tickets' />
            <button onClick={addTicket}> Add ticket</button>

            {
                ticket.map((item, index) =>
                    <>
                        <div key={index}>

                            <div >
                                {item.ticketDetail}
                            </div>
                            <button onClick={() => deleteTicket(item.id)} >Delete</button>
                            <button onClick={() => editTicket(item.id)} >Delete</button>
                        </div>
                    </>

                )


            }



        </>
    )

}

export default Test8;