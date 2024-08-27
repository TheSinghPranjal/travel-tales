import React, { useState } from 'react';
import CustomOutlinedInput from "../CustomOutlinedInput/CustomOutlinedInput";
import './AddTraveller.css';

interface Traveller {
    firstName: string;
    lastName: string;
    age: string;
}

const AddTravellerCard: React.FC = () => {
    const [travellers, setTravellers] = useState<Traveller[]>([{ firstName: '', lastName: '', age: '' }]);

    const addTraveller = () => {
        setTravellers([...travellers, { firstName: '', lastName: '', age: '' }]);
    };

    const handleChange = (index: number, field: keyof Traveller, value: string) => {
        console.log(`Changing ${field} for index ${index} to ${value}`);
        const newTravellers = [...travellers];
        newTravellers[index] = { ...newTravellers[index], [field]: value };
        console.log('new Traveller', newTravellers)
        setTravellers(newTravellers);
    };


    const handleSubmit = () => {
        console.log('Traveller Details:', travellers);
    };

    return (
        <div className='cardContainer'>
            <div className='heading'>Add Traveller</div>
            {travellers.map((traveller, index) => (
                <div key={index} className='inputContainer'>
                    <div className='inputWrapper'>
                        <CustomOutlinedInput
                            label="First Name"
                            value={traveller.firstName}
                            onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                        />
                    </div>
                    <div className='inputWrapper'>
                        <CustomOutlinedInput
                            label="Last Name"
                            value={traveller.lastName}
                            onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                        />
                    </div>
                    <div className='inputWrapper'>
                        <CustomOutlinedInput
                            label="Age"
                            value={traveller.age}
                            onChange={(e) => handleChange(index, 'age', e.target.value)}
                        />
                    </div>
                </div>
            ))}
            <div className='addTraveller' onClick={addTraveller}>
                + Add Traveller
            </div>
            <button className='submitButton' onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}

export default AddTravellerCard;
