'use client';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Step.css';

interface Step1Props {
    setIsStepValid: (isValid: boolean) => void;
}

const Step1: React.FC<Step1Props> = ({ setIsStepValid }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        secondaryPhoneNumber: '',
        secondaryEmail: '',
        email: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        secondaryPhoneNumber: '',
        email: '',
        secondaryEmail: ''
    });

    const [touchedFields, setTouchedFields] = useState({
        firstName: false,
        lastName: false,
        phoneNumber: false,
        secondaryPhoneNumber: false,
        email: false,
        secondaryEmail: false
    });

    // Retrieve data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Save data to localStorage whenever form data changes
    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const validateFields = () => {
        const newErrors = {
            firstName: formData.firstName ? '' : 'First Name is required',
            lastName: formData.lastName ? '' : 'Last Name is required',
            phoneNumber: formData.phoneNumber
                ? formData.phoneNumber.length === 10 && /^[0-9]+$/.test(formData.phoneNumber)
                    ? ''
                    : 'Phone Number must be 10 digits'
                : 'Phone Number is required',
            email: formData.email
                ? formData.email.includes('@') && (formData.email.endsWith('.com') || formData.email.endsWith('.in'))
                    ? ''
                    : 'Email must contain "@" and end with ".com" or ".in"'
                : 'Email is required',
            secondaryEmail: '',
            secondaryPhoneNumber: ''
        };

        setErrors(newErrors);

        // Return whether all fields are valid
        return Object.values(newErrors).every((error) => error === '');
    };

    useEffect(() => {
        setIsStepValid(validateFields());
    }, [formData]);

    const handleBlur = (field: keyof typeof touchedFields) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
        validateFields();
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
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
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        onBlur={() => handleBlur('firstName')}
                        error={touchedFields.firstName && !!errors.firstName}
                        helperText={touchedFields.firstName ? errors.firstName : ''}
                    />
                    <TextField
                        type="number"
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                            handleChange('phoneNumber', value);
                        }}
                        onBlur={() => handleBlur('phoneNumber')}
                        error={touchedFields.phoneNumber && !!errors.phoneNumber}
                        helperText={touchedFields.phoneNumber ? errors.phoneNumber : ''}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
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
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        onBlur={() => handleBlur('lastName')}
                        error={touchedFields.lastName && !!errors.lastName}
                        helperText={touchedFields.lastName ? errors.lastName : ''}
                    />
                    <TextField
                        fullWidth
                        type="text"
                        label="Secondary Phone Number"
                        variant="outlined"
                        placeholder="Enter Secondary Number"
                        value={formData.secondaryPhoneNumber}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                            handleChange('secondaryPhoneNumber', value);
                        }}
                        onBlur={() => handleBlur('secondaryPhoneNumber')}
                        error={touchedFields.secondaryPhoneNumber && !!errors.secondaryPhoneNumber}
                        helperText={touchedFields.secondaryPhoneNumber ? errors.secondaryPhoneNumber : ''}
                    />
                    <TextField
                        fullWidth
                        label="Secondary Email"
                        variant="outlined"
                        placeholder="Enter Secondary Email"
                        value={formData.secondaryEmail}
                        onChange={(e) => handleChange('secondaryEmail', e.target.value)}
                        onBlur={() => handleBlur('secondaryEmail')}
                        error={touchedFields.secondaryEmail && !!errors.secondaryEmail}
                        helperText={touchedFields.secondaryEmail ? errors.secondaryEmail : ''}
                    />
                </div>
            </div>
        </form>
    );
};

export default Step1;