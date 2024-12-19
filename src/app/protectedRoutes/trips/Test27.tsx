import { useRef, useState } from "react";

const Test27 = () => {


    const enteredInputFieldText = useRef<any>();
    const [ticket, setTicket] = useState<{ id: number, text: string, completed: boolean }[]>([])
    const [editingId, setEditingId] = useState<number>()

    const addTicket = () => {
        const enteredTicket = enteredInputFieldText.current!.value;

        if (editingId) {
            setTicket(ticket.map(item =>
                item.id === editingId ?
                    { ...item, text: enteredTicket } : item
            ))
        }

        if (enteredTicket) {
            const newTicket = {
                id: Math.random(),
                text: enteredTicket,
                completed: true
            }
            setTicket([...ticket, newTicket]);
            enteredInputFieldText.current.value = ''
        }

    }


    const deleteTicket = (id: number) => {
        setTicket(ticket.filter(item => item.id !== id))
    }

    // const editTicket = (id: number) => {
    //     const ticketToEdit = ticket.find(item => item.id === id)
    //     if (ticketToEdit) {
    //         enteredInputFieldText.current!.value = ticketToEdit?.text;
    //         setEditingId(id);
    //     }
    // }

    // const editTicket = (id: number) => {
    //     const ticketIdToEdit = ticket.find(item => item.id === id)
    //     if (ticketIdToEdit) {
    //         enteredInputFieldText.current.value = ''
    //         setEditingId(id)
    //     }

    // }


    // const editTicket = (id: number) => {

    //     const idToEdit = ticket.find(item => item.id === id)
    //     if (idToEdit) {
    //         enteredInputFieldText.current.value = idToEdit.id
    //         setEditingId(id)
    //     }

    // }

    // const editTicket = (id: number) => {

    //     const idToEdit = ticket.find(item => item.id === id)
    //     if (idToEdit) {
    //         enteredInputFieldText.current.value = idToEdit.text
    //         setEditingId(id)
    //     }
    // }

    // const editTicket = (id: number) => {
    //     const itemToEdit = ticket.find(item => item.id === id)
    //     if (itemToEdit) {
    //         enteredInputFieldText.current.value = itemToEdit.text
    //         setEditingId(id)
    //     }
    // }

    const editTicket = (id: number) => {
        const itemToEdit = ticket.find(item => item.id === id)
        if (itemToEdit) {
            enteredInputFieldText.current.value = itemToEdit.text
            setEditingId(id);
        }
    }

    return (
        <>

            <input placeholder="Enter Ticket" ref={enteredInputFieldText} />
            <button onClick={addTicket}>Add Ticket </button>

            {
                ticket.map((item, index) =>

                    <div key={index}>
                        {item.text}
                        <button onClick={() => { deleteTicket(item.id) }}>Delete Ticket</button>
                        <button onClick={() => { editTicket(item.id) }}>Edit Ticket</button>
                    </div>
                )
            }

        </>
    )
}

export default Test27;