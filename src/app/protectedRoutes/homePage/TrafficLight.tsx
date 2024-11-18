'use client'
import { useEffect, useState } from "react";
import './homePage.css'

const TrafficLight = () => {
    const [light, setLight] = useState('red');


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (light === 'red') {
    //             setLight('green')
    //         }
    //         else if (light === 'green') {
    //             setLight('yellow')
    //         }
    //         else if (light === 'yellow') {
    //             setLight('red')
    //         }
    //     }, light === 'red' ? 20000 : light === 'green' ? 10000 : 2000)

    //     return (() => {
    //         clearInterval(timer)
    //     })

    // }, [light])


    useEffect(() => {
        const timer = setTimeout(() => {
            if (light === 'red') {
                setLight('green');
            }
            else if (light === 'green') {
                setLight('yellow');
            }
            else if (light === 'yellow') {
                setLight('red');
            }
        }, 300)

        return (() => {
            clearInterval(timer)
        })
    }, [light])




    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if (light === 'red') {
    //             setLight('green');
    //         } else if (light === 'green') {
    //             setLight('yellow');
    //         } else if (light === 'yellow') {
    //             setLight('red');
    //         }
    //     }, light === 'red' ? 5000 : light === 'yellow' ? 2000 : 4000);

    //     return () => clearTimeout(timer);
    // }, [light]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log(light, 'Light')
    //         switch (light) {
    //             case 'red':
    //                 setLight('green');
    //                 break;
    //             case 'green':
    //                 setLight('yellow');
    //                 break;
    //             case 'yellow':
    //                 setLight('red');
    //                 break;
    //             default:
    //                 setLight('red');
    //         }
    //     }, 8000);

    //     return () => clearTimeout(timer);
    // }, [light]);

    return (
        <>
            {/* <div className="traffic-light-container">
                <div className={`light red ${light === 'red' ? 'active' : ''}`}></div>
                <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`}></div>
                <div className={`light green ${light === 'green' ? 'active' : ''}`}></div>
            </div> */}
            <div className="traffic-box flex flex-col">
                <div className={`red ${light === 'red' ? 'active' : ''}`}></div>
                <div className={`yellow ${light === 'yellow' ? 'active' : ''}`} ></div>
                <div className={`green ${light === 'green' ? 'active' : ''}`}></div>

            </div>
        </>
    );
};

export default TrafficLight;
