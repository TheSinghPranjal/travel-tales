'use client'
import { useState } from "react";

const Test11 = () => {
    const [personalData, setPersonalData] = useState({
        name: "",
        lastName: "",
        email: "",
        mobile: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPersonalData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitPersonalForm = () => {
        console.log(personalData, "personalData");
    };

    return (
        <>
            <div>Enter First Name</div>
            <input
                type="text"
                name="name"
                value={personalData.name}
                onChange={handleChange}
                placeholder="Enter First Name"
            />

            <div>Enter Last Name</div>
            <input
                type="text"
                name="lastName"
                value={personalData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
            />

            <div>Enter Email</div>
            <input
                type="email"
                name="email"
                value={personalData.email}
                onChange={handleChange}
                placeholder="Enter Email"
            />

            <div>Enter Mobile Number</div>
            <input
                type="tel"
                name="mobile"
                value={personalData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
            />

            <button onClick={submitPersonalForm}>Next Page</button>
        </>
    );
};

export default Test11;
