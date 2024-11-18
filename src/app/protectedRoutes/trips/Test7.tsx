import { HTMLInputTypeAttribute, useRef } from "react";

const Test7 = () => {

    const inputText = useRef<HTMLInputElement>();

    const addTicket = () => {
        const enteredText = inputText.current!.value;

    }


    return (
        <>
            <div>
                Test 7
            </div>
            {/* <input placeholder="Enter the ticket" ref={inputText}  /> */}
            <button>Add ticket</button>
        </>
    )

}

export default Test7;