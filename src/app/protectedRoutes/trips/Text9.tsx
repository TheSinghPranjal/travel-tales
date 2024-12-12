'use client'
import { useEffect, useState } from "react"
import './test.css'

const Test9 = () => {



    const [color, setColor] = useState('red')

    useEffect(() => {
        const timer = setInterval(() => {
            if (color === 'red') { setColor('green') }
            else if (color === 'green')
                setColor('yellow')
            else (color === 'yellow')
            setColor('red')
        }, 200)

        clearInterval(timer);

    }, [color])

    return (
        <>
            <div className="box-black flex flex-col">
                <div className={`red ${color === 'red' ? 'active' : ''}`}>

                </div>
                <div className={`yellow ${color === 'yellow' ? 'active' : ''}`}>

                </div>
                <div className={`green ${color === 'green' ? 'active' : ''}`}>

                </div>
            </div>


        </>
    )
}

export default Test9;