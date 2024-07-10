'use client'
import { useState } from "react";
import DatePicker from "react-datepicker";
import './DateTimePlaceSelection.css';
import calendar from '../../assets/calendar.png';
import activity from '../../assets/activity.png';
import date from '../../assets/date.png';
import guest from '../../assets/guest.png';
import Image from 'next/image'

const destinations = ['Bangalore', 'Agra', 'Pune'];
const activities = ['Kayaking', 'Water Sports', 'Trekking'];

const DateTimePlaceSelection = () => {

    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [searchDisabled, setSearchDisabled] = useState(true);

    const updateSearchDisabled = () => {
        setSearchDisabled(!destination || !activity || !startDate || (adults + children) === 0 || rooms === 0);
    };

    const handleDropdownChange = (e: any, setState: any) => {
        setState(e.target.value);
        updateSearchDisabled();
    };

    const handleDateChange = (date: any) => {
        setStartDate(date);
        updateSearchDisabled();
    };

    const handleCounterChange = (value: number, setState: any) => {
        setState((prev: number) => Math.max(prev + value, 0));
        updateSearchDisabled();
    };

    return (
        <>
            <div>
                <div className="custom-dropdown-container" >
                    <div className="custom-dropdown">
                        <Image width={40} height={40} src="/assets/placeholder.png" alt="destination icon" />
                        <div className="dropdown-content">
                            <span>Destination</span>
                            <select value={destination} onChange={(e) => handleDropdownChange(e, setDestination)}>
                                <option value="">Where to?</option>
                                {destinations.map((dest, index) => (
                                    <option key={index} value={dest}>{dest}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="custom-dropdown" >
                        <Image width={40} height={40} src="/assets/hiking.png" alt="activity icon" />
                        <div className="dropdown-content">
                            <span>Activity</span>
                            <select value={activity} onChange={(e) => handleDropdownChange(e, setActivity)}>
                                <option value="">All activity</option>
                                {activities.map((act, index) => (
                                    <option key={index} value={act}>{act}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="custom-dropdown">
                        <Image width={40} height={40} src="/assets/calendar.png" alt="date icon" />
                        <div className="dropdown-content">
                            <span>Date</span>
                            <DatePicker selected={startDate} onChange={handleDateChange} placeholderText="Select Date" />
                        </div>
                    </div>
                    {/* <div className="custom-dropdown">
                        <img src="guest.jpeg" alt="guest icon" />
                        <div className="dropdown-content">
                            <span>Guests</span>
                            <div className="counter">
                                <div>Adults: {adults}</div>
                                <button onClick={() => handleCounterChange(1, setAdults)}>+</button>
                                <button onClick={() => handleCounterChange(-1, setAdults)}>-</button>
                            </div>
                            <div className="counter">
                                <div>Children: {children}</div>
                                <button onClick={() => handleCounterChange(1, setChildren)}>+</button>
                                <button onClick={() => handleCounterChange(-1, setChildren)}>-</button>
                            </div>
                            <div className="counter">
                                <div>Rooms: {rooms}</div>
                                <button onClick={() => handleCounterChange(1, setRooms)}>+</button>
                                <button onClick={() => handleCounterChange(-1, setRooms)}>-</button>
                            </div>
                        </div>
                    </div> */}
                    <button className="search-button" disabled={searchDisabled}>Search</button>
                </div>
            </div>

        </>
    )

}

export default DateTimePlaceSelection;