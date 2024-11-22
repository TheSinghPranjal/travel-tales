'use client'
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Step.css';

interface Step1Props {
    setIsStepValid: (isValid: boolean) => void;
}

const Step1: React.FC<Step1Props> = ({ setIsStepValid }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });
    const [touchedFields, setTouchedFields] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        email: false,
    });

    const validateFields = () => {
        const newErrors = {
            firstName: firstName ? '' : 'First Name is required',
            lastName: lastName ? '' : 'Last Name is required',
            phoneNumber: phoneNumber
                ? phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber)
                    ? ''
                    : 'Phone Number must be 10 digits'
                : 'Phone Number is required',
            email: email
                ? email.includes('@') && (email.endsWith('.com') || email.endsWith('.in'))
                    ? ''
                    : 'Email must contain "@" and end with ".com" or ".in"'
                : 'Email is required',
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    useEffect(() => {
        setIsStepValid(validateFields());
    }, [firstName, lastName, phoneNumber, email]);

    const handleBlur = (field: keyof typeof touchedFields) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
        validateFields();
    };

    return (
        <form className="step1-container">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-columns">
                <div className="form-column">
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        onBlur={() => handleBlur('firstName')}
                        error={touchedFields.firstName && !!errors.firstName}
                        helperText={touchedFields.firstName ? errors.firstName : ''}
                    />
                    <TextField
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onBlur={() => handleBlur('phoneNumber')}
                        error={touchedFields.phoneNumber && !!errors.phoneNumber}
                        helperText={touchedFields.phoneNumber ? errors.phoneNumber : ''}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => handleBlur('email')}
                        error={touchedFields.email && !!errors.email}
                        helperText={touchedFields.email ? errors.email : ''}
                    />
                </div>
                <div className="form-column">
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        onBlur={() => handleBlur('lastName')}
                        error={touchedFields.lastName && !!errors.lastName}
                        helperText={touchedFields.lastName ? errors.lastName : ''}
                    />
                </div>
            </div>
        </form>
    );
};

export default Step1;
