'use client'
import { circleData } from "@/data/data";
import { tripActivities } from "@/data/data";
import { useState } from "react";
import CustomDateTimePicker from "../CustomDateTime/CustomDateTimePicker";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDropdown from "../Dropdown/CustomDropdown";
import './DateTimePlaceSelection.css';

const DateTimePlaceSelection = () => {
    const [destination, setDestination] = useState('');
    const [activity, setActivity] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [searchDisabled, setSearchDisabled] = useState(true);
    const [startDate, setStartDate] = useState(new Date());

    const updateSearchDisabled = () => {
        setSearchDisabled(!destination || !activity || !startDate || (adults + children) === 0 || rooms === 0);
    };

    const handleDropdownChange = (e: any, setState: any) => {
        setState(e.target.value);
        updateSearchDisabled();
    };

    const handleDestinationChange = (value: any, type: string) => {
        setDestination(value);
        console.log(value, 'value');
        console.log(type, 'place');
    }

    const handleActivityChange = (value: any, type: string) => {
        setActivity(value);
        console.log(value, ' : Value', type, ' : type')
        console.log(activity, 'activity');
    }

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
                <div className="flex gap-2 shadow-md bg-white rounded-[30px] p-2 flex-col md:flex-row">
                    <div className="custom-dropdown">
                        <img src='https://cdn-icons-png.freepik.com/256/145/145591.png?semt=ais_hybrid' width={40} height={40} alt="destination icon" />
                        <div className="dropdown-content">
                            <span>Destination</span>
                            {/* <CustomDropdown
                                selectDropDownId="destination"
                                selectOptions={circleData}
                                selectValue={circleData[0]}
                                selectDropDownName='destination'
                                handleSelectOptionChange={(selected) => handleDestinationChange?.(selected, 'destination')}
                                isMultiSelect={false}
                                isDisabled={false}
                                isClearableForSingleSelect={false}
                                isLoading={false}
                                isSearchable={false}
                            /> */}
                            <CustomSelect
                                isClearable={false}
                                options={circleData.map((item) => ({
                                    label: item.label,
                                    value: item.id
                                }))
                                }
                                customSelectClassName='select-width'
                                isSearchable={true}
                            // value={circleData.map((val) => { })}

                            />
                        </div>
                    </div>
                    <div className="custom-dropdown">
                        <img width={80} height={80} src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-hiking-icon-vector-isolated-on-white-background-png-image_4826683.png" alt="activity icon" />
                        <div className="dropdown-content">
                            <span>Activity</span>
                            <CustomSelect
                                isClearable={false}
                                options={tripActivities.map((item) => ({
                                    label: item.activity,
                                    value: item.activity
                                }))
                                }
                                customSelectClassName='select-width'
                                isSearchable={true}
                            // value={circleData.map((val) => { })}

                            />
                            {/* <CustomDropdown
                                selectDropDownId="activity"
                                selectOptions={tripActivities.map(item => ({ label: item.activity, value: item.activity }))}
                                selectValue={{ label: tripActivities[0].activity, value: tripActivities[0].activity }}
                                selectDropDownName='activity'
                                handleSelectOptionChange={(selected) => handleActivityChange?.(selected.value, 'activity')}
                                isMultiSelect={false}
                                isDisabled={false}
                                isClearableForSingleSelect={false}
                                isLoading={false}
                                isSearchable={true}
                            /> */}
                        </div>
                    </div>
                    <div className="custom-dropdown">
                        <img width={80} height={80} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8zMzM1NTUfHx8bGxsiIiK2traxsbEmJiaamprMzMwwMDDz8/MpKSnR0dFTU1P5+fmKiorY2Nji4uK9vb1AQECOjo4AAAAWFhZISEilpaWEhIRdXV1NTU3c3Nzp6el6enoNDQ2Xl5dvb29mZmap8wrzAAAEB0lEQVR4nO3cb0OqPByHcTeGkWNCYolpatb7f403YH/YvDvniGxQXZ/z6Phzuq8gMFmbTAAAAAAAAAAAAAAAAAAAAAAAAADgh0vniytaL2Zpbz3xZBkrtS46Ni7WpTLTXvvTu0JpIcxTx9aZEUKrrp9PGLexEFInu06Nd5GoWie3PfepXw+m7mQ079R43iQ0Dz33qV9NQtEpYf5FwryXjl1hv1u8m7QTpovLpNY2XLy/6m4/bLzZQZeqVCcrK+FsFakLrGZWwtVHoZSH2TDhqp1nlymjxYfYSjhX4hJqbiWMPytaq6wYZl9dGq3bnewzYdQqaWHMcoiAs1jbnfSVsA6pBthT927A6xJGf0ootY7DH3FezNvHa96VdsJnc4lnO2H5UdBv73IIHbBQsu6OiNeHzd3mxEpYHDYXKayE743vDuvmoCNFFPpi7jZpPtr40X74ijP+V9c0j83XQQe/mNs2e8/Z2/aeMK8/TFl/Fbddu9pNfq/rXUe7o7mHatNKGXUbIi6a40viXpem9XdRi/uwp8RU1gl15j6+LGX1sOk2jK2iaCnU2bkva/YXGXZs/JnQ+WRfVXVQven4qjfVIVS9nj2cNe8lhkromh423X/GmG8O/zPEb7ahHmwbBkBCL0jYKxJ6QcJekdCLsAnFj0843DYU62kI68ES1iPgEMRge2lQJCQhCb9IGOZIowdLWJ0tbkIY7mzxC874JOwJCb34jQnzwrGzbhbt3XJh3RA8qxatX5pHknC+iixxJNo/h2+eE7v+vGlVcxE5rVetmztjSejc85XaupVyZ5yLIHPXqjY3eixq/AmFkzBxyiQkoW8kJCEJSegfCUlIQhL6d/nY4uclPNuG0i4n3y7hbOVOv9f2CNidnN8eAae6tKvlCEfAeZpb0tTqkVOttctu6+r/n8WRJPSIhF6QsFck9IKEvfomCa+Yaf9NEp7758wjSbi4z2xP23aE4/rJLq+PrWq+darZfWs6/EgSzkttM/aVd+yUnStv45TL8V2X/r7xIQlJSELfSEhCEpLQPxKSkIQk9O8fZu4pZ+aeMzfvzzP3ovHdt8j306Wr3WB2Vm2vLJGfVZetyZnjSOjTN0l44W9t7acPl1AE3IYydMK3g1/HJT4uk+rzQ3MAb+vTPP79mVd7PC32E3h9msnxdH5L/K/FOU10PQUgOf79qT3KJ7uymXkgVfZw69PxKRLNdz78op8v9dR0KYU2iVdayPqfeQkdcFJEWkpnBolHwZf6mtQLJolQCaUuB1hWMJ9MT3/66Dtl9fomHmhx4UUW1WtDeo1Y54uybquj9WG5jd1BQd9U9DrIwpcf8t185tN8N/gquwAAAAAAAAAAAAAAAAAAAAAAAADQs/8AdLiTEoZppycAAAAASUVORK5CYII=" alt="date icon" />
                        <div className="dropdown-content">
                            <span>Date</span>
                            <CustomDateTimePicker selectsRange={false}
                                showTimePicker={false}
                                startDate={startDate}
                                onChange={handleDateChange}
                            />
                            {/* <DatePicker selected={startDate} onChange={handleDateChange} placeholderText="Select Date" /> */}
                        </div>
                    </div>
                    <button className="search-button" style={{ marginRight: '10px' }} disabled={searchDisabled}>Search</button>
                </div>
            </div>
        </>
    );
}

export default DateTimePlaceSelection;
